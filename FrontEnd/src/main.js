console.log("Main-side code running");

//the default variables for testing
let thisUserID = -1;

//a method to load the url to get the user email, username
window.onload = function () {
  let url = document.location.href,
    params = url.split("?")[1].split("&"),
    data = {},
    tmp;
  for (var i = 0, l = params.length; i < l; i++) {
    tmp = params[i].split("=");
    data[tmp[0]] = tmp[1];
  }
  thisUserID = parseInt(data.userId);
  //render User information to user pop up window
  getUserInfo();
};

console.log(document.getElementById("mainUserName").innerHTML);

//render the post base on the server data
getRenderPost();

//a function to get user info from login, then render the user modal
async function getUserInfo() {
  console.log("this is get user info in front end with id:" + thisUserID);
  fetch("/main/UserInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: thisUserID }),
  }).then(async (response) => {
    if (response.status === 200) {
      const data = JSON.parse(await response.json());
      document.getElementById("mainUserName").innerHTML = data.name;
      document.getElementById("mainUserEmail").innerHTML = data.email;
      document.getElementById("mainUserPhone").innerHTML = data.phone;
      document.getElementById("mainUserAbout").innerHTML = data.about;

      document.getElementById("EditUserInfoName").value = data.name;
      document.getElementById("EditUserInfoEmail").value = data.email;
      document.getElementById("EditUserInfoPhone").value = data.phone;
      document.getElementById("EditUserInfoAbout").value = data.about;
    }
    else {
      const data = (await response.text());
      console.log(data);
    }
  });
}

//GET: all post by fetch http://localhost:3000/main/getPost , then render the post
async function getRenderPost() {
  let response = await fetch("/main/", {
    method: "GET",
  });

  if (response.status === 200) {
    let data = JSON.parse(await response.json());
    document.getElementById("accordion").innerHTML = "";
    let toggleId = "";
    for (let i in data) {
      let dataTemp = {
        userId: data[i].userid,
        postId: data[i].postid,
        title: data[i].title,
        destination: data[i].destination,
        outset: data[i].outset,
        numOfPeople: data[i].numofpeople,
        description: data[i].description,
        dateTimeStart: data[i].datetimestart,
        dateTimeEnd: data[i].datetimeend,
        photo: data[i].photo,
      };

      renderPost(document.getElementById("accordion"), i, dataTemp);
      toggleId += "collapse" + i.toString() + " ";
    }

    document.getElementById("toggleAll").setAttribute("aria-controls", toggleId);

  } else if (response.status === 202) {
    document.getElementById("accordion").innerHTML = "";
    console.log("not post exist");
  }
}

//PUT:  a function to edit post content
async function editExistPost(jsonObj) {
  fetch("/main/", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200)
      console.log("edit post success");
  });
}

//DELETE: a function to delete Post
async function deleteExistPost(jsonObj) {
  fetch("/main/", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200)
      console.log("post delete success");
  });
}

//post new post by fetch http://localhost:3000/main/createPost
async function postNewPost(jsonObj) {
  fetch("/main/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200)
      console.log("create new post success");
  });
}

////////////////////add fav function///////////////////
async function addToFav(userId, postId, html, tag) {
  let jsonObj = {
    userid: userId,
    postid: postId,
    postTag: tag
  };
  fetch("/main/Fav", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    if (response.status === 200) {
      checkFav(userId, postId, html);
    }
  });
}

//////////////////////Remove from fav//////////////////////
async function DelFav(userId, postId, html, tag) {
  let jsonObj = {
    userid: userId,
    postid: postId,
    postTag: tag
  };
  fetch("/main/Fav", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    if (response.status === 200) {
      checkFav(userId, postId, html);
    }
  });
}

/////////////////////check fav function////////////////
async function checkFav(userId, postId, html) {
  let jsonObj = {
    userid: userId,
    postid: postId
  };
  fetch("/main/Fav", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200) {
      if (data === "true") {
        html.innerHTML = "Remove From Favour";
      } else {
        html.innerHTML = "Add to favour";
      }
    }
  });
}


//a fetch to upload the new comment from the post, it used to update the content of data
async function pushComment(jsonObj) {
  fetch("/main/comment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200)
      console.log("push comment success");
  });
}

//PUT: get the comment based on the post id
async function getComment(postId, html) {
  fetch("/main/comment", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: postId }),
  }).then(async (response) => {

    if (response.status === 200) {
      const data = JSON.parse(await response.json());
      for (let com in data) {
        const content = document.createElement("div");
        content.innerHTML = data[com].name + ": " + data[com].comment;
        html.prepend(content);
      }
    }
  });
}

//PUT: get the comment based on the post id
async function deleteComment(postId) {
  fetch("/main/comment", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ postId: postId }),
  }).then(async (response) => {
    const data = JSON.parse(await response.json());
    if (response.status === 200) {
      console.log("delete comment successful on frontend Main base on post");
    }
  });
}

async function editUser(jsonObj) {
  fetch("/main/editUser", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200) getUserInfo();
  });
}

//PUT:  a function to edit post content
async function updateActivity(jsonObj) {
  fetch("/main/activity", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    if (response.status === 200) {
      const data = JSON.parse(await response.json());
      console.log("update activity success");
    }
    else {
      const data = await response.text();
      console.log(data);
    }
  });
}

//post new post by fetch http://localhost:3000/main/createPost
async function getActivity(jsonObj, html) {
  fetch("/main/activity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonObj),
  }).then(async (response) => {
    if (response.status === 200) {
      const data = JSON.parse(await response.json());
      console.log(data[0]);
      let favoriteNum = document.createElement("div");
      favoriteNum.innerHTML = "<h4 class = " + "renderContent" + ">" + data[0].favorite_num + "'s Favorites</h4>";

      let postNum = document.createElement("div");
      postNum.innerHTML = "<h4 class = " + "renderContent" + ">" + data[0].post_num + "'s Posts</h4>";

      let commentNum = document.createElement("div");
      commentNum.innerHTML = "<h4 class = " + "renderContent" + ">" + data[0].comment_num + "'s Comments</h4>";

      let userDiv = document.createElement("div")
      userDiv.innerHTML = "<h4 class = " + "renderContent" + ">Post Owner: " + data[0].name + "</h4>";
      html.prepend(userDiv, commentNum, postNum, favoriteNum);
    }
    else {
      const data = await response.text();
      console.log(data);
    }
  });
}

// a button listener to create a new post
document.getElementById("createPost").addEventListener("click", function (e) {
  let newPost = {
    userId: thisUserID,
    title: document.getElementById("createTitle").value,
    destination: document.getElementById("createDestination").value,
    outset: document.getElementById("createOutset").value,
    dateTimeStart: document.getElementById("createDateTimeStart").value,
    dateTimeEnd: document.getElementById("createDateTimeEnd").value,
    numOfPeople: document.getElementById("createNumOfPeople").value,
    description: document.getElementById("createDescription").value
  };

  postNewPost(newPost);
  updateActivity({
    userId: thisUserID,
    favorite: 0,
    post: 1,
    comment: 0,
  });
  document.getElementById("accordion").innerHTML = "";
  getRenderPost();
});

// a button listener to logout the main page, then move back to login page
document.getElementById("LogoutButton").addEventListener("click", function (e) {
  thisUserID = -1;
  window.location.href = "./login.html";
});

// a button listener to pop-up a window to display the user information
document.getElementById("UserPopUp").addEventListener("click", getUserInfo);

document.getElementById("editUserInfoBtr").addEventListener("click", function (e) {
  console.log("button was editUserInfo");
  let body = {
    userid: thisUserID,
    name: document.getElementById("EditUserInfoName").value,
    email: document.getElementById("EditUserInfoEmail").value,
    phone: document.getElementById("EditUserInfoPhone").value,
    about: document.getElementById("EditUserInfoAbout").value,
  };

  editUser(body);
  getRenderPost();

});

//a render function to render all the post to main page based on the server's data base
function renderPost(HTML, id, jsonObj) {
  const idString = id.toString();
  const postButton = document.createElement("button");
  postButton.classList.add("btn");
  postButton.setAttribute("data-toggle", "collapse");
  postButton.setAttribute("data-target", "#collapse" + idString);
  postButton.setAttribute("aria-expanded", "true");
  postButton.setAttribute("aria-controls", "collapse" + idString);
  postButton.setAttribute("id", "postitle" + idString);
  postButton.innerHTML = "<h3 class = " + "renderTitle" + ">" + jsonObj.title + "</h3>";

  const h5 = document.createElement("h5");
  h5.classList.add("mb-0");
  h5.prepend(postButton);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.setAttribute("id", "heading" + idString);
  cardHeader.prepend(h5);

  //the post body
  const destination = document.createElement("div");
  destination.classList.add("Destination");
  destination.setAttribute("id", "Destination" + idString);
  destination.innerHTML = "<h4 class = " + "renderContent" + ">Destination: " + jsonObj.destination + "</h4>";
  //"Destination: " + jsonObj.destination;

  const picture = document.createElement("div");
  picture.classList.add("picture");
  picture.setAttribute("id", "Picture" + idString);

  getActivity({ userId: jsonObj.userId }, picture);

  const outset = document.createElement("div");
  outset.classList.add("Outset");
  outset.setAttribute("id", "Outset" + idString);
  outset.innerHTML = "<h4 class = " + "renderContent" + ">Outset: " + jsonObj.outset + "</h4>";

  const startTime = document.createElement("div");
  startTime.classList.add("startTime");
  startTime.setAttribute("id", "startTime" + idString);
  startTime.innerHTML = "<h4 class = " + "renderContent" + ">Start: " + jsonObj.dateTimeStart + "</h4>";

  const endTime = document.createElement("div");
  endTime.classList.add("endTime");
  endTime.setAttribute("id", "endTime" + idString);
  endTime.innerHTML = "<h4 class = " + "renderContent" + ">End: " + jsonObj.dateTimeEnd + "</h4>";

  const numberOfPeople = document.createElement("div");
  numberOfPeople.classList.add("numberOfPeople");
  numberOfPeople.setAttribute("id", "numberOfPeople" + idString);
  numberOfPeople.innerHTML = "<h4 class = " + "renderContent" + ">People Num: " + jsonObj.numOfPeople + "</h4>";

  const Description = document.createElement("div");
  Description.classList.add("Description");
  Description.setAttribute("id", "Description" + idString);
  Description.innerHTML = "<h4 class = " + "renderContent" + ">Description: " + jsonObj.description + "</h4>";

  const DeletePostBtr = document.createElement("div");
  DeletePostBtr.classList.add("DeletePostBtr");
  DeletePostBtr.setAttribute("id", "DeletePostBtr" + idString);

  const deleteButton = document.createElement("button");

  deleteButton.classList.add("btn", "btn-outline-primary");

  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("id", "b1");
  deleteButton.innerHTML = "Delete Post";

  deleteButton.addEventListener("click", function (e) {
    deleteExistPost({ postId: jsonObj.postId, userId: thisUserID });
    deleteComment(jsonObj.postId);
    getRenderPost();
  });

  const edBtn = document.createElement("button");
  edBtn.classList.add("btn", "btn-outline-primary");
  edBtn.setAttribute("data-toggle", "modal");
  edBtn.setAttribute("data-target", "#Modal" + idString);
  edBtn.setAttribute("type", "button");
  edBtn.innerHTML = "Edit Button";

  //only user can have edit post
  if (JSON.stringify(jsonObj.userId) === JSON.stringify(thisUserID)) {
    DeletePostBtr.prepend(deleteButton, edBtn);
  }

  //Add to Fav
  const favButton = document.createElement("button");
  favButton.classList.add("btn", "btn-outline-primary");
  favButton.setAttribute("type", "button");
  favButton.setAttribute("id", "b1");

  checkFav(thisUserID, jsonObj.postId, favButton);

  favButton.addEventListener("click", function (e) {
    if (favButton.innerHTML === "Remove From Favour") {
      DelFav(thisUserID, jsonObj.postId, favButton, "post" + idString);
      updateActivity({
        userId: jsonObj.userId,
        favorite: -1,
        post: 0,
        comment: 0,
      });
    } else {
      addToFav(thisUserID, jsonObj.postId, favButton, "post" + idString);
      updateActivity({
        userId: jsonObj.userId,
        favorite: 1,
        post: 0,
        comment: 0,
      });
    }

    getRenderPost();
  });
  DeletePostBtr.prepend(favButton);

  const accordionDetail = document.createElement("div");
  accordionDetail.classList.add("detail");
  accordionDetail.prepend(
    destination,
    picture,
    outset,
    startTime,
    endTime,
    numberOfPeople,
    Description,
    DeletePostBtr,
  );
  // post body end

  //comment Start
  const commentDetail = document.createElement("div");
  commentDetail.classList.add("commentDetail");

  getComment(jsonObj.postId, commentDetail);

  const overFlow = document.createElement("div");
  overFlow.classList.add(
    "overflow-auto",
    "p-3",
    "mb-3",
    "mb-md-0",
    "mr-md-3",
    "bg-light"
  );
  overFlow.prepend(commentDetail);

  const label = document.createElement("label");
  label.setAttribute("for", "exampleFormControlTextarea1");
  label.innerText = "Your Comment";

  const textarea = document.createElement("textarea");
  textarea.classList.add("form-control");
  textarea.setAttribute("row", "3");
  textarea.setAttribute("id", "exampleFormControlTextarea1");

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");
  formGroup.prepend(label, textarea);

  const buttonSubmit = document.createElement("button");
  buttonSubmit.classList.add("btn", "btn-primary");
  buttonSubmit.innerText = "Submit";
  buttonSubmit.addEventListener("click", function (e) {
    if (textarea.value !== "") {
      pushComment({
        name: document.getElementById("mainUserName").innerHTML,
        comment: textarea.value,
        postId: jsonObj.postId,
      });
    }

    updateActivity({
      userId: thisUserID,
      favorite: 0,
      post: 0,
      comment: 1,
    });
    getRenderPost();
  });

  const comment = document.createElement("div");
  comment.classList.add("comment");
  comment.prepend(overFlow, formGroup, buttonSubmit);

  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("id", "Modal" + idString);
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-labelledby", "ModalLabel" + idString);
  modal.setAttribute("aria-hidden", "true");
  renderForm(modal, idString, jsonObj);

  const cardBody = document.createElement("div");
  cardBody.prepend(modal, comment);
  cardBody.prepend(accordionDetail);

  const collapsePost = document.createElement("div");
  collapsePost.setAttribute("id", "collapse" + idString);
  collapsePost.classList.add("collapse", "show", "multi-collapse");
  collapsePost.setAttribute("aria-labelledby", "heading" + idString);
  collapsePost.setAttribute("data-bs-parent", "#accordion");
  collapsePost.prepend(cardBody);

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", "post" + idString);
  card.prepend(collapsePost);
  card.prepend(cardHeader);

  HTML.prepend(card);
}

//a render function to render the comment to post page based on the post's comment column
function renderComment(html, json) {
  const content = document.createElement("div");
  content.innerHTML = json.name + ": " + json.comment;
  html.prepend(content);
}

//render the form for edit information
function renderForm(html, idString, jsonObj) {
  const span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.innerHTML = "&times";

  const cloBtr = document.createElement("button");
  cloBtr.classList.add("close");
  cloBtr.setAttribute("data-dismiss", "modal");
  cloBtr.setAttribute("aria-label", "Close");
  cloBtr.prepend(span);

  const h5 = document.createElement("h5");
  h5.classList.add("modal-title");
  h5.setAttribute("id", "ModalLabel" + idString);
  h5.innerHTML = "Modal title";

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalHeader.prepend(h5, cloBtr);

  //title
  const labelTitle = document.createElement("label");
  labelTitle.classList.add("form-label");
  labelTitle.innerHTML = "Title";

  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("id", "Title");
  inputTitle.setAttribute("type", "text");
  inputTitle.classList.add("form-control");
  inputTitle.value = jsonObj.title;

  const divTitle = document.createElement("div");
  divTitle.classList.add("mb-3");
  divTitle.prepend(labelTitle, inputTitle);

  //Destination
  const labelDestination = document.createElement("label");
  labelDestination.classList.add("form-label");
  labelDestination.innerHTML = "Destination";

  const inputDestination = document.createElement("input");
  inputDestination.setAttribute("id", "Destination");
  inputDestination.setAttribute("type", "text");
  inputDestination.classList.add("form-control");
  inputDestination.value = jsonObj.destination;

  const divDestination = document.createElement("div");
  divDestination.classList.add("mb-3");
  divDestination.prepend(labelDestination, inputDestination);

  //Outset
  const labelOutset = document.createElement("label");
  labelOutset.classList.add("form-label");
  labelOutset.innerHTML = "Outset";

  const inputOutset = document.createElement("input");
  inputOutset.setAttribute("id", "Outset");
  inputOutset.setAttribute("type", "text");
  inputOutset.classList.add("form-control");
  inputOutset.value = jsonObj.outset;

  const divOutset = document.createElement("div");
  divOutset.classList.add("mb-3");
  divOutset.prepend(labelOutset, inputOutset);

  //People
  const labelPeople = document.createElement("label");
  labelPeople.classList.add("form-label");
  labelPeople.innerHTML = "People";

  const inputPeople = document.createElement("input");
  inputPeople.setAttribute("id", "People");
  inputPeople.setAttribute("type", "number");
  inputPeople.setAttribute("min", "0");
  inputPeople.classList.add("form-control");
  inputPeople.value = jsonObj.numOfPeople;

  const divPeople = document.createElement("div");
  divPeople.classList.add("mb-3");
  divPeople.prepend(labelPeople, inputPeople);

  //Description
  const labelDescription = document.createElement("label");
  labelDescription.classList.add("form-label");
  labelDescription.innerHTML = "Description";

  const inputDescription = document.createElement("input");
  inputDescription.setAttribute("id", "Description");
  inputDescription.setAttribute("type", "text");
  inputDescription.classList.add("form-control");
  inputDescription.value = jsonObj.description;

  const divDescription = document.createElement("div");
  divDescription.classList.add("mb-3");
  divDescription.prepend(labelDescription, inputDescription);

  const formC = document.createElement("form");
  formC.prepend(divTitle, divDestination, divOutset, divPeople, divDescription);

  //body
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.prepend(formC);

  const saveBtn = document.createElement("button");
  saveBtn.classList.add("btn", "btn-primary");
  saveBtn.setAttribute("type", "button");
  saveBtn.setAttribute("data-dismiss", "modal");
  saveBtn.innerHTML = "Save";
  saveBtn.addEventListener("click", function (e) {
    editExistPost({
      userId: thisUserID,
      postId: jsonObj.postId,
      title: inputTitle.value,
      destination: inputDestination.value,
      outset: inputOutset.value,
      numOfPeople: inputPeople.value,
      description: inputDescription.value,
    });

    getRenderPost();
  });

  const closeBtn = document.createElement("button");

  closeBtn.classList.add("btn", "btn-secondary");
  closeBtn.setAttribute("data-dismiss", "modal");
  closeBtn.setAttribute("type", "button");
  closeBtn.innerHTML = "Close";

  //button
  const modelFooter = document.createElement("div");
  modelFooter.classList.add("modal-footer");
  modelFooter.prepend(saveBtn, closeBtn);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.prepend(modalHeader, modalBody, modelFooter);

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");
  modalDialog.setAttribute("role", "document");
  modalDialog.prepend(modalContent);
  html.prepend(modalDialog);
}
