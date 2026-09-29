import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import RawStitch from './RawStitch';
import Background3D from './components/Background3D';
import GlobalPatch from './components/GlobalPatch';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const LoginRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
};

export default function App() {
  return (
    <GlobalProvider>
      <Background3D />
      <Router>
        <GlobalPatch />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginRoute><RawStitch /></LoginRoute>} />
          <Route path="/*" element={<ProtectedRoute><RawStitch /></ProtectedRoute>} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
