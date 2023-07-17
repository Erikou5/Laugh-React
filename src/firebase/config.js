import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAjNsq8ckHx1yFsmtl8nCnFeEKPYNkn88",
  authDomain: "laugh-talerjs.firebaseapp.com",
  projectId: "laugh-talerjs",
  storageBucket: "laugh-talerjs.appspot.com",
  messagingSenderId: "466448790629",
  appId: "1:466448790629:web:0ea500856b06465d01428c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// nuestra referncia a la base de datos :

export const database = getFirestore(app)