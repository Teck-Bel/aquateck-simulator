console.log("addCustomer.js geladen");

import { db } from "/aquateck-simulator/includes/firebase/config.js";
import { collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("customerForm");
  const melding = document.getElementById("melding");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const company = document.getElementById("company").value;
    const simulator = document.getElementById("simulator").value;

    try {
      await addDoc(collection(db, "customers"), {
        name,
        email,
        company,
        simulator,
        aangemaaktOp: serverTimestamp()
      });

      melding.textContent = "✅ Klant succesvol toegevoegd!";
      form.reset();

    } catch (error) {
      console.error(error);
      melding.textContent = "❌ Fout bij toevoegen klant.";
    }

  });

});
