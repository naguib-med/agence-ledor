var modal = document.querySelector("#myModal");
var offerBtn1 = document.querySelector("#offerBtn1");
var offerBtn2 = document.querySelector("#offerBtn2");
var offerBtn3 = document.querySelector("#offerBtn3");

var span = document.querySelector(".close");

var list = document.querySelector(".offer-list");

// for (var i = 0; i < list.childNodes.length; i++) {
//   if ((list.childNodes[i].nodeName = "LI")) {
//     list.childNodes[i].classList.add("");
//   }
// }

offerBtn1.addEventListener("click", (e) => {
  modal.style.display = "block";
});

offerBtn2.addEventListener("click", (e) => {
  modal.style.display = "block";
});

offerBtn3.addEventListener("click", (e) => {
  modal.style.display = "block";
});

span.addEventListener("click", (e) => {
  modal.style.display = "none";
});

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
