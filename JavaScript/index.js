import { storeUserData } from './firebase.js';

document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const yearLevelSelect = document.getElementById('yearLevel');
    const coursesSelect = document.getElementById('courses');
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('errorMessage');

    // Form Submission
    if (nameForm) {
        nameForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            if (!nameInput.value || !yearLevelSelect.value || !coursesSelect.value) {
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
                const userName = nameInput.value;
                const userYearLevel = yearLevelSelect.options[yearLevelSelect.selectedIndex].text;
                const userCourse = coursesSelect.options[coursesSelect.selectedIndex].text;

                try {
                    console.log("Submitting data to Firestore...");
                    await storeUserData(userName, userYearLevel, userCourse);
                    console.log("Data successfully submitted to Firestore.");

                    // Optionally store user data in local storage
                    localStorage.setItem('userName', userName);
                    localStorage.setItem('userYearLevel', userYearLevel);
                    localStorage.setItem('userCourse', userCourse);

                    // Redirect to main.html
                    window.location.href = 'main.html';
                } catch (error) {
                    console.error("Error storing user data: ", error);
                    errorMessage.textContent = 'An error occurred while saving your data. Please try again.';
                    errorMessage.style.display = 'block';
                }
            }
        });
    } else {
        console.error('Name form element not found');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const modeSwitch = document.getElementById('modeSwitch');
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const yearLevelSelect = document.getElementById('yearLevel');
    const coursesSelect = document.getElementById('courses'); 
    const submitButton = document.getElementById('submitButton');
    const errorMessage = document.getElementById('errorMessage');
    const logoImg = document.querySelector('.logo-img');
    const cursor = document.querySelector(".cursor");
    var timeout;

    // Cursor follow and mouse effects
    if (cursor) {
        document.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";

            function mouseStopped() {
                cursor.style.display = "none";
            }
            clearTimeout(timeout);
            timeout = setTimeout(mouseStopped, 1000);
        });

        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
        });
    } else {
        console.error('Cursor element not found');
    }

    // Light Mode and Dark Mode Toggle
    if (modeSwitch) {
        modeSwitch.addEventListener('change', function() {
            if (modeSwitch.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                if (logoImg) {
                    logoImg.src = './IMG/nav-logo-white.png'; // Path to the dark mode logo
                } else {
                    console.error('Logo image element not found');
                }
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                if (logoImg) {
                    logoImg.src = './IMG/nav-logo-blue.png'; // Path to the light mode logo
                } else {
                    console.error('Logo image element not found');
                }
            }
        });
    } else {
        console.error('Mode switch element not found');
    }

    // SHS and College Courses
    const shsCourses = [
        { value: 'shs-abm', text: 'Accountancy, Business and Management' },
        { value: 'shs-ani', text: 'Animation' },
        { value: 'shs-artsDesign', text: 'Arts and Design' },
        { value: 'shs-audoProd', text: 'Audio Production' },
        { value: 'shs-sd', text: 'Software Development' },
        { value: 'shs-fd', text: 'Fashion Design' },
        { value: 'shs-graphIllu', text: 'Graphic Illustration' },
        { value: 'shs-humss', text: 'Humanities and Social Sciences' },
        { value: 'shs-robotics', text: 'Robotics' }
    ];

    const collegeCourses = [
        {
            label: 'School Of Computing (SOC)',
            options: [
                { value: 'SOC-software', text: 'Software Engineering' },
                { value: 'SOC-cloud', text: 'Cloud Engineering' },
                { value: 'SOC-web', text: 'Web Development' },
                { value: 'SOC-game', text: 'Game Development' },
                { value: 'SOC-data', text: 'Data Science' }
            ]
        },
        {
            label: 'School Of Design and Arts (SODA)',
            options: [
                { value: 'SODA-multimedia', text: 'Multimedia Arts' },
                { value: 'SODA-fashion', text: 'Fashion Design' },
                { value: 'SODA-animation', text: 'Animation' },
                { value: 'SODA-music', text: 'Music Production' },
                { value: 'SODA-film', text: 'Film and Visual Effects' }
            ]
        },
        {
            label: 'School of Business and Liberal Arts (SBLA)',
            options: [
                { value: 'SBLA-marketing', text: 'Marketing Management' },
                { value: 'SBLA-e-management', text: 'E-Management' },
                { value: 'SBLA-real-estate', text: 'Real Estate Management' },
                { value: 'SBLA-psychology', text: 'Psychology' },
                { value: 'SBLA-accountancy', text: 'Accountancy' }
            ]
        }
    ];

    // Function to show specific Courses depending on the selected Year Level
    function updateCourses() {
        const yearLevelValue = yearLevelSelect.value; // Use yearLevelSelect
        coursesSelect.innerHTML = '<option value="">Select Course</option>'; // Use coursesSelect

        if (yearLevelValue === 'shs') {
            shsCourses.forEach(course => {
                const option = document.createElement('option');
                option.value = course.value;
                option.textContent = course.text;
                coursesSelect.add(option); // Use coursesSelect
            });
        } else if (yearLevelValue === 'college') {
            collegeCourses.forEach(group => {
                const optgroup = document.createElement('optgroup');
                optgroup.label = group.label;
                group.options.forEach(course => {
                    const option = document.createElement('option');
                    option.value = course.value;
                    option.textContent = course.text;
                    optgroup.appendChild(option);
                });
                coursesSelect.appendChild(optgroup); // Use coursesSelect
            });
        }
        validateForm();
    }

    // Form Validation
    function validateForm() {
        if (nameInput.value && yearLevelSelect.value && coursesSelect.value) { // Use yearLevelSelect and coursesSelect
            submitButton.disabled = false;
            errorMessage.style.display = 'none';
        } else {
            submitButton.disabled = true;
        }
    }

    if (nameInput && yearLevelSelect && coursesSelect && submitButton && errorMessage) { // Use yearLevelSelect and coursesSelect
        nameInput.addEventListener('input', validateForm);
        yearLevelSelect.addEventListener('change', updateCourses); // Use yearLevelSelect
        coursesSelect.addEventListener('change', validateForm); // Use coursesSelect
    } else {
        console.error('Form elements not found');
    }

    // Form Submission
    if (nameForm) {
        nameForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            if (!nameInput.value || !yearLevelSelect.value || !coursesSelect.value) { // Use yearLevelSelect and coursesSelect
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
                const userName = nameInput.value;
                const userYearLevel = yearLevelSelect.options[yearLevelSelect.selectedIndex].text; // Use yearLevelSelect
                const userCourse = coursesSelect.options[coursesSelect.selectedIndex].text; // Use coursesSelect

                try {
                    console.log("Submitting data to Firestore...");
                    await storeUserData(userName, userYearLevel, userCourse);
                    console.log("Data successfully submitted to Firestore.");

                    // Optionally store user data in local storage
                    localStorage.setItem('userName', userName);
                    localStorage.setItem('userYearLevel', userYearLevel);
                    localStorage.setItem('userCourse', userCourse);

                    // Redirect to main.html
                    window.location.href = 'main.html';
                } catch (error) {
                    console.error("Error storing user data: ", error);
                    errorMessage.textContent = 'An error occurred while saving your data. Please try again.';
                    errorMessage.style.display = 'block';
                }
            }
        });
    } else {
        console.error('Name form element not found');
    }
});