// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmDyp-HI3Xzir6hE_LxNScVtkmZnyNqQ4",
    authDomain: "warehouse-management-2d0b5.firebaseapp.com",
    projectId: "warehouse-management-2d0b5",
    storageBucket: "warehouse-management-2d0b5.appspot.com",
    messagingSenderId: "187819833914",
    appId: "1:187819833914:web:5f6509a712778330325303"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
