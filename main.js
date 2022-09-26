let inputName = document.querySelector(".input-name");
let letsGo = document.querySelector(".lets-go-btn");
let startAud = document.querySelector(".start-audio");
let startPage = document.querySelector(".start-page");
let helloTxt = document.querySelector(".hello-txt");
let readyPage = document.querySelector(".ready-page")


let music = new Audio("Audio/StartSound.mp3");

inputName.oninput = function(){
  let inv = inputName.value
    if (inputName.value.length != 0 ) {
      // letsGo.style.display = "flex";
      letsGo.style.opacity = "1"
      letsGo.style.cursor = "pointer"
    } else {
      letsGo.style.opacity = "0.5"
      letsGo.style.cursor = "not-allowed"
      // letsGo.style.display = "none";
    }
}
// stop form 


letsGo.addEventListener("click" , function(e){
  e.preventDefault();
  let innerVal = inputName.value;
  if (inputName.value.length != 0 ){
    console.log(inputName.value);
    startPage.style.display = "none";
    readyPage.style.display = "block";

    let i = 0;
    let helloText = `Hello ${innerVal}, lets Start Our Journey`;
function typingHello() {
  if (i < helloText.length) {
    helloTxt.innerHTML += helloText.charAt(i);
    i++;
    setTimeout(typingHello, 60);
  }
}
typingHello()
    music.play()
  }else{
    startPage.style.display = "block";
  }
})
