import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaqdhI5zCbzCYYBols9W89pH5gXfn-miQ",
    authDomain: "twitter-clone-c00e2.firebaseapp.com",
    projectId: "twitter-clone-c00e2",
    storageBucket: "twitter-clone-c00e2.appspot.com",
    messagingSenderId: "251076112678",
    appId: "1:251076112678:web:492df29acf94c3b84611e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
