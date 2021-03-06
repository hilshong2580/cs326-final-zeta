//add function for login button
document.getElementById("btn_login").addEventListener("click", function (e) {
  console.log("This is sign in: Button");
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;
  loginAccount({ email: email, password: password });
});

//connect end point to check user info. Switch page if success 
async function loginAccount(jsonObj) {
  console.log("this is login front js");

  fetch("/login/Account", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    
    if (response.status === 200) {
      const data = JSON.parse(await response.json());
      console.log("this is front end login status 200");
      console.log(data.userid);
      window.location.href =
        "./main.html?userId=" + encodeURIComponent(data.userid);
    } else alert("username or password incorrect");
  });
}