document.getElementById("btn_regis").addEventListener("click", function (e) {
  console.log("This is create account: ");
  let emailEnd = "@umass.edu";
  let password = document.getElementById("passwordRegister").value;
  let repPassword = document.getElementById("repasRegister").value;
  let email = document.getElementById("emailRegister").value;
  let phone = document.getElementById("phoneRegister").value;
  let about = document.getElementById("aboutmeRegister").value;
  let name = document.getElementById("userNameRegister").value;

  if (password === repPassword && email.endsWith(emailEnd)) {

    createAccount({
      name: name,
      password: password,
      email: email,
      phone: phone,
      about: about,
    });
  } else alert("password/email incorrect");
});

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
    else alert("email already exist"+response.status);
  });
}
