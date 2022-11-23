import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDSFVcsS-9mEGCyUo9iubFPGm5pYg-bjBc",
    authDomain: "restaurant-app-4338d.firebaseapp.com",
    databaseURL: "https://restaurant-app-4338d-default-rtdb.firebaseio.com",
    projectId: "restaurant-app-4338d",
    storageBucket: "restaurant-app-4338d.appspot.com",
    messagingSenderId: "17448773211",
    appId: "1:17448773211:web:de79bb86cc19c4cd1dc17e"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };