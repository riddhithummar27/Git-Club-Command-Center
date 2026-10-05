import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import RawStitch from './RawStitch';
import GlobalPatch from './components/GlobalPatch';
import { signInWithGoogle, signInWithGithub, signInWithEmail, signUpWithEmail, signOut } from './services/auth';
import { addEvent, fetchEvents, registerForEvent } from './services/events';
import { addMember, fetchMembers, deleteMember } from './services/members';

// Expose to window for raw HTML templates
(window as any).firebaseLoginGoogle = signInWithGoogle;
(window as any).firebaseLoginGithub = signInWithGithub;
(window as any).firebaseLoginEmail = signInWithEmail;
(window as any).firebaseSignUpEmail = signUpWithEmail;
(window as any).firebaseLogout = signOut;
(window as any).firebaseAddEvent = addEvent;
(window as any).firebaseFetchEvents = fetchEvents;
  (window as any).firebaseAddMember = addMember;
  (window as any).firebaseFetchMembers = fetchMembers;
  (window as any).firebaseDeleteMember = deleteMember;
(window as any).firebaseRegisterEvent = registerForEvent;


(window as any).autofillFromUrl = async (url: string, nameInputId: string, descInputId: string) => {
  if (!url || !url.startsWith('http')) return;
  try {
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
    const res = await fetch(proxyUrl);
    const data = await res.json();
    if (!data.contents) return;
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, "text/html");
    
    let title = doc.querySelector('meta[property="og:title"]')?.getAttribute('content');
    let desc = doc.querySelector('meta[property="og:description"]')?.getAttribute('content');
    
    if (!title && doc.title) title = doc.title;
    
    const nameEl = document.getElementById(nameInputId) as HTMLInputElement;
    const descEl = document.getElementById(descInputId) as HTMLTextAreaElement;
    
    if (title && nameEl && !nameEl.value) {
      nameEl.value = title;
    }
    if (desc && descEl && !descEl.value) {
      descEl.value = desc;
    }
  } catch (err) {
    console.error("Autofill failed:", err);
  }
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/showcase" replace />;
};

const LoginRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};



export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <GlobalPatch />
        <Routes>
          <Route path="/" element={<Navigate to="/showcase" replace />} />
          <Route path="/showcase" element={<RawStitch />} />
          <Route path="/login" element={<LoginRoute><RawStitch /></LoginRoute>} />
          <Route path="/signup" element={<LoginRoute><RawStitch /></LoginRoute>} />
          <Route path="/*" element={<ProtectedRoute><RawStitch /></ProtectedRoute>} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}
