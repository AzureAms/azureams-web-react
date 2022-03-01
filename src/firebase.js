import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBr3dX0TAZYpVOJkzyMnGj9UmQ34vIMObw",
  authDomain: "azure-ams-web.firebaseapp.com",
  projectId: "azure-ams-web",
  storageBucket: "azure-ams-web.appspot.com",
  messagingSenderId: "66405107540",
  appId: "1:66405107540:web:94afab2e5561583a886ac1",
});

export const auth = app.auth();
export const firestore = app.firestore();
export const database = {
  
};
export const storage = app.storage();
export default app;
