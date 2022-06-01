// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUp3zT3-i6eXfqaGcke4STZ4Q76gOLanc",
    authDomain: "novo-projeto-8d671.firebaseapp.com",
    projectId: "novo-projeto-8d671",
    storageBucket: "novo-projeto-8d671.appspot.com",
    messagingSenderId: "832253326521",
    appId: "1:832253326521:web:3027fc3c7515c94730d768",
    measurementId: "G-XW90W92353"
  };
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const database = getDatabase(app);

export default database


