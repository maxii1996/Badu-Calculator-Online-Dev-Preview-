<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB6x30OUX19TOMh62E4drZKC7LgPchjczw",
    authDomain: "baducalculator-99b25.firebaseapp.com",
    projectId: "baducalculator-99b25",
    storageBucket: "baducalculator-99b25.appspot.com",
    messagingSenderId: "250520084884",
    appId: "1:250520084884:web:3086268ad1ee0f16116f81",
    measurementId: "G-S00VKESY1B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>