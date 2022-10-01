let str1 = document.querySelector(".str-1");
let str2 = document.querySelector(".str-2");
let imgOne = document.getElementById("img-1");
let imgTwo = document.getElementById("img-2");
let aud1 = document.getElementById("aud1")
let aud2 = document.getElementById("aud2")
// let seriousB = new Audio("../Audio/serious b.mpeg")

imgOne.onclick = function () {
  str2.style.transform = "translateX(0)";
  aud1.play()
  aud2.pause()
}
imgTwo.onclick = function () {
//   seriousB.play();
aud2.play()
aud1.pause()
  str2.style.transform = "translateX(-200%)";
  str1.style.transform = "translateX(0)";

}
