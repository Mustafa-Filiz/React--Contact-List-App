
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set  } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBGoVhzwHxbpl10TK-GJUvDTJ-dvwW1aXc",
  authDomain: "react--contact-list-app.firebaseapp.com",
  projectId: "react--contact-list-app",
  storageBucket: "react--contact-list-app.appspot.com",
  messagingSenderId: "247807283858",
  appId: "1:247807283858:web:236a1b293a13ab23c78c4b"
};


const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export const addContact = () => {
	set(ref(database, "contacts"))
}