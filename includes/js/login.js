console.log("login.js geladen");

import { auth } from "/aquateck-simulator/includes/firebase/config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorE1 = document.getElementById("error");
  
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/aquateck-simulator/dashboard.html";
    } catch (err) {
      errorE1.textContent = "Ongeldige inloggegevens";
      console.error(err.code);
    }
  });
});
