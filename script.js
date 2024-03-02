// Element Select
const menuIconEl = document.querySelector('.menu-icon');
const navLinksEl = document.querySelector('.navigation');
const navLinksCloseBtn = document.querySelector('.navigation-close-btn');

// Event Listeners
if (window.innerWidth <= 1000) {
    menuIconEl.addEventListener('click', () => {
        navLinksEl.classList.toggle('show');
    })

    navLinksCloseBtn.addEventListener('click', () => {
        navLinksEl.classList.remove('show');
    })
} else {
    const pathName = window.location.pathname.slice(1);
    document.querySelector(`.nav-link a[href='${pathName}']`).style.color = '#eeeeee';
}

