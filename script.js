// document.addEventListener('DOMContentLoaded', function() {
//   const hamburgerBtn = document.getElementById('hambtn');
//   const menu = document.getElementById('hamburger-menu');

//   hamburgerBtn.addEventListener('click', function() {
//     menu.classList.toggle('show');
//   });
// });

const menu = document.querySelector(".hamburger-menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hambtn");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

//const menuItems = document.querySelectorAll(".menuItem");
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)