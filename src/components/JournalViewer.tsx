import { useState, useEffect } from 'react';
import { FileText, ArrowLeft, ArrowRight, Home, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import journalEntries  from './data/journalEntries';

interface JournalViewerProps {
  filename: string;
  onBack?: () => void;
  onNavigate?: (slug: string) => void;
}

const JournalViewer: React.FC<JournalViewerProps> = ({ filename, onBack, onNavigate }) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract slug from filename (e.g., "week42-25.md" -> "week42-25")
  const currentSlug = filename.replace('.md', '');
  
  // Find current entry and navigation entries
  const currentIndex = journalEntries.findIndex(entry => entry.slug === currentSlug);
  const prevEntry = currentIndex > 0 ? journalEntries[currentIndex - 1] : null;
  const nextEntry = currentIndex < journalEntries.length - 1 ? journalEntries[currentIndex + 1] : null;

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

  const handlePrevious = () => {
    if (prevEntry && onNavigate) {
      onNavigate(prevEntry.slug);
    } else if (onBack) {
      onBack();
    }
  };

  const handleNext = () => {
    if (nextEntry && onNavigate) {
      onNavigate(nextEntry.slug);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevious}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {prevEntry ? (
              <>
                <ArrowLeft className="w-5 h-5" />
                <span className="hidden sm:inline">{prevEntry.week}</span>
              </>
            ) : (
              <>
                <Home className="w-5 h-5" />
                <span className="hidden sm:inline">Home</span>
              </>
            )}
          </button>

          {nextEntry && (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="hidden sm:inline">{nextEntry.week}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>
        
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