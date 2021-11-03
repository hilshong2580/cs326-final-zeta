console.log("Main-side code running");
//render the post base on the server data
getRenderPost();


const userID="testUuid";
const userEmail="testEmail@umass.edu";


// a button listener to create a new post
document.getElementById("createPost").addEventListener("click", function (e) {
  console.log("button was createPost");
  let newPost = {
    id: userID,
    email: userEmail,
    title: document.getElementById("createTitle").value,
    destination: document.getElementById("createDestination").value,
    outset: document.getElementById("createOutset").value,
    dateTimeStart: document.getElementById("createDateTimeStart").value,
    dateTimeEnd: document.getElementById("createDateTimeEnd").value,
    numOfPeople: document.getElementById("createNumOfPeople").value,
    description: document.getElementById("createDescription").value,
    photo: document.getElementById("createUploadImage").value,
    comment: [],
  };
  //console.log(newPost);
  postNewPost(JSON.stringify(newPost));
  document.getElementById("accordion").innerHTML = "";
  getRenderPost();
});

// document.getElementById("deletePopUp").addEventListener("click", function (e) {
//   let email = "testEmail@umass.edu";
//   let id = "testUuid";
//   console.log(email + " " + id);
//   deleteExistPost(JSON.stringify({ email: email, id: id }));
// });

// document.getElementById("editPopUp").addEventListener("click", function (e) {
//   let temp = {
//     id: "testUuid",
//     email: "testEmail@umass.edu",
//     title: "aaaaaaaa",
//     destination: "aaaaaaaaa",
//     outset: "aaaaaaaaaa",
//     dateTimeStart: "2021-11-03T02:23",
//     dateTimeEnd: "2021-11-03T01:24",
//     numOfPeople: "6",
//     description: "dasd",
//     photo: "C:\\fakepath\\1111PickMeForTest.jpg",
//     comment: [],
//   };
//   console.log(temp);
//   editExistPost(JSON.stringify(temp));
// });

async function editExistPost(jsonObj) {
  fetch("http://localhost:3000/main/PostE", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonObj,
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200) getRenderPost();
  });
}

async function deleteExistPost(jsonObj) {
  fetch("http://localhost:3000/main/PostD", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonObj,
  }).then(async (response) => {
    const data = await response.text();
    if (data === "true") getRenderPost();
  });
}

//get all post by fetch http://localhost:3000/main/getPost , then render the post
async function getRenderPost() {
  let response = await fetch("http://localhost:3000/main/PostG", {
    method: "GET",
  });
  let data = JSON.parse(await response.json());

  document.getElementById("accordion").innerHTML = "";
  for (let i in data) {
    renderPost(document.getElementById("accordion"), i, data[i]);
  }
}

//post new post by fetch http://localhost:3000/main/createPost
async function postNewPost(jsonObj) {
  fetch("http://localhost:3000/main/PostP", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonObj,
  }).then(async (response) => {
    const data = await response.text();
    if (response.status === 200) getRenderPost();
  });
}

function renderPost(HTML, id, jsonObj) {
  const idString = id.toString();
  const postButton = document.createElement("button");
  postButton.classList.add("btn", "btn-link");
  postButton.setAttribute("data-toggle", "collapse");
  postButton.setAttribute("data-target", "#collapse" + idString);
  postButton.setAttribute("aria-expanded", "true");
  postButton.setAttribute("aria-controls", "collapse" + idString);
  postButton.setAttribute("id", "postitle" + idString);
  postButton.innerText = jsonObj.title;

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
  destination.innerHTML = "Destination: " + jsonObj.destination;

  const picture = document.createElement("div");
  picture.classList.add("picture");
  picture.setAttribute("id", "Picture" + idString);

  const image = document.createElement("img");
  image.setAttribute("src", jsonObj.photo);
  image.setAttribute("alt", "...");
  image.setAttribute("id", "image" + idString);
  picture.prepend(image);

  const outset = document.createElement("div");
  outset.classList.add("Outset");
  outset.setAttribute("id", "Outset" + idString);
  outset.innerHTML = "Outset: " + jsonObj.outset;

  const startTime = document.createElement("div");
  startTime.classList.add("startTime");
  startTime.setAttribute("id", "startTime" + idString);
  startTime.innerHTML = "Start: " + jsonObj.dateTimeStart;

  const endTime = document.createElement("div");
  endTime.classList.add("endTime");
  endTime.setAttribute("id", "endTime" + idString);
  endTime.innerHTML = "End: " + jsonObj.dateTimeEnd;

  const numberOfPeople = document.createElement("div");
  numberOfPeople.classList.add("numberOfPeople");
  numberOfPeople.setAttribute("id", "numberOfPeople" + idString);
  numberOfPeople.innerHTML = "People Num: " + jsonObj.numOfPeople;

  const Description = document.createElement("div");
  Description.classList.add("Description");
  Description.setAttribute("id", "Description" + idString);
  Description.innerHTML = "Description: " + jsonObj.description;

  const DeletePostBtr = document.createElement("div");
  DeletePostBtr.classList.add("DeletePostBtr");
  DeletePostBtr.setAttribute("id", "DeletePostBtr" + idString);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-primary");
  //deleteButton.setAttribute("id", "deleteButton" + idString);
  deleteButton.setAttribute("data-bs-toggle", "modal");
  deleteButton.setAttribute("data-bs-target", "myModal");
  deleteButton.setAttribute("type", "button");
  deleteButton.innerHTML = "Delete Post";

  deleteButton.addEventListener("click", function (e) {
    let email = jsonObj.email;
    let id = jsonObj.id;
    console.log(email + " " + id);
    deleteExistPost(JSON.stringify({ email: email, id: id }));
  });

  const edBtn = document.createElement("button");
  edBtn.classList.add("btn", "btn-primary");
  edBtn.setAttribute("data-toggle", "modal");
  edBtn.setAttribute("data-target", "#Modal" + idString);
  edBtn.setAttribute("type", "button");
  edBtn.innerHTML = "Edit Button";


  ///////////////////only user can have edit post////////////////////////
  if((JSON.stringify(jsonObj.email)===JSON.stringify(userEmail))&&(JSON.stringify(jsonObj.id)===JSON.stringify(userID))){
  DeletePostBtr.prepend(deleteButton, edBtn);
  }

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
    DeletePostBtr
  );
  // post body end

  //comment Start
  const commentDetail = document.createElement("div");
  commentDetail.classList.add("commentDetail");

  for (let com in jsonObj.comment) {
    const contentaa = document.createElement("div");
    contentaa.innerHTML =
      jsonObj.comment[com].name + ": " + jsonObj.comment[com].comment;
    commentDetail.prepend(contentaa);
  }

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
  label.innerText = "Your Comment: ";

  const textarea = document.createElement("textarea");
  textarea.classList.add("form-control");
  textarea.setAttribute("row", "3");
  textarea.setAttribute("id", "exampleFormControlTextarea1");
  textarea.innerText = "Your Comment: ";

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");
  formGroup.prepend(label, textarea);

  const buttonSubmit = document.createElement("button");
  buttonSubmit.innerText = "Submit";

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
  cardBody.innerHTML = "this is " + idString;
  cardBody.prepend(modal, comment);
  cardBody.prepend(accordionDetail);

  const collapsePost = document.createElement("div");
  collapsePost.setAttribute("id", "collapse" + idString);
  collapsePost.classList.add("collapse", "show");
  collapsePost.setAttribute("aria-labelledby", "heading" + idString);
  collapsePost.setAttribute("data-bs-parent", "#accordion");
  collapsePost.prepend(cardBody);

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", "post"+idString);

  card.prepend(collapsePost);
  card.prepend(cardHeader);
 
  HTML.prepend(card);
}

function renderComment(html, json) {
  const content = document.createElement("div");
  content.innerHTML = json.name + ": " + json.comment;
  html.prepend(content);
}

//render the form for edit
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
    editExistPost(
      JSON.stringify({
        id: "testUuid",
        email: "testEmail@umass.edu",
        title: inputTitle.value,
        destination: inputDestination.value,
        outset: inputOutset.value,
        numOfPeople: inputPeople.value,
        description: inputDescription.value,
      })
    );
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
