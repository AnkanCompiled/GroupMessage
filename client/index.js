const loginInfoDiv = document.querySelector(".loginfo_div"); //Sign Up Button Div
const loginBox = document.querySelector(".login_overlay"); //Login Box Overlay
const registerBox = document.querySelector(".register_overlay"); //Register Box Overlay
const typeForm = document.querySelector(".type_form"); //message typing form
const loginForm = document.getElementById("loginForm"); //login form
const registerForm = document.getElementById("registerForm"); //register form

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

//check if name and password entered in Register
document.getElementById("nameRegisterId").addEventListener("input", (event) => {
  registerButtonEnable(event.target.value);
});
document
  .getElementById("passwordRegisterId")
  .addEventListener("input", (event) => {
    registerButtonEnable(event.target.value);
  });

function registerButtonEnable() {
  if (
    document.getElementById("nameRegisterId").value &&
    document.getElementById("passwordRegisterId").value
  ) {
    document.getElementById("buttonRegisterId").disabled = false;
  } else {
    document.getElementById("buttonRegisterId").disabled = true;
  }
}

//register form submit click
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  dataEntry();
});

//send register email , name , password to mongoDB
async function dataEntry() {
  const data = await addtoMongo();
  if (data.status == "User Created") {
    document.getElementById("statusRegisterId").innerHTML =
      "Register Successfull";
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } else {
    document.getElementById("statusRegisterId").innerHTML = data.status;
  }
}

//fetch request for post to mongoDB
async function addtoMongo() {
  try {
    const res = await fetch("http://localhost:3001/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: document.getElementById("nameRegisterId").value,
        email: document.getElementById("emailRegisterId").value,
        password: document.getElementById("passwordRegisterId").value,
      }),
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
  }
}
