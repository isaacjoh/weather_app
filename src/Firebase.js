
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzL9JE3PNtwDPrLToVDn_yX8d6IvMFaww",
  authDomain: "weather-build-b03ec.firebaseapp.com",
  projectId: "weather-build-b03ec",
  storageBucket: "weather-build-b03ec.appspot.com",
  messagingSenderId: "1054418116627",
  appId: "1:1054418116627:web:a24cae5d3e4fa3bdc19fe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
console.log(result)
const name = result.user.displayName;
const emailVerified = result.user.emailVerified;
const profilePic = result.user.photoURL;

        localStorage.setItem('name', name)
        localStorage.setItem('emailVerified', emailVerified)
        localStorage.setItem('profilePic', profilePic)
    }).catch((error) => {
        console.log(error)
    })
}
