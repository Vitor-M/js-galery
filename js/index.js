
// Global Variables
let sideMenuBtn = document.querySelector(".side-menu__button--hamburguer");
let images = document.querySelectorAll(".item__image");
let modal = document.querySelector(".modal");
let modalImg = modal.querySelector(".modal__image");
let modalImgLike = modal.querySelector(".modal__like");
let modalPrevious = modal.querySelector(".modal__button.previous");
let modalNext = modal.querySelector(".modal__button.next");
let selectedImg = null


// SideBar focus controller
// Closes or opens the Side Menu (Depending on Side Menu state) when the sidebar icon is clicked
sideMenuBtn.addEventListener("click", () => {
  let sideMenu = document.querySelector(".side-menu");
  let btnImg = sideMenuBtn.querySelector(".side-menu__icon");

  if(sideMenu.classList.contains("closed")) {
    sideMenu.classList.remove("closed");
    btnImg.src = "./assets/open-menu.svg"
  }else{
    sideMenu.classList.add("closed");
    btnImg.src = "./assets/closed-menu.svg"
  }
});

//Gallery Images Controller
//Checks if a single or double click event was called from an image gallery.
//    If the event is a single click, then modal will open.
//    If the event is a double click the like icon will appear.
let clickCounter = 0
images.forEach(img =>{
  img.addEventListener("click", ()=>{
    clickCounter++;
    if(clickCounter === 1) {
      clickerTime = setTimeout(() => {
        clickCounter = 0;
        openModal(img);
      }, 400);
    } else if(clickCounter === 2) {
      clearTimeout(clickerTime);
      clickCounter = 0;
      likeHandler(img);
    }
  });
});

//Closes the modal, if it's open and the user clicks over modal close button or modal fade
modal.addEventListener("click", (e) =>{
    if(e.target.classList.contains("modal") || e.target.parentNode.classList.contains("close") ) {
      modal.classList.add("hidden");
      modalImg.removeAttribute("src");
      modalImgLike.classList.add("hidden");
      selectedImg = null;
    }
});

//Shows the image like icon when the modal image is doubleclicked
modalImg.addEventListener("dblclick", () =>{
  likeHandler(selectedImg);
  if(modalImgLike.classList.contains("hidden"))
    modalImgLike.classList.remove("hidden");
  else
    modalImgLike.classList.add("hidden");
});

//Shows modal
function openModal(img) {
  if(modal.classList.contains("hidden")){
    modal.classList.remove("hidden");
    updateModal(img);
  }
}

//Update modal
//Puts the correspondent gallery image into modal image
//Verifies and sets the modal image like icon if the gallery image has like
//Verifies and hidden the modal arrows if there is more images after and/or before the actual modal image
//Set the actual modal image
function updateModal(img) {
  modalImg.src = img.src;
  if(isLiked(img)) 
    modalImgLike.classList.remove("hidden");
  else
    modalImgLike.classList.add("hidden");
  selectedImg = img;
  arrowsHandler(img);
}

//Verifies if the gallery image has like
//Returns a boolean (true/false)
function isLiked(img) {
  let likeImg = img.parentNode.querySelector(".item__like");
  if(likeImg != null){
    if(likeImg.classList.contains("hidden"))
      return false;
    else
      return true;
  }
}

function likeHandler(img) {
  let likeImg = img.parentNode.querySelector(".item__like");
  if(likeImg != null){
    if(likeImg.classList.contains("hidden"))
      likeImg.classList.remove("hidden");
    else
      likeImg.classList.add("hidden");
  }
}

//Updates modal with next gallery image info
modalNext.addEventListener("click",() =>{
  let nextImg = selectedImg.parentNode.nextElementSibling.querySelector(".item__image");
  updateModal(nextImg);
});

//Updates modal with previous gallery image info
modalPrevious.addEventListener("click",() =>{
  let previousImg = selectedImg.parentNode.previousElementSibling.querySelector(".item__image");
  updateModal(previousImg);
});

//Shows/hidden the modal arrow if ther is a image next/back the current modal image 
function arrowsHandler(img) {
  let card = img.parentNode;
  if(card.previousElementSibling == null)
    modalPrevious.style.display = "none";
  else
    modalPrevious.style.display = "block";
  
  if(card.nextElementSibling == null)
    modalNext.style.display = "none";
  else
    modalNext.style.display = "block";

}