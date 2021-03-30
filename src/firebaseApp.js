import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBRdFrOdYJqZKTjvBj5jeIYDEY3-UN71Nk",
  authDomain: "pratica-react-firebase-c3a0e.firebaseapp.com",
  projectId: "pratica-react-firebase-c3a0e",
  storageBucket: "pratica-react-firebase-c3a0e.appspot.com",
  messagingSenderId: "62597325827",
  appId: "1:62597325827:web:ede696ce935765c76cda36"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()