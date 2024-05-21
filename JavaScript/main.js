document.addEventListener('DOMContentLoaded', function() {
    const elementUserName = document.getElementById('elementUserName');
    const elementYearLevel = document.getElementById('elementYearLevel');
    const elementCourse = document.getElementById('elementCourse');

    const userName = localStorage.getItem('userName');
    const userYearLevel = localStorage.getItem('userYearLevel');
    const userCourse = localStorage.getItem('userCourse');

    if (userName && userYearLevel && userCourse) {
        elementUserName.innerHTML = `Hello ${userName}`;
        elementYearLevel.innerHTML = `${userYearLevel}`;
        elementCourse.innerHTML = `${userCourse}`;
    }
});

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
    if (modeSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});