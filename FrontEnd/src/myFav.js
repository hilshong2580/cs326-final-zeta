
myFavFunction();
allPostFunction();

let thisUserID = 0;

getID();

////////////////////////////////Get corresponding user ID//////////////////////////////
function getID() {
  let url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }
  thisUserID = parseInt(data.userId);
}

///////////////////////////////Display all the post/////////////////////////////////
function allPostFunction() {
  const searchbtr = document.getElementById("allPost");
  searchbtr.addEventListener("click", function (e) {
    renderall();
  });
}

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


function myFavFunction() {
  const searchbtr = document.getElementById("MyFavPost");
  searchbtr.addEventListener("click", function (e) {
    hideAll();
    getUserFav();
  });
}


async function getUserFav() {
  console.log("this is get user fav with id:" + thisUserID);
  fetch("/main/UserFav", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: thisUserID }),
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