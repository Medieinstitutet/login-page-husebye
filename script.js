//console.log('henlo');

//Användare & lösenord med behörighet
const allUsers = [
    {
        logInName: "janne",
        logInPassword: "test",
    },
    {
        logInName: "ooga",
        logInPassword: "booga",
    }
];



const btnLogin = document.querySelector(".btnLogin");
const btnLogout = document.querySelector(".btnLogout");
const text = document.querySelector(".text");

//klick på logga ut kallar på funktion
btnLogout.addEventListener("click", logOut)

//klick på logga in kallar på funktion
btnLogin.addEventListener("click", logIn)

setBodyDataLogOut();

//login funktion
function logIn() {
    console.log('logged in');
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    for(const user of allUsers){
        if(username == user.logInName && password == user.logInPassword){
            localStorage.setItem("user", username);
            setBodyDataLoggedIn();
            return;
        }
    }
    document.getElementById("error").style.display = "block";
    document.getElementById("notLoggedIn").style.display = "none";
}

//funktion för data vid inloggning & utloggning
function setBodyDataLoggedIn() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("logoutForm").style.display = "block";
    document.getElementById("notLoggedIn").style.display = "none";
    document.getElementById("loggedIn").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("whoIsLoggedIn").innerText = localStorage.getItem("user");
}

function setBodyDataLogOut() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("logoutForm").style.display = "none";
    document.getElementById("notLoggedIn").style.display = "block";
    document.getElementById("loggedIn").style.display = "none";
    document.getElementById("error").style.display = "none";    
}

//funktion för inloggad check
function checkLogIn() {
    console.log('checking');
    if(localStorage.getItem("user")){
        setBodyDataLoggedIn();
    }
}

//spara till localstorage
const saveToLocalStorage = (username) => {
    localStorage.setItem("textInput", username)
}

//funktion för att logga ut
function logOut(){
    console.log('logging out');
    setBodyDataLogOut();
    localStorage.clear();
}

//checkar inloggning
window.onload = checkLogIn();