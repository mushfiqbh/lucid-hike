import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGNv9gNZRkl4FCGtDlAjQM30PpgC8cemA",
  authDomain: "lucid-hike.firebaseapp.com",
  projectId: "lucid-hike",
  storageBucket: "lucid-hike.firebasestorage.app",
  messagingSenderId: "375083103699",
  appId: "1:375083103699:web:bb4d621d628cf29c18eb26",
  measurementId: "G-GKHR8JFH95",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);
