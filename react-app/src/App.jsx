import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FrontEnd from "./pages/FrontEnd";
import Shopify from "./pages/Shopify";
import LogoDesign from "./pages/LogoDesign";
import VideoEditing from "./pages/VideoEditing";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ...existing routes... */}
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/logo" element={<LogoDesign />} />
        <Route path="/video" element={<VideoEditing />} />

        {/* New dynamic project route */}
        <Route path="/project/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}
