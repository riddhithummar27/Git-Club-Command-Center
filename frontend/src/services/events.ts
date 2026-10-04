import { collection, addDoc, getDocs, doc, updateDoc, arrayUnion, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

export const addEvent = async (eventData: any) => {
  try {
    const docRef = await addDoc(collection(db, "events"), {
      ...eventData,
      createdAt: new Date().toISOString()
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding event: ", e);
    throw e;
  }
};

export const fetchEvents = async () => {
  try {
    const q = query(collection(db, "events"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const events: any[] = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return events;
  } catch (e) {
    console.error("Error fetching events: ", e);
    throw e;
  }
};

export const registerForEvent = async (eventId: string, user: { uid: string, name: string, email: string }) => {
  try {
    const eventRef = doc(db, "events", eventId);
    await updateDoc(eventRef, {
      attendees: arrayUnion(user)
    });
  } catch (e) {
    console.error("Error registering for event: ", e);
    throw e;
  }
};
