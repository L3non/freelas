    /* == == Preloader == == */

const preloader = document.querySelector('section#preloader');

window.addEventListener('load', () => {
    preloader.classList.add('remove');
});

    /* == == Add event on multiple elements */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

    /* == == Navbar toggler == == */

const navbar = document.querySelector('nav#navbar');
const navTogglers = document.getElementsByClassName('nav-toggler');
const overlay = document.querySelector('div.overlay');

const toggleNav = function () {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('nav-active');
}

addEventOnElements(navTogglers, 'click', toggleNav)

    /* == == Header == == */

const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList[this.window.scrollY > 100 ? 'add' : 'remove']('active');
})

    /* == == Social media menu == == */

const trigger = document.querySelector('menu > .trigger');
trigger.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle('open');
})