console.log("Main-side code running");

//render the post base on the server data
getRenderPost();


//render the Create post form
renderCreateButton();

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

  const EditPostBtr = document.createElement("div");
  EditPostBtr.classList.add("EditPostBtr");
  EditPostBtr.setAttribute("id", "EditPostBtr" + idString);

  const editButton = document.createElement("button");
  editButton.classList.add("btn", "btn-primary");
  editButton.setAttribute("id", "editButton" + idString);
  editButton.setAttribute("data-toggle", "modal");
  //editButton.setAttribute("data-target", "editForm"+idString);
  editButton.setAttribute("data-target", "#editForm"+idString);
  editButton.innerHTML = "Edit Post";

  EditPostBtr.prepend(editButton);


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
    EditPostBtr
  );
  // post body end


    ////////////////////// Rander  edit post///////////////////////////////////////////

  const editForm = document.createElement("div");
  editForm.classList.add("modal", "fade");
  editForm.setAttribute("id", "editForm"+idString);
  editForm.setAttribute("tabindex", "-1");
  editForm.setAttribute("role", "dialog");
  editForm.setAttribute("aria-labelledby", "exampleModalLabel");
  editForm.setAttribute("aria-hidden", "true");
  //editForm.innerHTML = "Edit Post";


  
  const editForm2 = document.createElement("div");
  editForm2.classList.add("modal-dialog");
  
  const editForm3 = document.createElement("div");
  editForm3.classList.add("modal-content");

  const editForm4 = document.createElement("div");
  editForm4.classList.add("modal-header");

  const editForm5 = document.createElement("h5");
  editForm5.classList.add("modal-title");
  editForm5.setAttribute("id", "exampleModalLabel"+ idString);
  editForm5.innerHTML=jsonObj.title;

  const closeBtr= document.createElement("button");
  closeBtr.classList.add("close");
  closeBtr.setAttribute("data-dismiss", "modal");
  closeBtr.setAttribute("aria-label", "Close");
  
  const span=document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.innerHTML="&times";
  
  closeBtr.prepend(span);
  editForm4.prepend(editForm5,closeBtr);
  



const editForm6=document.createElement("div");
editForm6.classList.add("modal-body");
editForm6.setAttribute("id", "modal-body"+ idString);


const form=document.createElement("form");

const form1=document.createElement("div");
form1.classList.add("mb-3");

//form////////
const form1label=document.createElement("label");
form1label.classList.add("form-label","required");
form1label.innerHTML="Title";
const form1input=document.createElement("input");
form1input.setAttribute("type", "text");
form1input.classList.add("form-control");
form1input.setAttribute("id", "createTitle"+ idString);
form1input.value=jsonObj.title;

const form1label1=document.createElement("label");
form1label1.classList.add("form-label","required");
form1label1.innerHTML="Destination";
const form1input1=document.createElement("input");
form1input1.setAttribute("type", "text");
form1input1.classList.add("form-control");
form1input1.setAttribute("id", "createDestination"+ idString);
form1input1.value=jsonObj.destination;

const form1label2=document.createElement("label");
form1label2.classList.add("form-label","required");
form1label2.innerHTML="Outset";
const form1input2=document.createElement("input");
form1input2.setAttribute("type", "text");
form1input2.classList.add("form-control");
form1input2.setAttribute("id", "createOutset"+ idString);
form1input2.value=jsonObj.outset;

const form1label3=document.createElement("label");
form1label3.classList.add("form-label","required");
form1label3.innerHTML="Time: Start";
const form1input3=document.createElement("input");
form1input3.setAttribute("type", "datetime-local");
form1input3.classList.add("form-control");
form1input3.setAttribute("id", "createDateTimeStart"+ idString);
form1input3.value=jsonObj.dateTimeStart;

const form1label4=document.createElement("label");
form1label4.classList.add("form-label","required");
form1label4.innerHTML="Time: End";
const form1input4=document.createElement("input");
form1input4.setAttribute("type", "datetime-local");
form1input4.classList.add("form-control");
form1input4.setAttribute("id", "createDateTimeEnd"+ idString);
form1input4.value=jsonObj.dateTimeEnd;

const form1label5=document.createElement("label");
form1label5.classList.add("form-label","required");
form1label5.innerHTML="Num of people";
const form1input5=document.createElement("input");
form1input5.setAttribute("type", "number");
form1input5.classList.add("form-control");
form1input5.setAttribute("id", "createNumOfPeople"+ idString);
form1input5.placeholder=jsonObj.numOfPeople;
form1input5.value=jsonObj.numOfPeople;

const form1label6=document.createElement("label");
form1label6.classList.add("form-label","required");
form1label6.innerHTML="Description";
const form1input6=document.createElement("textarea");
form1input6.classList.add("form-control");
form1input6.setAttribute("id", "createDescription"+ idString);
form1input6.placeholder=jsonObj.description;
form1input6.value=jsonObj.description;


const form1label7=document.createElement("label");
form1label7.classList.add("form-label","required");
form1label7.innerHTML="Image/Photo";
const form1input7=document.createElement("input");
form1input7.setAttribute("type", "file");
form1input7.classList.add("form-control");
form1input7.setAttribute("id", "createUploadImage"+ idString);
form1input7.src=jsonObj.photo;


form1.prepend(form1label,form1input,
              form1label1,form1input1,
              form1label2,form1input2,
              form1label3,form1input3,
              form1label4,form1input4,
              form1label5,form1input5,
              form1label6,form1input6,
              form1label7,form1input7);

form.prepend(form1);

////////////////////////////////////////////////////

const editForm7=document.createElement("div");
editForm7.classList.add("modal-footer");

const saveBtr=document.createElement("button");
saveBtr.classList.add("btn", "btn-primary");
saveBtr.setAttribute("id","createPost"+ idString);
saveBtr.innerHTML="Save changes";

const cloBtr=document.createElement("button");
cloBtr.classList.add("btn", "btn-secondary");
cloBtr.setAttribute("data-dismiss","modal");
cloBtr.innerHTML="Close changes";

editForm7.prepend(saveBtr,cloBtr);

const editFormid=document.getElementById("editForm");


editForm6.prepend(form);
editForm3.prepend(editForm4,editForm6,editForm7);
editForm2.prepend(editForm3);
editForm.prepend(editForm2);
editFormid.prepend(editForm);



////////////////////////////////end of create from/////////////////////////





document.getElementById("createPost"+ idString).addEventListener("click", function (e) {
  console.log("button was editPost");
  let newPost = {
    email: "testEmail@umass.edu",
    title: document.getElementById("createTitle"+ idString).value,
    destination: document.getElementById("createDestination"+ idString).value,
    outset: document.getElementById("createOutset"+ idString).value,
    dateTimeStart: document.getElementById("createDateTimeStart"+ idString).value,
    dateTimeEnd: document.getElementById("createDateTimeEnd"+ idString).value,
    numOfPeople: document.getElementById("createNumOfPeople"+ idString).value,
    description: document.getElementById("createDescription"+ idString).value,
    photo: document.getElementById("createUploadImage"+ idString).value,
    comment: [],
  };
  //console.log(newPost);
  postNewPost(JSON.stringify(newPost));
});














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

function renderCreateButton(){
    ////////////////////// Rander  edit post///////////////////////////////////////////

    const editForm = document.createElement("div");
    editForm.classList.add("modal", "fade");
    editForm.setAttribute("id", "exampleModal");
    editForm.setAttribute("tabindex", "-1");
    editForm.setAttribute("role", "dialog");
    editForm.setAttribute("aria-labelledby", "exampleModalLabel");
    editForm.setAttribute("aria-hidden", "true");
    //editForm.innerHTML = "Edit Post";
  
  
    
    const editForm2 = document.createElement("div");
    editForm2.classList.add("modal-dialog");
    
    const editForm3 = document.createElement("div");
    editForm3.classList.add("modal-content");
  
    const editForm4 = document.createElement("div");
    editForm4.classList.add("modal-header");
  
    const editForm5 = document.createElement("h5");
    editForm5.classList.add("modal-title");
    editForm5.setAttribute("id", "exampleModalLabel");
    editForm5.innerHTML="Modal title";
  
    const closeBtr= document.createElement("button");
    closeBtr.classList.add("close");
    closeBtr.setAttribute("data-dismiss", "modal");
    closeBtr.setAttribute("aria-label", "Close");
    
    const span=document.createElement("span");
    span.setAttribute("aria-hidden", "true");
    span.innerHTML="&times";
    
    closeBtr.prepend(span);
    editForm4.prepend(editForm5,closeBtr);
    
  
  
  
  const editForm6=document.createElement("div");
  editForm6.classList.add("modal-body");
  editForm6.setAttribute("id", "modal-body");
  
  
  const form=document.createElement("form");
  
  const form1=document.createElement("div");
  form1.classList.add("mb-3");
  
  //form////////
  const form1label=document.createElement("label");
  form1label.classList.add("form-label","required");
  form1label.innerHTML="Title";
  const form1input=document.createElement("input");
  form1input.setAttribute("type", "text");
  form1input.classList.add("form-control");
  form1input.setAttribute("id", "createTitle");
  //form1input.innerText=jsonObj.title;
  
  const form1label1=document.createElement("label");
  form1label1.classList.add("form-label","required");
  form1label1.innerHTML="Destination";
  const form1input1=document.createElement("input");
  form1input1.setAttribute("type", "text");
  form1input1.classList.add("form-control");
  form1input1.setAttribute("id", "createDestination");
  //form1input.innerText=jsonObj.title;
  
  const form1label2=document.createElement("label");
  form1label2.classList.add("form-label","required");
  form1label2.innerHTML="Outset";
  const form1input2=document.createElement("input");
  form1input2.setAttribute("type", "text");
  form1input2.classList.add("form-control");
  form1input2.setAttribute("id", "createOutset");
  //form1input.innerText=jsonObj.title;
  
  const form1label3=document.createElement("label");
  form1label3.classList.add("form-label","required");
  form1label3.innerHTML="Time: Start";
  const form1input3=document.createElement("input");
  form1input3.setAttribute("type", "datetime-local");
  form1input3.classList.add("form-control");
  form1input3.setAttribute("id", "createDateTimeStart");
  //form1input.innerText=jsonObj.title;
  
  const form1label4=document.createElement("label");
  form1label4.classList.add("form-label","required");
  form1label4.innerHTML="Time: End";
  const form1input4=document.createElement("input");
  form1input4.setAttribute("type", "datetime-local");
  form1input4.classList.add("form-control");
  form1input4.setAttribute("id", "createDateTimeEnd");
  //form1input.innerText=jsonObj.title;
  
  const form1label5=document.createElement("label");
  form1label5.classList.add("form-label","required");
  form1label5.innerHTML="Num of people";
  const form1input5=document.createElement("input");
  form1input5.setAttribute("type", "number");
  form1input5.classList.add("form-control");
  form1input5.setAttribute("id", "createNumOfPeople");
  //form1input.innerText=jsonObj.title;
  
  const form1label6=document.createElement("label");
  form1label6.classList.add("form-label","required");
  form1label6.innerHTML="Description";
  const form1input6=document.createElement("textarea");
  form1input6.classList.add("form-control");
  form1input6.setAttribute("id", "createDescription");
  //form1input.innerText=jsonObj.title;
  
  const form1label7=document.createElement("label");
  form1label7.classList.add("form-label","required");
  form1label7.innerHTML="Image/Photo";
  const form1input7=document.createElement("input");
  form1input7.setAttribute("type", "file");
  form1input7.classList.add("form-control");
  form1input7.setAttribute("id", "createUploadImage");
  //form1input.innerText=jsonObj.title;
  
  form1.prepend(form1label,form1input,
                form1label1,form1input1,
                form1label2,form1input2,
                form1label3,form1input3,
                form1label4,form1input4,
                form1label5,form1input5,
                form1label6,form1input6,
                form1label7,form1input7);
  
  form.prepend(form1);
  
  ////////////////////////////////////////////////////
  
  const editForm7=document.createElement("div");
  editForm7.classList.add("modal-footer");
  
  const saveBtr=document.createElement("button");
  saveBtr.classList.add("btn", "btn-primary");
  saveBtr.setAttribute("id","createPost");
  saveBtr.innerHTML="Save changes";
  
  const cloBtr=document.createElement("button");
  cloBtr.classList.add("btn", "btn-secondary");
  cloBtr.setAttribute("data-dismiss","modal");
  cloBtr.innerHTML="Close changes";
  
  editForm7.prepend(saveBtr,cloBtr);
  
  
  
  
  editForm6.prepend(form);
  editForm3.prepend(editForm4,editForm6,editForm7);
  editForm2.prepend(editForm3);
  editForm.prepend(editForm2);



  const createPo=document.createElement("div");
  createPo.classList.add("filterBar", "row");

  const createPo1=document.createElement("div");
  createPo1.classList.add("row");

  const createPo2=document.createElement("div");
  createPo2.classList.add("col");

  const createPo3=document.createElement("div");
  createPo3.classList.add("mainBtrBar");

  const createPo4=document.createElement("div");
  createPo4.classList.add("createPost");
  
  const creatBtr=document.createElement("button");
  creatBtr.classList.add("btn", "btn-primary");
  creatBtr.setAttribute("data-toggle","modal");
  creatBtr.setAttribute("data-target","#exampleModal");
  creatBtr.setAttribute("id","createPopUp");
  creatBtr.innerHTML="Create Post";


  createPo4.prepend(creatBtr);
createPo3.prepend(createPo4,editForm);
 createPo2.prepend(createPo3);
createPo1.prepend(createPo2);
  createPo.prepend(createPo1);


  const createPost=document.getElementById("createPostbutton");
  createPost.prepend(createPo);
  



  
  
  
  ////////////////////////////////end of create from/////////////////////////
}