import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCi7_v7dfDAi71zAg-zah2Ev-O1dpuVQog",
  authDomain: "portfolio-9bd0a.firebaseapp.com",
  projectId: "portfolio-9bd0a",
  storageBucket: "portfolio-9bd0a.appspot.com",
  messagingSenderId: "268257893332",
  appId: "1:268257893332:web:ca0407a2caa5c8c7b91441"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}