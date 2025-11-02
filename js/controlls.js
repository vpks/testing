const email = document.getElementById("email").textContent;
const password = document.getElementById("password").textContent;

document.querySelector(".button").addEventListener("submit", (e) => {
  click();
  //alert("login clicked...");
});

function click() {
  alert(email, password);
}
