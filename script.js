const navbar = document.querySelector(".navbar");

const navbarOffsetTop = navbar.offsetTop;

console.log(navbarOffsetTop)

window.addEventListener('scroll', () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});