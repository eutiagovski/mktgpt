// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET_STOREAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGES_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app, 'southamerica-east1');
// const functions = getFunctions(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Point to the Storage emulator running on localhost.
if (window.location.hostname === "localhost") {
  connectFunctionsEmulator(functions, "localhost", 5001);
  // connectFirestoreEmulator(db, "localhost", 8080);
  // connectAuthEmulator(auth, "http://localhost:9099");
  // connectStorageEmulator(storage, "localhost", 9199);
} else {
  const analytics = getAnalytics(app);
}

export { functions, db };
