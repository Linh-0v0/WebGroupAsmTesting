var emailvalue = document.getElementById("email").value;
var password = document.getElementById("password");
var displayemail = document.getElementById("DisplayEmail");    
var inputEmail;

function check(){
    if(password.value == "password"){
        // alert("Login successfully")
        window.location.href = "my-account.html";
    } else {
        alert("Wrong password!");
    }
}

function showEmail(){
    inputEmail = emailvalue;
    displayemail.setAttribute("value", inputEmail);
}

