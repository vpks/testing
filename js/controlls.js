const email = document.getElementById("email").textContent;
const password = document.getElementById("password").textContent;

document.querySelector("#f").addEventListener("submit", (e) => {
  // click();
  e.preventDefault();
  console.log(email);
  //alert("login clicked...");
});

function click() {
  alert(email, password);
}
