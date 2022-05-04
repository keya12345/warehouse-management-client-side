// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAfVWVTRWM_jX8UpxXzwAXCcrcXY_8qXiI",
  authDomain: "warehouse-management-26831.firebaseapp.com",
  projectId: "warehouse-management-26831",
  storageBucket: "warehouse-management-26831.appspot.com",
  messagingSenderId: "439146552844",
  appId: "1:439146552844:web:4d4e05fb3a41adcfc1d829",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
