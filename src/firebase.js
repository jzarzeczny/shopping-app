import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { revisedRandId } from "./utils/idGenerator";

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

// Sign into the app
const signIn = async (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

// Create a user with email
const registerUser = async (email, password, nickname) => {
  try {
    // Create user
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Create user instance in "users" collection
    await setDoc(doc(db, "users", user.uid), {
      authProvider: "local",
      nickname,
      email,
    });

    // Create user instance in "lists hisotry" collection
    const listRef = doc(db, "list", user.uid);
    await setDoc(listRef, { list: {} }).catch((e) => console.log(e));
  } catch (err) {
    console.log(err);
  }
};
// Send password reset - currently dead
const sendPasswordReset = async (email) => {
  try {
    sendPasswordResetEmail(auth, email).then("Password reset sent!");
  } catch (e) {
    console.log(e);
  }
};
// Logout user
const logout = () => {
  signOut(auth);
};

// Add data to current list
const addListToCurrent = async (user, data) => {
  console.log("In firebase function");
  console.log(data);
  const listRef = doc(db, "currentList", user.uid);
  await setDoc(listRef, {
    list: data,
    // id: revisedRandId(),
    // date: Date.now(),
  }).catch((e) => console.log(e));
};

// Get data from current list
const getListFromCurrent = async (user) => {
  const listRef = doc(db, "currentList", user.uid);

  const docSnap = await getDoc(listRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("There is no data");
  }
};

// Add list to history collection
const addList = async (user, list) => {
  const listRef = doc(db, "list", user.uid);

  await updateDoc(
    listRef,
    { list: arrayUnion({ list }) },
    { merge: true }
  ).catch((e) => console.log(e));
};

// Get list from hisotry collection
const getList = async (user) => {
  const listRef = doc(db, "list", user.uid);

  const docSnap = await getDoc(listRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("There is no data");
  }
};

export {
  auth,
  db,
  signIn,
  registerUser,
  sendPasswordReset,
  logout,
  addListToCurrent,
  getListFromCurrent,
  addList,
  getList,
};
