import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvzhg_wdwTncCp4X5uOuqiWvSoimL4EV0",
  authDomain: "shopper-77a6f.firebaseapp.com",
  projectId: "shopper-77a6f",
  storageBucket: "shopper-77a6f.appspot.com",
  messagingSenderId: "467553839839",
  appId: "1:467553839839:web:085038149275f012c5176a",
  measurementId: "G-SFB6GE9WDZ",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

const signIn = async (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

const registerUser = async (email, password, nickname) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, "users", user.uid), {
      authProvider: "local",
      nickname,
      email,
    });
  } catch (err) {
    console.log(err);
  }
};

const sendPasswordReset = async (email) => {
  try {
    sendPasswordResetEmail(auth, email).then("Password reset sent!");
  } catch (e) {
    console.log(e);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, signIn, registerUser, sendPasswordReset, logout };
