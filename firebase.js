const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "attendence-app-94a2e.firebaseapp.com",

projectId: "attendence-app-94a2e",

storageBucket: "attendence-app-94a2e.firebasestorage.app",

messagingSenderId: "66194698417",

appId: "YOUR_APP_ID"

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
