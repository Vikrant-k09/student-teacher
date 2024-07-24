// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZIhYrBTlGyfaL3E-iqi5LA7xOLsCmP4Q",
  authDomain: "student-teacher-app-52319.firebaseapp.com",
  projectId: "student-teacher-app-52319",
  storageBucket: "student-teacher-app-52319.appspot.com",
  messagingSenderId: "195949018763",
  appId: "1:195949018763:web:c62bf39cb648d7d7a01e8e",
  measurementId: "G-S0B0X5ZR9T"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);  

firebase.initializeApp(firebaseConfig);







document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Logged in successfully!');
        })
        .catch((error) => {
            alert('Error: ' + error.message);
        });
});
