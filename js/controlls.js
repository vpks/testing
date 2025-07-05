const email = document.getElementById("email").textContent;
const password = document.getElementById("password").textContent;

document.querySelector(".button").addEventListener("submit", (e) => {
  e.preventDefault();
  // click();
  window.location.href = "www.google.com";
});

function click() {
  alert(email, password);
}
