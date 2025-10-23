import { useParams, useLocation } from 'wouter';
import JournalViewer from '../components/JournalViewer';

function JournalViewerPage() {
  const params = useParams<{ filename: string }>();
  const [, navigate] = useLocation();

  const filename = params.filename;

  if (!filename) {
    return <div>No file specified</div>;
  }

   const handleNavigate = (slug: string) => {
    navigate(`/journal/${slug}`);
  };

  const handleBack = () => {
    navigate('/');
    setTimeout(() => {
      const journalSection = document.getElementById('journal');
      journalSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <JournalViewer 
       filename={`${filename}.md`} 
      onBack={handleBack}
      onNavigate={handleNavigate}
    />
  );
}

export default JournalViewerPage;






