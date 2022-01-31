function login() {
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  if (email.value == "rodrigo.osf.com" && password.value == "12345") {
    localStorage.setItem("acess", true);

    window.location.href = "index.html";
  } else {
    alert("Email or password wrong! Please try again.");
  }
}
