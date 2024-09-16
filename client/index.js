const loginInfoDiv = document.querySelector(".loginfo_div"); //Sign Up Btn Div
const loginBox = document.querySelector(".login_overlay");
const registerBox = document.querySelector(".register_overlay");

//check if user mongo id saved in local storage
if (localStorage.getItem("userInfo")) {
  addUserName();
} else {
  addRegisterBtn();
}

//adds user name in navbar
function addUserName() {}

//adds sign in and sign up button in navbar
function addRegisterBtn() {
  const loginBtn = document.createElement("button");
  const registerBtn = document.createElement("button");
  loginBtn.id = "loginBtn";
  registerBtn.id = "registerBtn";
  loginBtn.innerHTML = "Sign In";
  registerBtn.innerHTML = "Sign Up";
  console.log(loginBtn.id);
  loginInfoDiv.append(loginBtn, registerBtn);
}

document.getElementById("loginBtn").addEventListener("click", () => {
  loginBox.style.display = "flex";
  registerBox.style.display = "none";
});

document.getElementById("registerBtn").addEventListener("click", () => {
  loginBox.style.display = "none";
  registerBox.style.display = "flex";
});
