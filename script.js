// Elements
const headerMenuBtn = document.querySelector(".header__menu-btn");
const navEl = document.querySelector(".nav");

// Event Listener
headerMenuBtn.addEventListener("click", function () {
  const icon = this.textContent;

  if (icon === '☰') {
    navEl.style.display = 'flex';
    this.textContent = '✖'
  } else if (icon === '✖') {
    navEl.style.display = 'none';
    this.textContent = '☰';
  }

});


