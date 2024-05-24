document.addEventListener('DOMContentLoaded', function() {
    const elementUserName = document.getElementById('elementUserName');
    const logoImg = document.querySelector('.logo-img');
    const modeSwitch = document.getElementById('modeSwitch');
    const displayUserName = document.getElementById('displayUserName')

    if (!elementUserName || !logoImg || !modeSwitch) {
        console.error('One or more elements not found:', {
            elementUserName,
            logoImg,
            modeSwitch
        });
        return;
    }

    const userName = localStorage.getItem('userName');

    if (userName) {
        elementUserName.innerHTML = `Hello Game Changer ${userName}!`;
        displayUserName.textContent = userName;
    }
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slider = document.querySelector('.events-slider');

    next.addEventListener('click', function(){
        let slides = document.querySelectorAll('.events-slides');
        slider.appendChild(slides[0]);
    })

    prev.addEventListener('click', function(){
        let slides = document.querySelectorAll('.events-slides');
        slider.prepend(slides[slides.length -1]);
    })



    // Nav bar scroll behavior
    const navLinkEls = document.querySelectorAll('.nav-link');
    const sectionEls = document.querySelectorAll('.section');

    let currentSection = 'home';
    window.addEventListener('scroll', () => {
        sectionEls.forEach(sectionEl => {
            if (window.scrollY >= (sectionEl.offsetTop - 350)) {
                currentSection = sectionEl.id;
            }
        });

        navLinkEls.forEach(navLinkEl => {
            if (navLinkEl.href.includes(currentSection)) {
                document.querySelector('.active').classList.remove('active');
                navLinkEl.classList.add('active');
            }
        });
    });

    // Light Mode and Dark Mode
    modeSwitch.addEventListener('change', function() {
        console.log('Mode switch changed');
        if (modeSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            logoImg.src = './IMG/nav-logo-white.png'; // Path to the dark mode logo
            console.log('Dark mode enabled, logo changed to white');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            logoImg.src = './IMG/nav-logo-blue.png'; // Path to the light mode logo
            console.log('Light mode enabled, logo changed to blue');
        }
    });
});


let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 750;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}

// Navigation Sidebar Function

function showSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')
    sidebar.style.display = 'none'
}