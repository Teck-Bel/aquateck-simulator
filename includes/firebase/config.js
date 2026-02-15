import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyANlFkNlU_MB1YA5I6dIh2E4QuCQ_g0eHM",
  authDomain: "aquateck-sim.firebaseapp.com",
  projectId: "aquateck-sim",
  storageBucket: "aquateck-sim.firebasestorage.app",
  messagingSenderId: "286597592168",
  appId: "1:286597592168:web:1b6124ce6736150c7cb7dd",
  measurementId: "G-SVM6L2SKG9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
