var email = document.getElementById("email");
var password = document.getElementById("password");
var displayemail = document.getElementById("DisplayEmail");    

function check(){
    if(password.value == "password"){
        // alert("Login successfully")
        const emailvalue = document.getElementById("email").value;
        displayemail.setAttribute("value", "emailvalue");
        window.location.href = "/my-account.html";
        return false;
    } else {
        alert("Wrong password!");
    }
}


