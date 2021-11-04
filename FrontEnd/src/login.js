document.getElementById("btn_login").addEventListener("click", function (e) {
  console.log("This is sign in: ");
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;
  loginAccount({ email: email, password: password });
});

async function loginAccount(jsonObj) {
  console.log("this is login front js");

  fetch("/login/Account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();

    if (response.status === 200) {
      window.location.href =
        "./main.html?email=" + encodeURIComponent(jsonObj.email);
    } else alert("username or password incorrect");
  });
}
