const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const text = document.querySelector(".match");
const form = document.querySelector("#myForm")

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    text.textContent = "*Passwords do not match";
    return false;
  } else {
    text.textContent = "";
    return true;
  }
}


confirmPassword.addEventListener("keyup", validatePassword);


confirmPassword.addEventListener("keyup", () => {
    password.addEventListener("keyup", validatePassword);
})

form.addEventListener("submit", (e) => {
    if(!validatePassword()) {
        e.preventDefault();
    }
})

