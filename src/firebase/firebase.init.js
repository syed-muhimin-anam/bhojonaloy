// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBntPmLajTPl66lN-JacNtdsGvdcLnDiAU",
  authDomain: "bhojonaloy-restaurant.firebaseapp.com",
  projectId: "bhojonaloy-restaurant",
  storageBucket: "bhojonaloy-restaurant.firebasestorage.app",
  messagingSenderId: "543182035214",
  appId: "1:543182035214:web:83cae4f05ac49455aa1f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);