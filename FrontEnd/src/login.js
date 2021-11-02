async function addUserInfo(name, word, email,phone,aboutme) {
    const response = await fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({username: name, password: word, email: email,phone:phone,aboutme:aboutme})
    });
    if (!response.ok) {
      console.log(response.error);
      return;
    }
  }

function regis(){
    let username = document.getElementById("username");
    let pass = document.getElementById("password");
    let repass = document.getElementById("repass");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let aboutme = document.getElementById("aboutme");
    if (username.value == "") {
 
        alert("username is empty");
 
    } else if (pass.value  == "") {
 
        alert("password is empty");
    }else if (repass.value  == "") {
 
        alert("You have to confirm your password");
    }else if (phone.value  == "") {
 
        alert("phone is empty");
    }else if (aboutme.value  == "") {
 
        alert("aboutme is empty");
    }else if (email.value  == "") {
 
        alert("email is empty");
    }else if (pass.value  !== repass.value) {
 
        alert("Your password does not match");
    }
    addUserInfo(username.value, pass.value, email.value,phone.value,aboutme.value);
}
