import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWntx3KPfMIxojxSkzeXDZtjvRLb56K44",
  authDomain: "food-app-b69d5.firebaseapp.com",
  databaseURL:
    "https://food-app-b69d5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-app-b69d5",
  storageBucket: "food-app-b69d5.appspot.com",
  messagingSenderId: "181939575996",
  appId: "1:181939575996:web:3221187f385425b06d84b9",
  measurementId: "G-VEGD9SFFQY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default app;
