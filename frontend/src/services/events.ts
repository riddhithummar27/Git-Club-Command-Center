const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const addEvent = async (eventData: any) => {
  try {
    const res = await fetch(`${API_URL}/events`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData)
    });
    const data = await res.json();
    return data.id;
  } catch (e) {
    console.error("Error adding event: ", e);
    throw e;
  }
};

export const fetchEvents = async () => {
  try {
    const res = await fetch(`${API_URL}/events`);
    if (!res.ok) throw new Error('Network error');
    const events = await res.json();
    return events;
  } catch (e) {
    console.error("Error fetching events: ", e);
    return []; 
  }
};

export const registerForEvent = async (eventId: string, user: { uid: string, name: string, email: string }) => {
  try {
    const res = await fetch(`${API_URL}/events/${eventId}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user })
    });
    if (!res.ok) throw new Error('Failed to register');
  } catch (e) {
    console.error("Error registering for event: ", e);
    throw e;
  }
};
