import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";

const withTimeout = (promise: any, ms: number, defaultRet: any) => {
  return Promise.race([
    promise,
    new Promise((resolve) => setTimeout(() => resolve(defaultRet), ms))
  ]);
};

export const addMember = async (memberData: any) => {
  try {
    const p = addDoc(collection(db, "members"), {
      ...memberData,
      createdAt: new Date().toISOString()
    });
    const docRef = await withTimeout(p, 5000, { id: 'local-' + Math.random() });
    return docRef.id;
  } catch (e) {
    console.error("Error adding member: ", e);
    throw e;
  }
};

export const fetchMembers = async () => {
  try {
    const q = query(collection(db, "members"), orderBy("createdAt", "desc"));
    const p = getDocs(q);
    const querySnapshot: any = await withTimeout(p, 3000, null);
    
    if (!querySnapshot) {
      console.warn("Firebase fetchMembers timed out.");
      return [];
    }
    
    const members: any[] = [];
    querySnapshot.forEach((doc: any) => {
      members.push({ id: doc.id, ...doc.data() });
    });
    return members;
  } catch (e) {
    console.error("Error fetching members: ", e);
    return [];
  }
};

export const deleteMember = async (id: string) => {
  try {
    await deleteDoc(doc(db, "members", id));
  } catch (e) {
    console.error("Error deleting member: ", e);
    throw e;
  }
};
