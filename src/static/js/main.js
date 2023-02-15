const menuBtn       = document.getElementById('menu-btn');
const menu          = document.getElementById('main-menu');
const menuLinks     = document.querySelectorAll('.menu-item');
const html          = document.querySelector('html');
const main          = document.getElementById('main');
const formBtn       = document.getElementById('form-submit');
const form          = document.getElementById('estimate-form');
const formContainer = document.getElementById('form-container');
const yearDiv       = document.getElementById('year');
const newYear = new Date().getFullYear().toString();

// Update year to current year in copyright section of footer
yearDiv.innerText = newYear;

// // Open and close menu
menuBtn.addEventListener('click', function () {
    if (menu.classList.contains('open-menu')) {
        // html.classList.remove('height-100');
        menu.classList.remove('open-menu');
        // main.classList.remove('stop-scrolling');
        menuBtn.classList.remove('active-menu');
    } else {
        // html.classList.add('height-100');
        menu.classList.add('open-menu');
        menuBtn.classList.add('active-menu');
        // main.classList.add('stop-scrolling');
    };
});

// Close menu on link click
menuLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.remove('open-menu');
        menuBtn.classList.remove('active-menu');
    });
});

// Hide form on submit and insert thank you note
formBtn.addEventListener('click', function () {
    formContainer.classList.add('hide-form');
});

// Scroll Reveal
ScrollReveal().reveal('#about-content',
    { 
        duration: 2000,
        origin: 'left',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#about-img',
    { 
        duration: 2000,
        origin: 'right',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#service1',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#service2',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#service3',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        // delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#service4',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#service5',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        delay: 400,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#why-img',
    { 
        duration: 2000,
        origin: 'left',
        distance: '100px',
        // delay: 400,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#reason1',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        // delay: 400,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#reason2',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        delay: 100,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#reason3',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        delay: 200,
        mobile: true,
        reset: true
    });
ScrollReveal().reveal('#reason4',
    { 
        duration: 2000,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
        mobile: true,
        reset: true
    });