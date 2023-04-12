import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBz7q5VQWNWvgA2jaYnpt7rF-ijxi-DI1Q",
    authDomain: "moments-38af8.firebaseapp.com",
    databaseURL: "https://moments-38af8-default-rtdb.firebaseio.com",
    projectId: "moments-38af8",
    storageBucket: "moments-38af8.appspot.com",
    messagingSenderId: "129501112942",
    appId: "1:129501112942:web:c5ebd787fa797725c7947f",
    measurementId: "G-1FGKLRT09B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// UPDATE METHOD FOR AVOID CONNECTION FIRESTORE PROBLEMS
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
});