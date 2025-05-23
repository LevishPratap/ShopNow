// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpFS2WlYvbSVaiK2CbEDX1fmkQFN_Rmzk",
  authDomain: "eccom-shop-539fa.firebaseapp.com",
  projectId: "eccom-shop-539fa",
  storageBucket: "eccom-shop-539fa.firebasestorage.app",
  messagingSenderId: "560140588925",
  appId: "1:560140588925:web:ce12f4c47af92024dd5e14",
  measurementId: "G-C60MJTF7YN"
};


const firebase_config_connection = initializeApp(firebaseConfig);
export default firebase_config_connection
