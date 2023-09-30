import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnP8gy2CcY2mu0_c00RaD6D9lseagokvA",
  authDomain: "fir-65cd9.firebaseapp.com",
  projectId: "fir-65cd9",
  storageBucket: "fir-65cd9.appspot.com",
  messagingSenderId: "554238785807",
  appId: "1:554238785807:web:e7d5ba7c168144ed4fa67a",
  measurementId: "G-WLWXN13T1C"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
