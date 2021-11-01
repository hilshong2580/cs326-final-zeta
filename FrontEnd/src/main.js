console.log("Main-side code running");

//render the post base on the server data
getRenderPost();

//get all post by fetch http://localhost:3000/main/getPost , then render the post
async function getRenderPost() {
  let response = await fetch("http://localhost:3000/main/getPost", {
    method: "GET",
  });
  let data = JSON.parse(await response.json());
  for (let i in data) {
    renderPost(document.getElementById("accordion"), i, data[i]);
  }
}

// a button listener to create a new post
document.getElementById("createPost").addEventListener("click", function (e) {
  console.log("button was createPost");
  let newPost = {
    email: "testEmail@umass.edu",
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

//post new post by fetch http://localhost:3000/main/createPost
async function postNewPost(jsonObj) {
  fetch("http://localhost:3000/main/createPost", {
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

function renderPost(HTML, id, jsonObj) {
  let idString = id.toString();

  const postButton = document.createElement("button");
  postButton.classList.add("btn", "btn-link");
  postButton.setAttribute("data-toggle", "collapse");
  postButton.setAttribute("data-target", "#collapse" + idString);
  postButton.setAttribute("aria-expanded", "true");
  postButton.setAttribute("aria-controls", "collapse" + idString);
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
  deleteButton.setAttribute("id", "deleteButton" + idString);
  deleteButton.setAttribute("data-bs-toggle", "modal");
  deleteButton.setAttribute("data-bs-target", "myModal");
  deleteButton.innerHTML = "Delete Post";

  DeletePostBtr.prepend(deleteButton);

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

  for(let com in jsonObj.comment){
    const contentaa =  document.createElement("div")
    contentaa.innerHTML = (jsonObj.comment[com].name+": "+jsonObj.comment[com].comment);
    commentDetail.prepend(contentaa);
  }

  const overFlow = document.createElement("div");
  overFlow.classList.add("overflow-auto", "p-3", "mb-3",  "mb-md-0", "mr-md-3",  "bg-light");
  overFlow.prepend(commentDetail);


  const label = document.createElement("label");
  label.setAttribute("for", "exampleFormControlTextarea1");
  label.innerText="Your Comment: ";

  const textarea = document.createElement("textarea");
  textarea.classList.add("form-control");
  textarea.setAttribute("row", "3");
  textarea.setAttribute("id", "exampleFormControlTextarea1");
  textarea.innerText="Your Comment: ";


  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");
  formGroup.prepend(label, textarea);

  const buttonSubmit = document.createElement("button");
  buttonSubmit.innerText = "Submit";


  const comment = document.createElement("div");
  comment.classList.add("comment");
  comment.prepend(overFlow, formGroup, buttonSubmit);

  const cardBody = document.createElement("div");
  cardBody.innerHTML = "this is " + idString;
  cardBody.prepend(comment);
  cardBody.prepend(accordionDetail);


  const collapsePost = document.createElement("div");
  collapsePost.setAttribute("id", "collapse" + idString);
  collapsePost.classList.add("collapse", "show");
  collapsePost.setAttribute("aria-labelledby", "heading" + idString);
  collapsePost.setAttribute("data-bs-parent", "#accordion");
  collapsePost.prepend(cardBody);

  const card = document.createElement("div");
  card.classList.add("card");
  card.prepend(collapsePost);
  card.prepend(cardHeader);

  HTML.prepend(card);
}



function renderComment(html, json){
  const content =  document.createElement("div")
  content.innerHTML = (json.name+": "+json.comment);
  html.prepend(content);
}

/**
  email: faker.internet.email(),
    title: faker.name.title(),
    destination: faker.address.streetAddress(),
    outset: faker.address.streetAddress(),
    dateTimeStart: faker.datatype.datetime(),
    dateTimeEnd: faker.datatype.datetime(),
    numOfPeople: faker.datatype.number(),
    description: faker.lorem.words(),
    photo: faker.image.avatar(),
    comment:[
      { comment: faker.hacker.phrase()},
      { nameB: faker.hacker.phrase()},
      { nameC: faker.hacker.phrase()}
 */

// //a button listener to get all post from server.js
// document.getElementById("testGetPost").addEventListener("click", getAllPost);

// //get all post by fetch http://localhost:3000/main/getPost
// async function getAllPost() {
//   let response = await fetch("http://localhost:3000/main/getPost", {
//     method: "GET",
//   });
//   let data = JSON.parse(await response.json());
//   return data;
// }
