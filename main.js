let inputName = document.querySelector(".input-name");
let letsGo = document.querySelector(".lets-go-btn");

// function checkName(){
    
//     if(inputName.value.length != 0){
//         letsGo.style.display = "flex"
//     }else{
//         letsGo.style.display = "none";
//     }
// }
// checkName()
// console.log(inputName.value)

// check input

inputName.oninput = function(){
    if (inputName.value.length != 0) {
      letsGo.style.display = "flex";
    } else {
      letsGo.style.display = "none";
    }
}

// stop form 
letsGo.onclick = function(){

}