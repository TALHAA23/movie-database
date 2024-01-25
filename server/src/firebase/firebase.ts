// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getStorage, ref, uploadString } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4jANn2C2gL7IMJtpeql7NglV_kkeFWk0",
  authDomain: "movie-database-41342.firebaseapp.com",
  projectId: "movie-database-41342",
  storageBucket: "movie-database-41342.appspot.com",
  messagingSenderId: "754051674791",
  appId: "1:754051674791:web:c9a2439175339b3c776182",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export { storage };
