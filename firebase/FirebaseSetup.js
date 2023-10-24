import { getFirestore } from "firebase/firestore"
import{
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
} from "@env";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    API_KEY: API_KEY,
    AUTH_DOMAIN: AUTH_DOMAIN,
    PROJECT_ID: PROJECT_ID,
    STORAGE_BUCKET: STORAGE_BUCKET,
    MESSAGING_SENDER_ID: MESSAGING_SENDER_ID,
    APP_ID: APP_ID,
    MEASUREMENT_ID: MEASUREMENT_ID,
};

// Initialize Firebase
const myApp = initializeApp(firebaseConfig);
export const database = getFirestore(myApp)