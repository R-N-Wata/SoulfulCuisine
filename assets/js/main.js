
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


