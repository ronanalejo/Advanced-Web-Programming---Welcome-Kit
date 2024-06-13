document.addEventListener('DOMContentLoaded', function() {
    const elementUserName = document.getElementById('elementUserName');
    const logoImg = document.querySelector('.logo-img');
    const modeSwitch = document.getElementById('modeSwitch');
    const displayUserName = document.getElementById('displayUserName');
    const nbpen = document.getElementById('nbpen');

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

    var o = $(".card");
$(".top").on("mousemove", function (t) {
    var cardOffset = o.offset();
    var cardCenterX = cardOffset.left + o.outerWidth() / 2;
    var cardCenterY = cardOffset.top + o.outerHeight() / 2;
    var distanceX = Math.abs(t.pageX - cardCenterX);
    var distanceY = Math.abs(t.pageY - cardCenterY);
    var maxDistance = 500;

    if (distanceX < maxDistance && distanceY < maxDistance) {

        var e = -(cardCenterX - t.pageX) / 20;
        var n = (cardCenterY - t.pageY) / 20;

        o.css({
            "transform": "rotateY(" + e + "deg) rotateX(" + n + "deg)",
            "-webkit-transform": "rotateY(" + e + "deg) rotateX(" + n + "deg)",
            "-moz-transform": "rotateY(" + e + "deg) rotateX(" + n + "deg)"
        });
    } else {
        o.css({
            "transform": "rotateY(0deg) rotateX(0deg)",
            "-webkit-transform": "rotateY(0deg) rotateX(0deg)",
            "-moz-transform": "rotateY(0deg) rotateX(0deg)"
        });
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
        console.log('Mode switch changed');
        if (modeSwitch.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            logoImg.src = './IMG/nav-logo-white.png'; // Path to the dark mode logo
            console.log('Dark mode enabled, logo changed to white');
            nbpen.style.backgroundImage = 'url(./IMG/nbpen-black.png)'; // Path to the dark mode logo
            console.log('Dark mode enabled, nbpen changed to black');
            displayUserName.style.color = 'white';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            logoImg.src = './IMG/nav-logo-blue.png'; // Path to the light mode logo
            console.log('Light mode enabled, logo changed to blue');
            nbpen.style.backgroundImage = 'url(./IMG/nbpen-white.png)'; // Path to the light mode logo
            console.log('Light mode enabled, nbpen changed to white');
            displayUserName.style.color = 'black';
        }
    });
});


let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let windowHeight = window.innerHeight;

        // Adjust offset based on section height
        let topOffset = sec.offsetTop - (height < windowHeight * 0.5 ? 690 : 750);
        let bottomOffset = sec.offsetTop + height - (height < windowHeight * 0.5 ? 50 : 550);

        if (top >= topOffset && top < bottomOffset) {
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
};



// Navigation Sidebar Function

function showSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.nav-sidebar')
    sidebar.style.display = 'none'
}

// Organization Slider Function

// jQuery(document).ready(function($){
//     $('.slider-img') on('click', function() {
//         $('.slider-img').removeClass('active');
//         $(this).addClass('active');
//     })
// })
document.addEventListener('DOMContentLoaded', function() {
    // Campus Section
    const readMoreBtnCampus = document.getElementById('makati-campus-read-more-p');
    const fullDescDivCampus = document.getElementById('makati-campus-full-desc-div');
    const closeBtnCampus = document.querySelector('#makati-campus-full-desc-div .close-btn');
    const hexagonCampus = document.getElementById('hexagon');
    const makatiCampusDiv = document.getElementById('makati-campus-div');

    if (!readMoreBtnCampus || !fullDescDivCampus || !closeBtnCampus || !hexagonCampus || !makatiCampusDiv) {
        console.error('One or more elements not found for campus section:', {
            readMoreBtnCampus,
            fullDescDivCampus,
            closeBtnCampus,
            hexagonCampus,
            makatiCampusDiv
        });
    } else {
        readMoreBtnCampus.addEventListener('click', function() {
            console.log('Read more button clicked for campus'); // Debugging log
            makatiCampusDiv.classList.add('hidden');
            hexagonCampus.classList.add('split');
            setTimeout(() => {
                fullDescDivCampus.classList.add('show');
            }, 50); // Delay to ensure the split animation finishes before showing the full description
        });

        closeBtnCampus.addEventListener('click', function() {
            console.log('Close button clicked for campus'); // Debugging log
            fullDescDivCampus.classList.remove('show');
            setTimeout(() => {
                hexagonCampus.classList.remove('split');
                hexagonCampus.classList.add('reassemble');
                setTimeout(() => {
                    hexagonCampus.classList.remove('reassemble');
                    makatiCampusDiv.classList.remove('hidden');
                }, 300); // Time it takes for the reassemble animation
            }, 50); // Delay to ensure the full description hides before reassembling the hexagon
        });
    }

    // About Section
    const readMoreBtnAbout = document.querySelector('#about .read-more-btn');
    const hexagonAbout = document.querySelector('#about .hexagon');

    if (!readMoreBtnAbout || !hexagonAbout) {
        console.error('One or more elements not found for about section:', {
            readMoreBtnAbout,
            hexagonAbout
        });
    } else {
        readMoreBtnAbout.addEventListener('click', function() {
            console.log('Read more button clicked for about'); // Debugging log
            hexagonAbout.classList.add('split');
            setTimeout(() => {
                // Show additional content if necessary
            }, 50); // Delay to ensure the split animation finishes before showing additional content
        });

        // Add a close button functionality if necessary for the about section
    }
});
