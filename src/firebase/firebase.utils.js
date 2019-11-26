import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyCT2vRRhw2yoczKV1dPk4AIgFTC9JBfpUY",
  authDomain: "shop-db-70c61.firebaseapp.com",
  databaseURL: "https://shop-db-70c61.firebaseio.com",
  projectId: "shop-db-70c61",
  storageBucket: "shop-db-70c61.appspot.com",
  messagingSenderId: "282487845486",
  appId: "1:282487845486:web:6058268350b0af2f2f2c7f",
  measurementId: "G-S3J7KX3971"
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameter({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
