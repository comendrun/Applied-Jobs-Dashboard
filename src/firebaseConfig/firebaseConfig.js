import { initializeApp } from "htttps://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAt2BjcZsCaVZl4ofAxoKKJAubsQKIdpQ",
  authDomain: "job-application-dashboard-0.firebaseapp.com",
  projectId: "job-application-dashboard-0",
  storageBucket: "job-application-dashboard-0.appspot.com",
  messagingSenderId: "774413577843",
  appId: "1:774413577843:web:317b68e87cbe3180f70406",
};

const app = initializeApp(firebaseConfig);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("logged in!");
  } else {
    console.log("No user");
  }
});

export const auth = getAuth(app)

export default app;