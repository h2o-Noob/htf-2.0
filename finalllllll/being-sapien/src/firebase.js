import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCBCiNC01B2LEXxS5c_fImvNbjzJb9ix5Q",
  authDomain: "being-sapien-fe441.firebaseapp.com",
  projectId: "being-sapien-fe441",
  storageBucket: "being-sapien-fe441.appspot.com",
  messagingSenderId: "688634093141",
  appId: "1:688634093141:web:da246b1d8cf56eab90bedc",
  measurementId: "G-LSHJY1PH3K"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }