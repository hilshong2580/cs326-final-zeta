//add function to regist button
document.getElementById("btn_regis").addEventListener("click", function (e) {
  console.log("This is create account: ");
  let emailEnd = "@umass.edu";
  let password = document.getElementById("passwordRegister").value;
  let repPassword = document.getElementById("repasRegister").value;
  let email = document.getElementById("emailRegister").value;
  let phone = document.getElementById("phoneRegister").value;
  let about = document.getElementById("aboutmeRegister").value;
  let name = document.getElementById("userNameRegister").value;

  if(isNaN(phone))
    alert("Phone is a number!");
  else if(Math.floor(Number(phone)) < 0 || phone.length != 10){
    alert("Phone number is invalid!");
  } else if (password === repPassword && email.endsWith(emailEnd)) {
    createAccount({
      name: name,
      password: password,
      email: email,
      phone: phone,
      about: about,
    });
  } else alert("password/email incorrect");
});

//conncect to end point, send user info to database or denied as it is already exist
async function createAccount(jsonObj) {
  fetch("/login/Registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200) window.location.href = "./login.html";
    else alert("Account already exist ");
  });
}
