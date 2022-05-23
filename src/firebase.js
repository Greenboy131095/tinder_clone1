import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
const firebaseConfig = {
  apiKey: "AIzaSyD2uMHG8oZqC469jK3GuAyvOY7rocd4MLg",
  authDomain: "tinder-f0f7a.firebaseapp.com",
  databaseURL: "https://tinder-f0f7a-default-rtdb.firebaseio.com",
  projectId: "tinder-f0f7a",
  storageBucket: "tinder-f0f7a.appspot.com",
  messagingSenderId: "606038810945",
  appId: "1:606038810945:web:151b9b8d8161cfe09901c0",
  measurementId: "G-W9B847MLV2"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const database = app.firestore();
export default database; 
