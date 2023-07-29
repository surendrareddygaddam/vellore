// Dom document object model

function init() {
  const hamburger = document.querySelector(".hamburger");
  const sideBarCloseButton = document.querySelector(".close-button");
  const sideBarContainer = document.querySelector(".sidebar-container");

  const opensidebar = () => {
    sideBarContainer.classList.add("show-sidebar");
    console.log("i am click");
  };

  const closesidebar = () => {
    sideBarContainer.classList.remove("show-sidebar");
  };

  hamburger.addEventListener("click", opensidebar);
  sideBarCloseButton.addEventListener("click", closesidebar);
}
init();

function navRelatedCode() {
  const navContainer = document.querySelector(".nav-container");
  window.addEventListener("scroll", function () {
    let scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth >= 992 ? 70 : 50;
    if (scrollNumber > targetNumber) {
      navContainer.classList.add("sticky-nav");
    } else {
      navContainer.classList.remove("sticky-nav");
    }
  });
}
navRelatedCode();
