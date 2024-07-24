
let addtoList = document.getElementById("plus_btn");

let userInput = document.getElementById("txt");

let res = document.getElementById("values");



let arr = [];

/  ---onload---  /
window.onload=()=>{

    arr =JSON.parse(localStorage.getItem("backendData")) || [];
   
    arr.forEach(data => {
        addtodo(data);
    });
}


addtoList.addEventListener("click",()=>{

let output =userInput.value;

if(output!=''){
    / to check the input value is empty or not/
 var test = new RegExp("^[A-Z a-z \s]+$");
if( output.match(test)){
    / validation for characters only /
    let subText = document.getElementById("subText");
    subText.innerText="";
    
arr.push(output);
localStorage.setItem("backendData",JSON.stringify(arr));
addtodo(output);
userInput.value="";
}
else{
   / ---subtext part over /
   let subText = document.getElementById("subText");
   subText.innerText="Field should not contains numbers and special characters.";

   / append subtext in field/
}
}
else{
    
    // Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "You should enter the value!",
    //     width:"40%",
    //   });
    alert("OOps ... You should enter the value!")
}
})

function addtodo(output){

    let resultContainer = document.createElement("div");
    resultContainer.setAttribute("id","valueContainer");
    
    let para = document.createElement("p");
    para.innerText=output;
    
    let trashBin = document.createElement("img");
     trashBin.setAttribute('src',"negtiveSign.jpg");
     trashBin.setAttribute('alt',"negtiveSign.jpg");
    trashBin.setAttribute('class','trash');
    trashBin.style.height='20px';
    trashBin.style.width='20px';
    
    resultContainer.appendChild(para);
    resultContainer.appendChild(trashBin);
    res.appendChild(resultContainer);
    
    trashBin.addEventListener("click",()=>{
     res.removeChild(resultContainer);
     remove(output);
    
    });
}

function remove(data){
   let index = arr.indexOf(data);
    if(index>-1){
        arr.splice(index,1);
    }
    localStorage.setItem("backendData",JSON.stringify(arr));

    }

