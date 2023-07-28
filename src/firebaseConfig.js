import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMCcroUc9BfQJh2MWSANemXaKM22A9o24",
  authDomain: "comision-43290.firebaseapp.com",
  projectId: "comision-43290",
  storageBucket: "comision-43290.appspot.com",
  messagingSenderId: "265928622280",
  appId: "1:265928622280:web:5b280ae8bf69d99e7625fd",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
