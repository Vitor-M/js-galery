let sideMenuBtn = document.querySelector(".side-menu__button--hamburguer");
let gallery = document.querySelector(".gallery");
let modal = document.querySelector(".modal");
let modalImg = modal.querySelector(".modal__image");
let modalImgLike = modal.querySelector(".modal__like");

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

let clickCounter = 0
gallery.addEventListener("click", (e)=>{
  if(e.target.classList.contains("item__image")){
    clickCounter++;
    if(clickCounter === 1) {
      clickerTime = setTimeout(() => {
        clickCounter = 0;
        modalHandler(e.target);
      }, 400);
    } else if(clickCounter === 2) {
      clearTimeout(clickerTime);
      clickCounter = 0;
      likeHandler(e.target);
    }
  }
});

function modalHandler(img) {
  if(modal.classList.contains("hidden")){
    modal.classList.remove("hidden");
    modalImg.src = img.src;
    if(isLiked(img)) 
    modalImgLike.classList.remove("hidden");
  }
}

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