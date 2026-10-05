import { collection, addDoc, getDocs, doc, updateDoc, arrayUnion, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

const withTimeout = (promise: any, ms: number, defaultRet: any) => {
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(() => resolve(defaultRet), ms))
  ]);
};

export const addEvent = async (eventData: any) => {
  try {
    const p = addDoc(collection(db, "events"), {
      ...eventData,
      createdAt: new Date().toISOString()
    });
    // Don't await indefinitely
    const docRef = await withTimeout(p, 5000, { id: 'local-' + Math.random() });
    return docRef.id;
  } catch (e) {
    console.error("Error adding event: ", e);
    throw e;
  }
};

export const fetchEvents = async () => {
  try {
    const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const p = getDocs(q);
    
    // Timeout after 3 seconds so the UI never hangs
    const querySnapshot: any = await withTimeout(p, 3000, null);
    
    if (!querySnapshot) {
      console.warn("Firebase fetchEvents timed out. Falling back to local data.");
      return [];
    }
    
    const events: any[] = [];
    querySnapshot.forEach((doc: any) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return events;
  } catch (e) {
    console.error("Error fetching events: ", e);
    return []; // Return empty instead of throwing so UI renders
  }
};

export const registerForEvent = async (eventId: string, user: { uid: string, name: string, email: string }) => {
  try {
    const eventRef = doc(db, "events", eventId);
    const p = updateDoc(eventRef, {
      attendees: arrayUnion(user)
    });
    await withTimeout(p, 3000, null);
  } catch (e) {
    console.error("Error registering for event: ", e);
    throw e;
  }
};
