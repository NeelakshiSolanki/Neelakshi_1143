import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostAnalytics";
import AudiencePage from "./pages/Audience";
import ComparisonPage from "./pages/Comparison";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/audience" element={<AudiencePage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
