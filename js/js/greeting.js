const ghostRainStart = document.querySelector("#ghostRainStart");
const getNameBox = document.querySelector("#getName");
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");
const readyBtn = document.querySelector("#readyBtn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event) {
  event.preventDefault();
  nameInput.classList.add(HIDDEN_CLASSNAME);
  const username = nameInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  readyBtn.addEventListener("click", handleClick);
}

getNameBox.addEventListener("submit", handleSubmit);

function handleMouseOver() {
  readyBtn.innerText = "Yes!";
}

function handleMouseOut() {
  readyBtn.innerText = "Are you ready?";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
function handleClick() {
  ghostRainStart.style.display = "none";
  bgElement.classList.remove(HIDDEN_CLASSNAME);
}

readyBtn.addEventListener("mouseover", handleMouseOver);
readyBtn.addEventListener("mouseout", handleMouseOut);
