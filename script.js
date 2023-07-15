//Navbar Sticky Effect:
const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

//Navbar Highlight Effect:
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');

//Progress Bars Effect:
const progress = document.querySelector('.progress-bars-wrapper');
const progressPercent = document.querySelectorAll('.progress-percent');
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];



window.addEventListener('scroll', () => {
    mainFn();
})

//Preventing bugs
const mainFn = () => {

    //Navbar Sticky Effect:
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }

    //Navbar Highlight Effect:
    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {

            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change');
            })

            navbarLinks[i].classList.add('change');
        }
    })

    //Progress Bars Effect:
    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        progressPercent.forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;

            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i];
        })
    }

}

mainFn();

window.addEventListener('resize', () => {
    window.location.reload();
});

