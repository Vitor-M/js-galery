let sideMenuBtn = document.querySelector(".side-menu__button--hamburguer");
let gallery = document.querySelector(".gallery");
let modal = document.querySelector(".modal");
let modalImg = modal.querySelector(".modal__image");
let modalImgLike = modal.querySelector(".modal__like");
let modalCloseBtn =  modal.querySelector(".modal__button.close");
let images = document.querySelectorAll(".item__image");

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
images.forEach(img =>{
  img.addEventListener("click", ()=>{
    clickCounter++;
    if(clickCounter === 1) {
      clickerTime = setTimeout(() => {
        clickCounter = 0;
        modalHandler(img);
      }, 400);
    } else if(clickCounter === 2) {
      clearTimeout(clickerTime);
      clickCounter = 0;
      likeHandler(img);
    }
  });
});

modalCloseBtn.addEventListener("click", () =>{
    modal.classList.add("hidden");
    modalImg.src = "";
    modalImgLike.classList.add("hidden");
});

modalImg.addEventListener("dblclick", () =>{
  images.forEach(img => {
    if(img.src == modalImg.src){
      likeHandler(img);
      if(modalImgLike.classList.contains("hidden"))
        modalImgLike.classList.remove("hidden");
      else
        modalImgLike.classList.add("hidden");
    }
  });
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