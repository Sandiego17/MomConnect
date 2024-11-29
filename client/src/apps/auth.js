const signInButton = document.querySelector("#open-sign-in-form");
const signUpButton = document.querySelector("#open-sign-up-form");
const signUpContainer = document.querySelector(".sign-up-container");
const signInContainer = document.querySelector(".sign-in-container");
const overlayBtn = document.querySelector("#overlayBtn");

signInContainer.classList.add("active");

signUpButton.addEventListener("click", () => {
  signUpContainer.classList.add("active");
  signInContainer.classList.remove("active");
});

signInButton.addEventListener("click", () => {
  signInContainer.classList.add("active");
  signUpContainer.classList.remove("active");
});

overlayBtn.addEventListener("click", () => {
  signUpContainer.classList.toggle("active");
  signInContainer.classList.toggle("active");

  overlayBtn.innerHTML = signUpContainer.classList.contains("active") ? "Sign In Form" : "Sign Up Form";
});
