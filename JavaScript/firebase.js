// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA_lj8R6cH51Te8puIckfvFtRnwKO0998g",
    authDomain: "shaun-supremacy-57163.firebaseapp.com",
    projectId: "shaun-supremacy-57163",
    storageBucket: "shaun-supremacy-57163.appspot.com",
    messagingSenderId: "653782344536",
    appId: "1:653782344536:web:a1d09b69e90d8fb11bbb2d",
    measurementId: "G-085N2Z09JS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function storeUserData(userName, userYearLevel, userCourse) {
    try {
        const userData = {
            name: userName,
            yearLevel: userYearLevel,
            course: userCourse
        };
        const docRef = doc(db, "users", userName);
        console.log("DocRef:", docRef);
        console.log("UserData:", userData);

        await setDoc(docRef, userData);
        console.log("Document written with ID: ", userName);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}