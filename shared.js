var logoutBtn = document.getElementById("logoutBtn");
var Account_Signin = document.getElementById("Account_Signin")

// If User Logged In
if (localStorage["LoggedIn"] === "true") {
    // display LOGOUT button
    logoutBtn.setAttribute("style", "display: block;")
    // change SIGNIN button into ACCOUNT button
    Account_Signin.innerHTML = "Account"
}

function logout() {
    localStorage["LoggedIn"] = "false";
}

// Scroll to top button
function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}