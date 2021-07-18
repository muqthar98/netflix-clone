import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-abNTls6aJ9fpIkXsdCSiOytSNhkwwyM",
    authDomain: "netflix-clone-ffc35.firebaseapp.com",
    projectId: "netflix-clone-ffc35",
    storageBucket: "netflix-clone-ffc35.appspot.com",
    messagingSenderId: "820779917280",
    appId: "1:820779917280:web:1a939dfb5e9df049685585"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const provider = new firebase.auth.GoogleAuthProvider()

const auth = firebase.auth()

export {auth,provider};