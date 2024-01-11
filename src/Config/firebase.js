// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const api = import.meta.env.VITE_API
const firebaseConfig = {
    apiKey: api,
    authDomain: "quick-share-7992d.firebaseapp.com",
    projectId: "quick-share-7992d",
    storageBucket: "quick-share-7992d.appspot.com",
    messagingSenderId: "607078096037",
    appId: "1:607078096037:web:71e8913a6fbcb3ccd3814c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)