async function If_email_ex(email) {
  let response = await fetch("http://localhost:3000/main/login", {
    method: "GET",
  });
  let sub = email.slice(email.length-10);
  if(email.length<11 || sub!=='@umass.edu'){
    return false;
  }
  let data = JSON.parse(await response.json());
  for (let i in data) {
    if(i.email === email){
      return false;
    }
  }
  return true;
}

async function correct(email,password) {
  let response = await fetch("http://localhost:3000/main/login", {
    method: "GET",
  });
  let data = JSON.parse(await response.json());
  for (let i in data) {
    if(i.email === email && i.password===password){
      return true;
    }
  }
  return false;
}

async function addInfo(jsonObj) {
  fetch("http://localhost:3000/main/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonObj,
  }).then(async (response) => {
    const data = await response.text();
    console.log(data);
  });
}

function login(){
    let pass = document.getElementById("password").value; 
    let email = document.getElementById("email").value;
if(correct(email,password)){
  window.location.href = './main.html';
}else{
  alert("Your email or password is wrong, try again!");
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
    let info = {
           email: email.value,
           username : username.value,
           password: pass.value,
           phone : phone.value,
           aboutme : aboutme.value,
    }
    if(If_email_ex(email.value)){
    addInfo(JSON.stringify(info));
    }else{
      alert("Your email has been registrated, please log in");
    }
}
