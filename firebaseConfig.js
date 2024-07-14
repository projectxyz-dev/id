// public/firebaseConfig.js
var firebaseConfig = {
    apiKey: "{ SECRETS.FIREBASE_API_KEY }",
    authDomain: "through-the-shadows.firebaseapp.com",
    databaseURL: "https://through-the-shadows-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "through-the-shadows",
    storageBucket: "through-the-shadows.appspot.com",
    messagingSenderId: "545447466617",
    appId: ""{ SECRETS.FIREBASE_APP_ID }"",
    measurementId: "{ SECRETS.FIREBASE_MEASUREMENT_ID }"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
