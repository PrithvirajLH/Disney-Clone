import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYOH0cj8Vw3gZLFDNUZ3Q7NS4unR3XKpI",
  authDomain: "disneyplus-clone24.firebaseapp.com",
  projectId: "disneyplus-clone24",
  storageBucket: "disneyplus-clone24.appspot.com",
  messagingSenderId: "951141561391",
  appId: "1:951141561391:web:9f254027f5c96af49a42da",
  measurementId: "G-R5W8S5ZG2G",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
