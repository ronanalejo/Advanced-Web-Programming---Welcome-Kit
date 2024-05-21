document.addEventListener('DOMContentLoaded', function() {
    const welcomeHeading = document.getElementById('welcomeHeading');
    const userDetails = document.getElementById('userDetails');

    const userName = localStorage.getItem('userName');
    const userYearLevel = localStorage.getItem('userYearLevel');
    const userCourse = localStorage.getItem('userCourse');

    if (userName && userYearLevel && userCourse) {
        welcomeHeading.textContent = `Welcome Game Changer, ${userName}`;
        userDetails.innerHTML = `${userYearLevel} <br>${userCourse}`;
    }

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
    
});

