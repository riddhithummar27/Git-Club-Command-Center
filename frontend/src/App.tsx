import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";
import Announcements from "./pages/Announcements";
import Analytics from "./pages/Analytics";
import Notifications from "./pages/Notifications";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;
