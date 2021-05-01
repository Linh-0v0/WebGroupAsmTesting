var email = document.getElementById("email");
var password = document.getElementById("password");
var displayemail = document.getElementById("DisplayEmail");    

function check(){
    if(password.value == "password"){
        // alert("Login successfully")
        const emailvalue = document.getElementById("email").value;
        displayemail.setAttribute("value", "emailvalue");
        window.location.href="http://linh-0v0.github.io/WebGroupAsmTesting/my-account.html";
        return false;
    } else {
        alert("Wrong password!");
        location.reload();
    }
}


