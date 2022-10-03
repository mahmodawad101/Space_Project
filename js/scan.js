let img = document.getElementById("img")
let upB = document.getElementById("upload-btn"),
  card = document.querySelector(".card");
let fileNamee = document.querySelector(".card-title");
let deef = document.getElementById("div-1");
let a = document.getElementById("bton");
deef.onclick = () => {
    upB.click()
  }
  upB.onchange = () => {
    let reader = new FileReader(upB.files[0]);
    reader.readAsDataURL(upB.files[0])
    reader.onload = () => {
      img.setAttribute("src", reader.result);
      deef.style.display = "none";
    }
    fileNamee.textContent = upB.files[0].name
  }
  a.addEventListener("click", function () {
    img.style.filter = "saturate(7)"
  });


  img.onclick = () => {
upB.click();
  }

document.getElementById("bton-1").addEventListener("click" , function(){
  img.style.filter = "saturate(1)";
})