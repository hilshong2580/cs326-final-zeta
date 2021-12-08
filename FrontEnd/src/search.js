
searchFunction();

////////////////////////////function/////////////////////////

//add functino to search button
function searchFunction() {
    const searchbtr = document.getElementById("searchbtr");
    searchbtr.addEventListener("click", function (e) {
        render();
    });
}

//hide all post and show related post
function render() {
    const searchInput = document.getElementById("searchinput");
    let i = 0;
    while (document.getElementById("post" + JSON.stringify(i)) !== null) {
        i++;
    }
    for (let j = 0; j < i; j++) {
        if (((document.getElementById("postitle" + JSON.stringify(j)).innerText).toLowerCase()).includes((searchInput.value).toLowerCase())) {
            document.getElementById("post" + JSON.stringify(j)).hidden = false;
        } else {
            document.getElementById("post" + JSON.stringify(j)).hidden = true;
        }
    }
}