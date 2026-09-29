import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import RawStitch from './RawStitch';
import Background3D from './components/Background3D';
import GlobalPatch from './components/GlobalPatch';

export default function App() {
  return (
    <GlobalProvider>
      <Background3D />
      <Router>
        <GlobalPatch />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/*" element={<RawStitch />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
