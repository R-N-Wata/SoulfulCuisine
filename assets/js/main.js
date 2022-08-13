
let toggleBtn = document.querySelector(".toggleBtn")

let navbarLink = document.querySelector(".navbarLinks")

let mainSection = document.querySelector("#mainSection")

toggleBtn.addEventListener("click", function () {
  
  // navbarLink.classList.toggle("hidden");
  
  
  if (navbarLink.classList.contains("hidden")){
    navbarLink.classList.toggle("hidden");
        document.querySelector("h1").style.marginTop = "-4rem";
    
    console.log("hi")
    
    
  }else if (!navbarLink.classList.contains("hidden")){
  navbarLink.classList.toggle("hidden");
    
    document.querySelector("h1").style.marginTop = "-30.8rem";
    
  }
})



// menuBtn

let menuLink = document.querySelector(".menu-navrbarLinks")
let toggleMenu = document.querySelector(".toggleBtn-menu")

toggleMenu.addEventListener("click", function () {
  
  // navbarLink.classList.toggle("hidden");
  
  
  if (menuLink.classList.contains("hidden")){
    menuLink.classList.toggle("hidden");
        // document.querySelector("h1").style.marginTop = "-4rem";
    
    // console.log("hi")
    
    
  }else if (!menuLink.classList.contains("hidden")){
  menuLink.classList.toggle("hidden");
    
    // document.querySelector("h1").style.marginTop = "-30.8rem";
    
  }
})



const menuBtns = document.querySelectorAll('.menu-btn')
const mainContainer = document.querySelector('.main-recipes')
const starterContainer = document.querySelector('.starter-menu')
const dessertContainer = document.querySelector('.dessert-menu')

menuBtns.forEach(el => el.addEventListener('click', () =>{
  if(el.textContent.includes('Main')){

    mainContainer.classList.remove('hidden')
    starterContainer.classList.add('hidden')
    dessertContainer.classList.add('hidden')

  }else if(el.textContent.includes('Starters')){

    
    starterContainer.classList.remove('hidden')
    mainContainer.classList.add('hidden')
    dessertContainer.classList.add('hidden')

  }else  if(el.textContent.includes('Dessert')){

    dessertContainer.classList.remove('hidden')
    mainContainer.classList.add('hidden')
    starterContainer.classList.add('hidden')
  }
}))




