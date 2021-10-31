console.log("Main-side code running");


renderPost(document.getElementById("accordionPost"), 1);


//a button listener to get all post from server.js
document.getElementById("testGetPost").addEventListener("click", getAllPost);

//get all post by fetch http://localhost:3000/main/getPost
async function getAllPost() {
  let response = await fetch("http://localhost:3000/main/getPost", {
    method: "GET",
  });
  let data = await response.json();
  console.log(data)
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
    comment:[]
  };
  console.log(newPost);
  postNewPost(JSON.stringify(newPost));
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
    })
};

function renderPost(HTML, id){

  // const h1 = document.createElement("h1");
  // h1.innerHTML = "FFFFF";
  // HTML.prepend(h1);


  const accordion = document.createElement('div');
  accordion.classList.add("accordion");
  accordion.setAttribute('id', "accordionPost")

  const accordionItem = document.createElement('div');
  accordionItem.classList.add("accordion-item");

  const h2 = document.createElement('h2');
  h2.classList.add("accordion-header");
  h2.setAttribute('id', ("heading_"+id.toString()))

  const button = document.createElement('button');
  button.classList.add("accordion-button", "row");
  button.setAttribute('type', 'button');
  button.setAttribute('data-bs-toggle', 'collapse');
  button.setAttribute('data-bs-target', '#collapse_'+id.toString());
  button.setAttribute('aria-expanded', 'true');
  button.setAttribute('aria-controls', 'collapse_'+id.toString());
  button.innerText = ("this is "+id.toString());

  h2.appendChild(button);
  accordionItem.appendChild(h2);

  const collapsePost = document.createElement('div');
  collapsePost.classList.add("accordion-collapse", "collapse", "show");
  collapsePost.setAttribute('aria-labelledby', 'headingOne');
  collapsePost.setAttribute('data-bs-parent', '#accordionPost');

  accordionItem.appendChild(collapsePost);

  HTML.prepend(accordionItem)
}
