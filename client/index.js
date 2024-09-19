const loginInfoDiv = document.querySelector(".loginfo_div"); //Sign Up Button Div
const loginBox = document.querySelector(".login_overlay"); //Login Box Overlay
const registerBox = document.querySelector(".register_overlay"); //Register Box Overlay
const typeForm = document.querySelector(".type_form");

//check if user mongo id saved in local storage
if (localStorage.getItem("userInfo")) {
  addUserName();
} else {
  addRegisterBtn();
}

//adds user name in navbar
function addUserName() {
  const userName = document.createElement("h1");
  userName.innerHTML(localStorage.getItem("userInfo")["name"]);
  loginInfoDiv.append(userName);
}

//adds sign in and sign up button in navbar
function addRegisterBtn() {
  const loginBtn = document.createElement("button");
  const registerBtn = document.createElement("button");
  loginBtn.id = "loginBtn";
  registerBtn.id = "registerBtn";
  loginBtn.innerHTML = "Sign In";
  registerBtn.innerHTML = "Sign Up";
  loginInfoDiv.append(loginBtn, registerBtn);
}

//sign in button click
document.getElementById("loginBtn").addEventListener("click", () => {
  loginBox.style.display = "flex";
  registerBox.style.display = "none";
});

//sign up button click
document.getElementById("registerBtn").addEventListener("click", () => {
  loginBox.style.display = "none";
  registerBox.style.display = "flex";
});

//type form submit
typeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = document.getElementById("typeInput").value;
  console.log(text);
});
