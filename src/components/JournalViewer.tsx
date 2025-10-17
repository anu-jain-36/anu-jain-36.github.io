import { useState, useEffect } from 'react';
import { FileText, ArrowLeft, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface JournalViewerProps {
  filename: string;
  onBack?: () => void;
}

const JournalViewer: React.FC<JournalViewerProps> = ({ filename, onBack }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/journal/${filename}`);
        
        if (!response.ok) {
          throw new Error(`Failed to load ${filename}`);
        }
        
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load file');
        setContent('');
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [filename]);

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
          {loading && (
            <div className="text-center text-gray-500">
              <FileText className="w-8 h-8 mx-auto mb-2 animate-pulse" />
              Loading...
            </div>
          )}
          
          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-md">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}
          
          {!loading && !error && (
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default JournalViewer;