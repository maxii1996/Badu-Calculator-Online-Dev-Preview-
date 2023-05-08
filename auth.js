import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyB6x30OUX19TOMh62E4drZKC7LgPchjczw",
  authDomain: "baducalculator-99b25.firebaseapp.com",
  projectId: "baducalculator-99b25",
  storageBucket: "baducalculator-99b25.appspot.com",
  messagingSenderId: "250520084884",
  appId: "1:250520084884:web:3086268ad1ee0f16116f81",
  measurementId: "G-S00VKESY1B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  } catch (error) {
    console.error(error);
  }
}


const signInButton = document.querySelector("#sign-in-button");
if (signInButton) {
  signInButton.addEventListener("click", signInWithGoogle);
}
