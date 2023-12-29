const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sideBar = document.querySelector('.container left-section');
const sideBarItems = document.querySelectorAll('.container .left-section .sidebar .item');

menuOpen.addEventListener('click', () => {
  sideBar.style.top = '0';
});

menuClose.addEventListener('click', () => {
  sideBar.style.top = '-60vh';
});

let activeItem = sideBarItems[0];

sideBarItems.forEach(element => {
    element.addEventListener('click', () => {
      if (activeItem) {
        activeItem.removeAttribute('id');
      }

      element.setAttribute('id', 'active');
      activeItem = element;
    });
});