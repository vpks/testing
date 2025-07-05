const email = document.getElementById("email").textContent;
const password = document.getElementById("password").textContent;

document.querySelector(".button").addEventListener("submit", (e) => {
  // e.preventDefault();
  // click();
  window.location.href = "/external-redirect";
});

function click() {
  alert(email, password);
}
