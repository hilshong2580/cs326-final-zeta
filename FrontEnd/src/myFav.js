
myFavFunction();
allPostFunction();

let thisUserID=0;

getID();


function getID(){
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
////////////////////////////////////////all post/////////////////////////////////////
function allPostFunction(){
    const searchbtr=document.getElementById("allPost");
    
    //const input=document.getElementById("searchinput").value;
    //const searchInput=document.getElementById("searchinput");
    
    searchbtr.addEventListener("click", function (e) {
    
      //  alert("my FAV");
      renderall();
       });
    
    }
    
    function renderall(){
        const searchInput=document.getElementById("searchinput");
        let i=0;
        while(document.getElementById("post"+JSON.stringify(i))!==null){
          // console.log(i);
            i++;
        }
    
    // console.log(document.getElementById("postitle"+JSON.stringify(1)).innerText);
        
        for(let j=0;j<i;j++){   
                document.getElementById("post"+JSON.stringify(j)).hidden= false;    
        }
    }



/////////////////////////////filter/////////////////////////////


function myFavFunction(){
const searchbtr=document.getElementById("MyFavPost");

//const input=document.getElementById("searchinput").value;
//const searchInput=document.getElementById("searchinput");

searchbtr.addEventListener("click", function (e) {

    // alert(thisUserID);
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
         // let tempString=JSON.stringify(data);
         // tempString.replace("userid\":1", "");
        //  alert(tempString);
        hideAll();
          for (let i in data) {
            let dataTemp = {
              postId: data[i].postid
            };
        console.log(dataTemp.postId);
/////////////////////
        const searchInput=document.getElementById("searchinput");
        let i=0;
        while(document.getElementById("post"+JSON.stringify(i))!==null){
        // console.log(i);
            i++;
        }
        // console.log(document.getElementById("postitle"+JSON.stringify(1)).innerText);
        for(let j=0;j<i;j++){
            if(((document.getElementById("postitle"+JSON.stringify(j)).innerText).toLowerCase())===dataTemp.postId){ 
            document.getElementById("post"+JSON.stringify(j)).hidden= false;
                }
            }


        ///////////////////////

        }
      }
    });
  }
  

function hideAll(){
 
    const searchInput=document.getElementById("searchinput");
    let i=0;
    while(document.getElementById("post"+JSON.stringify(i))!==null){
      // console.log(i);
        i++;
    }
    for(let j=0;j<i;j++){
            document.getElementById("post"+JSON.stringify(j)).hidden= true;
    }
}