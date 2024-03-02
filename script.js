// Element Select
const menuIconEl = document.querySelector('.menu-icon');
const navLinksEl = document.querySelector('.navigation');
const navLinksCloseBtn = document.querySelector('.navigation-close-btn');

// Event Listeners

let pathName = window.location.pathname.slice(1);
if (pathName === '') pathName = 'index.html';
document.querySelector(`.nav-link a[href='${pathName}']`).style.color = 'springgreen';

