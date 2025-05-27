const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

document.querySelector("#f").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("cliked");
  click();
});

function click() {
  alert(email, password);
}
