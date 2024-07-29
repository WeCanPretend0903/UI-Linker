import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCQmxTYsgbwOBaF90Uh0zOqXJa9RWPeJI",
  authDomain: "linker-csc336.firebaseapp.com",
  projectId: "linker-csc336",
  storageBucket: "linker-csc336.appspot.com",
  messagingSenderId: "946487925063",
  appId: "1:946487925063:web:d410dae2e5a5b2eb35d462",
  measurementId: "G-NT33JK65FQ",
};

const firebaseApp = initializeApp(firebaseConfig);

const database = getFirestore(firebaseApp);

export default database;
