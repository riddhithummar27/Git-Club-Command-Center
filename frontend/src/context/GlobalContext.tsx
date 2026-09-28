import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  pitch: string;
};

export type Member = {
  id: string;
  name: string;
  role: string;
  email: string;
  department: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  type: string;
  description: string;
};

type GlobalContextType = {
  projects: Project[];
  addProject: (p: Omit<Project, 'id'>) => void;
  members: Member[];
  addMember: (m: Omit<Member, 'id'>) => void;
  events: Event[];
  addEvent: (e: Omit<Event, 'id'>) => void;
  
  // Modals exposed for quick action FABs
  isProjectModalOpen: boolean;
  setProjectModalOpen: (b: boolean) => void;
  isMemberModalOpen: boolean;
  setMemberModalOpen: (b: boolean) => void;
  isEventModalOpen: boolean;
  setEventModalOpen: (b: boolean) => void;
  isCommandOpen: boolean;
  setCommandOpen: (b: boolean) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([
    { id: '1', name: 'GitClub Core Platform', category: 'Open Source', status: 'Active', pitch: 'The main platform' }
  ]);
  const [members, setMembers] = useState<Member[]>([
    { id: '1', name: 'Riddhi Thummar', role: 'Admin', email: 'admin@charusat.edu', department: 'CSE' }
  ]);
  const [events, setEvents] = useState<Event[]>([
    { id: '1', title: 'Hackathon 2.0', date: 'Oct 15, 2026', type: 'Hackathon', description: 'Annual hackathon' }
  ]);
  
  const [isProjectModalOpen, setProjectModalOpen] = useState(false);
  const [isMemberModalOpen, setMemberModalOpen] = useState(false);
  const [isEventModalOpen, setEventModalOpen] = useState(false);
  const [isCommandOpen, setCommandOpen] = useState(false);

  const addProject = (p: Omit<Project, 'id'>) => setProjects(prev => [{ ...p, id: Math.random().toString() }, ...prev]);
  const addMember = (m: Omit<Member, 'id'>) => setMembers(prev => [{ ...m, id: Math.random().toString() }, ...prev]);
  const addEvent = (e: Omit<Event, 'id'>) => setEvents(prev => [{ ...e, id: Math.random().toString() }, ...prev]);

  return (
    <GlobalContext.Provider value={{
      projects, addProject,
      members, addMember,
      events, addEvent,
      isProjectModalOpen, setProjectModalOpen,
      isMemberModalOpen, setMemberModalOpen,
      isEventModalOpen, setEventModalOpen
      , isCommandOpen, setCommandOpen
    }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error("useGlobalContext must be used within GlobalProvider");
  return ctx;
}
