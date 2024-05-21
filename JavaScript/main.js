document.addEventListener('DOMContentLoaded', function() {
    const elementUserName = document.getElementById('elementUserName');
    const logoImg = document.querySelector('.logo-img');
    const modeSwitch = document.getElementById('modeSwitch');

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
        elementUserName.innerHTML = `Hello ${userName}`;
    }

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
