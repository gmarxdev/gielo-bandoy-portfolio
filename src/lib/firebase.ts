import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAq5yAH6I93AyTcb0bvLASCPrDZCAS77II",
  authDomain: "portfolio-visit-counter-aee38.firebaseapp.com",
  databaseURL: "https://portfolio-visit-counter-aee38-default-rtdb.firebaseio.com",
  projectId: "portfolio-visit-counter-aee38",
  storageBucket: "portfolio-visit-counter-aee38.firebasestorage.app",
  messagingSenderId: "1031978534423",
  appId: "1:1031978534423:web:382cce9236177400e73e52",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
