const firebaseConfig = {
  apiKey: "AIzaSyCMw6LUtfaYFh8-wvkT54yDykieav7naV8",
  authDomain: "khofar-site-comments.firebaseapp.com",
  projectId: "khofar-site-comments",
  storageBucket: "khofar-site-comments.firebasestorage.app",
  messagingSenderId: "853499937990",
  appId: "1:853499937990:web:d6150ffaa6c0b8b10b83c7"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function loginUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("secret").style.display = "block";
    })
    .catch((error) => {
      alert("❌ Login failed: " + error.message);
    });
}

function logoutUser() {
  auth.signOut().then(() => {
    document.getElementById("secret").style.display = "none";
  });
}

auth.onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("secret").style.display = "block";
  } else {
    document.getElementById("secret").style.display = "none";
  }
});