import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArCP6s8_lnVcqwPOx_tGdeJ7pI9262nzY",
  authDomain: "nftasker-4ba4b.firebaseapp.com",
  projectId: "nftasker-4ba4b",
  storageBucket: "nftasker-4ba4b.appspot.com",
  messagingSenderId: "157830561560",
  appId: "1:157830561560:web:d418f9d8df2a88a027a86d",
  measurementId: "G-LDF6XQL0E4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);