// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADL-UGRcSK_XOANNQnoFgjub5RM9o1dBg",
  authDomain: "coffee-store-a82b3.firebaseapp.com",
  projectId: "coffee-store-a82b3",
  storageBucket: "coffee-store-a82b3.appspot.com",
  messagingSenderId: "490071617999",
  appId: "1:490071617999:web:e77c270ef2d46fa37a62ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth