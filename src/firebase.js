import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };


var firebaseConfig = {
  apiKey: "AIzaSyDmXk6QHY7wiraDufu5ofbAW-7ckOJbTT8",
  authDomain: "disney-plus-clone-v1.firebaseapp.com",
  projectId: "disney-plus-clone-v1",
  storageBucket: "disney-plus-clone-v1.appspot.com",
  messagingSenderId: "489326383214",
  appId: "1:489326383214:web:c2551c7f8eedeec944d67f",
  measurementId: "G-TJ6K8T7PC3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
