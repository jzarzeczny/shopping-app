import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  deleteDoc,
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
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();

// Sign into the app
const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};

// Create a user with email
const registerUser = async (email, password, nickname) => {
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
  await setDoc(listRef, { list: [] }).catch((e) => console.log(e));
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
  const listRef = doc(db, "currentList", user.uid);
  await setDoc(listRef, {
    list: data.list,
    id: revisedRandId(),
    status: "open",
    date: Date.now(),
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
    return { list: [] };
  }
};

// Delate data from current list
const deleteListFromCurrent = async (user) => {
  const listRef = doc(db, "currentList", user.uid);
  await deleteDoc(listRef);
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

    return { list: [] };
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
  deleteListFromCurrent,
  addList,
  getList,
};
