let sideMenuBtn = document.querySelector(".side-menu__button--hamburguer");
let gallery = document.querySelector(".gallery");

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

gallery.addEventListener("dblclick", (e)=>{
  clickCounter = 0;
  let evenTarget = e.target;
  if(evenTarget.classList.contains("item__image")){
    
    function likeCheck(){
      let likeImg = evenTarget.previousElementSibling;
      if(likeImg != null && likeImg.classList.contains("item__like")){
        if(likeImg.classList.contains("hidden"))
          likeImg.classList.remove("hidden");
        else
          likeImg.classList.add("hidden");
      }
    }
    likeCheck()
  }
});

// Modal Handler
gallery.addEventListener("click", (e)=>{
  let evenTarget = e.target;
  if(evenTarget.classList.contains("item__image")){
    let modal = document.querySelector(".modal");
      if(modal.classList.contains("hidden")){
        modal.classList.remove("hidden")
        modal.querySelector(".modal__image").src = evenTarget.src;
      }
    }
});