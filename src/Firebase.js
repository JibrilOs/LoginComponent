import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyAphE-FCaVO_ZnWNhowYov_uwenmhkJTBs",
  authDomain: "login-cf917.firebaseapp.com",
  projectId: "login-cf917",
  storageBucket: "login-cf917.appspot.com",
  messagingSenderId: "583756460508",
  appId: "1:583756460508:web:5f6b3f07c0163800549f19",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export { fire, db };
