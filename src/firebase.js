import { initializeApp } from "firebase/app";
import {
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

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

// References

// Create a user with email
const registerUser = async (email, password, nickname) => {
  // Create user
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const user = res.user;

  // Create user instance in "users" collection
  await setDoc(doc(db, "users", user.uid), {
    nickname,
    email,
  });
  // Create a "list" collection where lists will be stored
  await setDoc(doc(db, "lists", user.uid), { lists: [] });
  // Create a "categories" collection where categories and defaults will be stored
  await setDoc(doc(db, "categories", user.uid), { category: [] });
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

const deleteSingleUser = async (user) => {
  const categoriesRef = doc(db, "categories", user);
  const listRef = doc(db, "lists", user);
  const userRef = doc(db, "users", user);

  deleteUser(user)
    .then(deleteDoc(categoriesRef))
    .then(deleteDoc(listRef))
    .then(deleteDoc(userRef))
    .then(() => {
      return true;
    })
    .catch((error) => console.log(error));
};

const pushNewList = async (user, newElement) => {
  const name = doc(db, "lists", user);
  await updateDoc(name, { lists: arrayUnion(newElement) }, { merge: true });
};

const getLists = async (user) => {
  const listRef = doc(db, "lists", user);
  const docSnap = await getDoc(listRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return [];
  }
};

const getUserData = async (user) => {
  const listRef = doc(db, "users", user);
  const docSnap = await getDoc(listRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
};

const updateUserData = async (user, userData) => {
  const userRef = doc(db, "users", user);
  try {
    await updateDoc(userRef, userData);
    console.log("Update complite");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getSingleList = async (user) => {
  const listRef = doc(db, "lists", user);
  const docSnap = await getDoc(listRef);
  if (docSnap.exists()) {
    return docSnap.data();
  }
};

// Custom update an object in list
// I did not find native solution sadly :(
const updateSingleList = async (user, data) => {
  console.log(data);
  const listRef = doc(db, "lists", user);

  // Get list of user's lists
  const oldList = await getLists(user);

  // Find the list and add data
  const newList = { ...oldList };
  // Remove object from list
  newList.lists = oldList["lists"].filter(
    (singleList) => singleList.id !== data.id
  );
  // Add object!
  console.log(newList);
  newList["lists"].push(data);

  // Update the DB!
  await updateDoc(listRef, newList);
};

const delateSingleList = async (user, data) => {
  const listRef = doc(db, "lists", user);

  const oldList = await getLists(user);

  const newList = { ...oldList };

  newList.lists = newList.lists = oldList["lists"].filter(
    (singleList) => singleList.id !== data.id
  );

  await updateDoc(listRef, newList);
};

const pushNewCategory = async (user, newCategory) => {
  const name = doc(db, "categories", user);
  await updateDoc(name, { category: arrayUnion(newCategory) }, { merge: true });
};

const getUserCategories = async (user) => {
  const listRef = doc(db, "categories", user);
  const docSnap = await getDoc(listRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return [];
  }
};

const updateUserCategories = async (user, data) => {
  const name = doc(db, "categories", user);
  await updateDoc(name, data);
};
export {
  auth,
  db,
  delateSingleList,
  deleteSingleUser,
  getLists,
  getSingleList,
  getUserCategories,
  getUserData,
  logout,
  pushNewCategory,
  pushNewList,
  registerUser,
  sendPasswordReset,
  updateSingleList,
  updateUserCategories,
  updateUserData,
};
