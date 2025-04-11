// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa-3CA-B38FGJXljc_dlM4kB-duVRx7ZI",
  authDomain: "cyberhunt-1673a.firebaseapp.com",
  projectId: "cyberhunt-1673a",
  storageBucket: "cyberhunt-1673a.firebasestorage.app",
  messagingSenderId: "949475610553",
  appId: "1:949475610553:web:c7ef7ee0eae745c39ab068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };