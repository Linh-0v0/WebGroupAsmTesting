function check(){
    var password = document.getElementById("password");  
    if(password.value == "password"){
        // alert("Login successfully")
        let Loginn = document.getElementsByClassName("btn").addEventListener("click", () => {
            let inputEmail = document.getElementById("email").value;
});
        location.replace("my-account.html");
    } else {
        alert("Wrong password!");
    }
}




