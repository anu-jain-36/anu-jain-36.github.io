import { useParams, useLocation } from 'wouter';
import JournalViewer from '../components/JournalViewer';

function JournalViewerPage() {
  const params = useParams<{ filename: string }>();
  const [, navigate] = useLocation();

  const filename = params.filename;

  if (!filename) {
    return <div>No file specified</div>;
  }

  return (
    <JournalViewer 
      filename={`${filename}.md`} 
      onBack={() => navigate('/')} 
    />
  );
}

export default JournalViewerPage;