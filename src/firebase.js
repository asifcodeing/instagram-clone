import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAkQ_ObQzq5pBA9lblB2YHSVEpK2uC4ZQ",
    authDomain: "instagram-clone-6fba1.firebaseapp.com",
    databaseURL: "https://instagram-clone-6fba1.firebaseio.com",
    projectId: "instagram-clone-6fba1",
    storageBucket: "instagram-clone-6fba1.appspot.com",
    messagingSenderId: "141133201845",
    appId: "1:141133201845:web:289338510c0717b24bd9fc",
    measurementId: "G-65B2Y6K73W"
});

const db = firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();


export { db,auth,storage };