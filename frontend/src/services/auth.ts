import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../firebase";

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    // Save user info locally for quick access by the HTML templates
    localStorage.setItem('auth', 'true');
    localStorage.setItem('user_name', result.user.displayName || 'Git Club User');
    localStorage.setItem('user_email', result.user.email || '');
    localStorage.setItem('user_photo', result.user.photoURL || '');
    localStorage.setItem('user_uid', result.user.uid);
    
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const signInWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    localStorage.setItem('auth', 'true');
    localStorage.setItem('user_name', result.user.displayName || 'Git Club User');
    localStorage.setItem('user_email', result.user.email || '');
    localStorage.setItem('user_photo', result.user.photoURL || '');
    localStorage.setItem('user_uid', result.user.uid);
    
    return result.user;
  } catch (error) {
    console.error("Error signing in with GitHub:", error);
    throw error;
  }
};

export const signInOrSignUpWithEmail = async (email: string, pass: string) => {
  try {
    // Try to sign in first
    const result = await signInWithEmailAndPassword(auth, email, pass);
    localStorage.setItem('auth', 'true');
    localStorage.setItem('user_name', result.user.displayName || email.split('@')[0]);
    localStorage.setItem('user_email', result.user.email || '');
    localStorage.setItem('user_photo', result.user.photoURL || '');
    localStorage.setItem('user_uid', result.user.uid);
    return result.user;
  } catch (error: any) {
    // If user not found, auto-register them
    if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
      try {
        const result = await createUserWithEmailAndPassword(auth, email, pass);
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user_name', email.split('@')[0]);
        localStorage.setItem('user_email', result.user.email || '');
        localStorage.setItem('user_photo', '');
        localStorage.setItem('user_uid', result.user.uid);
        return result.user;
      } catch (signUpError) {
        console.error("Error signing up with Email:", signUpError);
        throw signUpError;
      }
    }
    console.error("Error signing in with Email:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    localStorage.removeItem('auth');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_photo');
    localStorage.removeItem('user_uid');
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
