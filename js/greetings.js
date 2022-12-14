const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child");
const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginInput.value = "";
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");

if (savedUsername) {
  // localStorage에 값이 있으면
  greeting.innerText = `Hello ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
} else {
  // localStorage에 값이 없으면
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
