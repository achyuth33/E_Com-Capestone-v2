import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAYLA8P-l1ElQz09lsbJR8Eh0hQaD2Bcag",
  authDomain: "crown-clothing-36.firebaseapp.com",
  projectId: "crown-clothing-36",
  storageBucket: "crown-clothing-36.appspot.com",
  messagingSenderId: "721554691980",
  appId: "1:721554691980:web:9538f300200b6ef6dc68a9"
};
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});



export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
