function login() {
 
    var username = document.getElementById("username");
    var pass = document.getElementById("password");
 
    if (username.value == "") {
 
        alert("username is empty");
 
    } else if (pass.value  == "") {
 
        alert("password is empty");
 
    } else if(username.value == "..." && pass.value == "..."){
 
        window.location.href="";
 
    } else {
 
        alert("Incorrect username or password！")
 
    }
}
