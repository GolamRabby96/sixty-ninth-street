import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBzWl7c9LqzhzxWNl_bsDoUt3pRW1wyJDY",
  authDomain: "sixty-ninth-street-2cd07.firebaseapp.com",
  projectId: "sixty-ninth-street-2cd07",
  storageBucket: "sixty-ninth-street-2cd07.appspot.com",
  messagingSenderId: "283987319054",
  appId: "1:283987319054:web:5159e201210d36d5059f5f"
});


export const authentication = app.auth();
export default app;
