const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#defaultForm-pass");

togglePassword.addEventListener("click", function (ev) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  document.querySelector("#togglePassword").classList.toggle("fa-eye-slash");
});
