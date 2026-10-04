import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import RawStitch from './RawStitch';
import GlobalPatch from './components/GlobalPatch';
import { signInWithGoogle, signOut } from './services/auth';
import { addEvent, fetchEvents, registerForEvent } from './services/events';

// Expose to window for raw HTML templates
(window as any).firebaseLogin = signInWithGoogle;
(window as any).firebaseLogout = signOut;
(window as any).firebaseAddEvent = addEvent;
(window as any).firebaseFetchEvents = fetchEvents;
(window as any).firebaseRegisterEvent = registerForEvent;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/showcase" replace />;
};

const LoginRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

// Clear authentication strictly on every reload or tab close to force re-login
window.addEventListener('beforeunload', () => {
  localStorage.removeItem('auth');
});

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <GlobalPatch />
        <Routes>
          <Route path="/" element={<Navigate to="/showcase" replace />} />
          <Route path="/showcase" element={<RawStitch />} />
          <Route path="/login" element={<LoginRoute><RawStitch /></LoginRoute>} />
          <Route path="/*" element={<ProtectedRoute><RawStitch /></ProtectedRoute>} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
