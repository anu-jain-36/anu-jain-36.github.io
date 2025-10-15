import { useState, useEffect } from 'react';
import { FileText, ArrowLeft, AlertCircle } from 'lucide-react';

interface JournalViewerProps {
  filename: string;
  onBack?: () => void;
}

// Simple markdown parser for common elements
const parseMarkdown = (text: string): string => {
  if (!text) return '';
  
  let html = text;
  
  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-5">$1</h1>');
  
  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  
  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // Code blocks
  html = html.replace(/```([^`]+)```/g, '<pre class="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4"><code>$1</code></pre>');
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm">$1</code>');
  
  // Lists
  html = html.replace(/^\* (.*$)/gim, '<li class="ml-6 list-disc">$1</li>');
  html = html.replace(/^- (.*$)/gim, '<li class="ml-6 list-disc">$1</li>');
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="ml-6 list-decimal">$1</li>');
  
  // Wrap consecutive list items in ul
  html = html.replace(/(<li.*?<\/li>\n?)+/g, (match) => {
    return `<ul class="my-4">${match}</ul>`;
  });
  
  // Paragraphs
  html = html.split('\n\n').map(paragraph => {
    if (paragraph.trim() && !paragraph.startsWith('<')) {
      return `<p class="my-4 leading-relaxed">${paragraph}</p>`;
    }
    return paragraph;
  }).join('\n');
  
  return html;
};

const JournalViewer: React.FC<JournalViewerProps> = ({ filename, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`/journal/${filename}`);
        
        if (!response.ok) {
          throw new Error('File not found');
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (filename) {
      fetchMarkdown();
    }
  }, [filename]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400 animate-pulse" />
          <p className="text-gray-600">Loading journal entry...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h2 className="text-xl font-bold text-center mb-2">Error Loading File</h2>
          <p className="text-gray-600 text-center mb-4">{error}</p>
          {onBack && (
            <button
              onClick={onBack}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Return Home
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        )}
        
        <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="flex items-center gap-2 mb-6 text-gray-500 text-sm">
            <FileText className="w-4 h-4" />
            <span>{filename}</span>
          </div>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }}
          />
        </article>
      </div>
    </div>
  );
};

export default JournalViewer;