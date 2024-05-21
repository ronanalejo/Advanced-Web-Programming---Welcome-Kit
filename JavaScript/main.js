<<<<<<< HEAD
nameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = nameInput.value;
    welcomeMessage.textContent = `Welcome to iACADEMY ${userName}!`;
    personalizedMessage.textContent = `Hi ${userName}! Welcome to your game-changing journey at iACADEMY.`;
    welcomeSection.style.display = 'none';
    contentSection.style.display = 'block';
  });
=======
document.addEventListener('DOMContentLoaded', function() {
    const welcomeHeading = document.getElementById('welcomeHeading');
    const userDetails = document.getElementById('userDetails');

    const userName = localStorage.getItem('userName');
    const userYearLevel = localStorage.getItem('userYearLevel');
    const userCourse = localStorage.getItem('userCourse');

    if (userName && userYearLevel && userCourse) {
        welcomeHeading.textContent = `Welcome Game Changer, ${userName}`;
        userDetails.innerHTML = `<br>${userYearLevel}, ${userCourse}`;
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
>>>>>>> bdbce5599d7cc5e63b7b68597db5182c70d27027
