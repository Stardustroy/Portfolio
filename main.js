/******** active link **********/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}



/********* scroll reveal *********/

ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.leftsection1', { origin: 'top' });
ScrollReveal().reveal('.rightsection1, .p-box, .fourthsection form, .rightsection2 h1', { origin: 'buttom' });
ScrollReveal().reveal('.card', { origin: 'left' });
ScrollReveal().reveal('.rightsection2 p', { origin: 'right' });