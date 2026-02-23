console.log("addCustomer.js geladen");

import { auth, db } from "/aquateck-simulator/includes/firebase/config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("customerForm");
  const melding = document.getElementById("melding");

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const companyInput = document.getElementById("company").value;
    const simulatorInput = document.getElementById("simulator").value;

    if (!nameInput || !emailInput || !companyInput || !simulatorInput) {
      console.error("One of the fields doesn't exists");
      return;
    }

    
    const name =nameInput.value;
    const email = emailInput.value;
    const company = companyInput.value;
    const simulator = simulatorInput.value;

    try {
      // temporary random password generate
      const randomPassword = Math.random().toString(36).slice(-10);

      // Create user in firebase auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        randompassword
        );

      const uid = userCredential.user.uid;

      // send reset password email so user can choose his own password
      await senPasswaordResetEmail(auth, email);

      //Save client in firestore database
      await addDoc(collection(db, "customers"), {
        uid,
        name,
        email,
        company,
        simulator,
        aangemaaktOp: serverTimestamp()
      });

      melding.textContent = "Customer succesful added and reset email is send!";
      form.reset();

    } catch (error) {
      console.error("error:", error);
      melding.textContent = "❌ error adding customer.";
    }

  });

});
