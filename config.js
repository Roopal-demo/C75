import * as firebase from 'firebase'
require('@firebase/firestore')

//const firebase=require("firebase");
//const firestore=require('@firebase/firestore');

  const firebaseConfig = {
    apiKey: "AIzaSyCq0HP19oxggXDySc6DOl_zmdCk8nbHD9c",
    authDomain: "wily-app-72a5f.firebaseapp.com",
    databaseURL:"https://console.firebase.google.com/project/wily-app-72a5f/firestore/data~2Fbooks",
    projectId: "wily-app-72a5f",
    storageBucket: "wily-app-72a5f.appspot.com",
    messagingSenderId: "1006644933883",
    appId: "1:1006644933883:web:b4eb70496e189f04ac2c5e"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  
}


export default firebase.firestore();