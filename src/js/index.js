var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")
// var text = document.querySelector(".title")
function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
//   text.classList.toggle("closeText")
}

ham.addEventListener("click", toggleHamburger)
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
    
  }
)
