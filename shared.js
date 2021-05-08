var logoutBtn = document.getElementById("logoutBtn");
var Account_Signin = document.getElementById("Account_Signin")
var cicrle_logoutbtn = document.getElementsByClassName("cicrle_logoutbtn")

// If User Logged In
if (localStorage["LoggedIn"] === "true") {
    // display LOGOUT button
    logoutBtn.setAttribute("style", "display: block;");
    cicrle_logoutbtn.setAttribute("style", "display: block;");

    // change SIGNIN button into ACCOUNT button
    Account_Signin.innerHTML = "Account"

//     // if user trying to access "login/register/forgotPassword page" even though they have logged in
//     // navigate the user to my account page
//     let theURL = window.location.href;
//     if(
//         theURL.search("Login_box.html") !== -1 ||
//         theURL.search("register_acc.html") !== -1 ||
//         theURL.search("forgotPass.html") !== -1 ;
//     ){
//         let myaccountURL = theURL;
//         myaccountURL.replace("Login_box.html","");
//         myaccountURL.replace("register_acc.html","");
//         myaccountURL.replace("forgotPass.html","") ;
//         myaccountURL = myaccountURL + "my-account.html";
//         window.location.replace(myaccountURL);
//     }
// } else if (localStorage["LoggedIn"] === null || localStorage["LoggedIn"] === "false") {
//     Account_Signin.innerHTML = "Sign In";
}

function logout() {
    localStorage["LoggedIn"] = "false";
}

// Scroll to top button
function topfunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}