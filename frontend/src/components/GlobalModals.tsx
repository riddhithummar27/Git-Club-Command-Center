import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalContext';

export default function GlobalModals() {
    const { addProject, isProjectModalOpen, setProjectModalOpen, addEvent, isEventModalOpen, setEventModalOpen, addMember, isMemberModalOpen, setMemberModalOpen } = useGlobalContext();
    
    const [projectForm, setProjectForm] = useState({ name: '', category: 'Open Source', pitch: '' });
    const [eventForm, setEventForm] = useState({ title: '', date: '', type: 'Hackathon', description: '' });
    const [memberForm, setMemberForm] = useState({ name: '', role: 'Developer', email: '', department: 'CSE' });

    const handleProjectSubmit = (e) => { e.preventDefault(); addProject({ ...projectForm, status: 'Active' }); setProjectModalOpen(false); setProjectForm({ name: '', category: 'Open Source', pitch: '' }); };
    const handleEventSubmit = (e) => { e.preventDefault(); addEvent(eventForm); setEventModalOpen(false); setEventForm({ title: '', date: '', type: 'Hackathon', description: '' }); };
    const handleMemberSubmit = (e) => { e.preventDefault(); addMember(memberForm); setMemberModalOpen(false); setMemberForm({ name: '', role: 'Developer', email: '', department: 'CSE' }); };

    return (
        <>
            
            
            
        </>
    );
}
