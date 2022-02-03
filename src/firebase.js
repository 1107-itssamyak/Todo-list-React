// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9lBdV5XhYEckqUBjkWjHq0c0Rm4Md2b8",
    authDomain: "todo-list-version1.firebaseapp.com",
    projectId: "todo-list-version1",
    storageBucket: "todo-list-version1.appspot.com",
    messagingSenderId: "135314804529",
    appId: "1:135314804529:web:af084e3669cc46ceb5ea10",
    measurementId: "G-LDZF6EPL9K"
});

const db = firebaseApp.firestore();
export { db };