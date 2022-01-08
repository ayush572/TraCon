import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuIst3PWNeN9ABfUbsfP3YhV0MRaMMr60",
  authDomain: "tracon-07.firebaseapp.com",
  projectId: "tracon-07",
  storageBucket: "tracon-07.appspot.com",
  messagingSenderId: "826566159340",
  appId: "1:826566159340:web:a08b1a071a1d32a0866ec9",
  measurementId: "G-9K07BSC3JV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const get_data = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(doc.data());
//   });
// };

// get_data();

export { db };
