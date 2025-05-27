document.querySelector("#f").addEventListener("click", (e) => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  e.preventDefault();
  alert(email, password);
  console.log("cliked");
});
