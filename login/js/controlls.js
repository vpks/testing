document.querySelector("#f").addEventListener("click", (e) => {
  const email = document.getElementById("email1").value;
  const password = document.getElementById("password").value;
  // e.preventDefault();
  // alert(email);
  // console.log(email);
  window.location.href = "/external-redirect";
});
