Console.log("dashboard.js geladen");

import { auth } from "/aquateck-simulator/includes/firebase/condig.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const logoutBtn = document.getElementById("logoutBtn");

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "/aquateck-simulator/login.html";
    return;
  }
  
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) {
    alert("No usersdata found.");
    return;
  }
  
  const userData = userSnap.data();
  
  const simulators = userData.simulators || [];

  if (simulators.includes("base")) {
    document.getElementById("sim-base").style.display = "block";
  }
  
  if (simulators.includes("pro")) {
    document.getElementById("sim-pro").style.display = "block";
  }
  
  if (simulators.includes("fleetlink")) {
    document.getElementById("sim-fleetlink").style.display = "block";
  }
  
  if (simulators.includes("portguard")) {
    document.getElementById("sim-portguard").style.display = "block";
  }
  
  if (simulators.includes("fleetcommand")) {
    document.getElementById("sim-fleetcommand").style.display = "block";
  }
});

logoutBtn.addEventListener("click", async () => {
  await singOut(auth);
  window.location.href = ("/aquateck-simulator/login.html");
});

window.openSim = function(page) {
  window.location.href = page;
};
