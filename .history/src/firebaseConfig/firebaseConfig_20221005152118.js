import { initializeApp } from "firebase/app";

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
export const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log("signed in!");
  } else {
    console.log("checking if user is signed in: No user");
  }
});

export default app;
