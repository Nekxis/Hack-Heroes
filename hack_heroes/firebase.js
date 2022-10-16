import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAl7CsIkn9QwPE7nacyDxRrk5axgq3i6kA",
    authDomain: "hack-heroes-project.firebaseapp.com",
    projectId: "hack-heroes-project",
    storageBucket: "hack-heroes-project.appspot.com",
    messagingSenderId: "642285336043",
    appId: "1:642285336043:web:271094e739c8724e2015ae"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
