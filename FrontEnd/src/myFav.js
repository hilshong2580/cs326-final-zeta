
myFavFunction();
allPostFunction();

let favUserID = 0;

getID();

///////////////////////functions/////////////////////////

//get user ID
function getID() {
  let url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }
  favUserID = parseInt(data.userId);
}

//assign all post button and call show all post function
function allPostFunction() {
  const searchbtr = document.getElementById("allPost");
  searchbtr.addEventListener("click", function (e) {
    renderall();
  });

}

//show all post
function renderall() {
  const searchInput = document.getElementById("searchinput");
  let i = 0;
  while (document.getElementById("post" + JSON.stringify(i)) !== null) {
    i++;
  }

  for (let j = 0; j < i; j++) {
    document.getElementById("post" + JSON.stringify(j)).hidden = false;
  }
}



/////////////////////////////filter/////////////////////////////

//hide all post first, then show the post that is set with user favour
function myFavFunction() {
  const searchbtr = document.getElementById("MyFavPost");
  searchbtr.addEventListener("click", function (e) {
    hideAll();
    getUserFav();
  });

}

//connect end-point and get data of all favour post wiht specific user id
async function getUserFav() {
  fetch("/main/UserFav", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: favUserID }),
  }).then(async (response) => {
    const data = JSON.parse(await response.json());
    if (response.status === 200) {
      for (let i in data) {
        let dataTemp = {
          postId: data[i].postid,
          postTag: data[i].posttag
        };
        document.getElementById(dataTemp.postTag).hidden = false;
      }
    }
  });
}

//hide all post
function hideAll() {

  const searchInput = document.getElementById("searchinput");
  let i = 0;
  while (document.getElementById("post" + JSON.stringify(i)) !== null) {
    i++;
  }
  for (let j = 0; j < i; j++) {
    document.getElementById("post" + JSON.stringify(j)).hidden = true;
  }
}