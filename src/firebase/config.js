import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDHRVIKMf_4clbYjKjtP0LJlo0cqRFlnlc",
    authDomain: "vue-firebase-sites-27377.firebaseapp.com",
    projectId: "vue-firebase-sites-27377",
    storageBucket: "vue-firebase-sites-27377.appspot.com",
    messagingSenderId: "718576938192",
    appId: "1:718576938192:web:2985fee47bcaae9d7f02d5"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }