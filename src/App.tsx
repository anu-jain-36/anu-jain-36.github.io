import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import JournalViewerPage from "@/components/journalViewerPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/journal/:filename" component={JournalViewerPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
  
  );
}

export default App;
