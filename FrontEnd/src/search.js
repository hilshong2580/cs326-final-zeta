
searchFunction();


// searchInput();

// const SI="";

// function searchInput(){

//     const searchInput=document.getElementById("searchinput");
//     searchInput.addEventListener("keydown", function (e) {
//        // console.log(document.getElementById("searchinput").value);
//         console.log(searchInput.value);
       
//         //SI=SI+JSON.stringify(searchInput.innerHTML);
//         });

// }



function searchFunction(){
const searchbtr=document.getElementById("searchbtr");

const input=document.getElementById("searchinput").value;
const searchInput=document.getElementById("searchinput");

searchbtr.addEventListener("click", function (e) {

    render();
   });

}

function render(){
  
    const searchInput=document.getElementById("searchinput");
    let i=0;
    while(document.getElementById("post"+JSON.stringify(i))!==null){
       // console.log(i);
        i++;
    }

//console.log(document.getElementById("postitle"+JSON.stringify(1)).innerText);
    
    for(let j=0;j<i;j++){
        //if(JSON.stringify(searchInput.value)===(JSON.stringify(document.getElementById("postitle"+JSON.stringify(j)).innerText))){
        // if((JSON.stringify(document.getElementById("postitle"+JSON.stringify(j)).innerText)).includes(JSON.stringify(searchInput.value))){ 
        if(((document.getElementById("postitle"+JSON.stringify(j)).innerText).toLowerCase()).includes((searchInput.value).toLowerCase())){ 
        document.getElementById("post"+JSON.stringify(j)).hidden= false;
          //  console.log(document.getElementById("postitle"+JSON.stringify(j)).innerText+"not hide");
        }else{
            document.getElementById("post"+JSON.stringify(j)).hidden= true;
           // console.log(document.getElementById("postitle"+JSON.stringify(j)).innerText+" hide");
        }

    }
}