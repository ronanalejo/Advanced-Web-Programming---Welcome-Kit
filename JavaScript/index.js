document.addEventListener('DOMContentLoaded', function() {
  const modeSwitch = document.getElementById('modeSwitch');
  const nameForm = document.getElementById('nameForm');
  const nameInput = document.getElementById('nameInput');
  const yearLevel = document.getElementById('yearLevel');
  const courses = document.getElementById('courses');
  const submitButton = document.getElementById('submitButton');
  const errorMessage = document.getElementById('errorMessage');
  const personalizedMessage = document.getElementById('personalizedMessage');
  const welcomeSection = document.getElementById('welcome');
  const contentSection = document.getElementById('content');

  // SHS Couorses (Opt Dropdown Select)
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

  // College Couorses (Opt Dropdown Select)
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

  // Light Mode and Dark Mode
  modeSwitch.addEventListener('change', function() {
      if (modeSwitch.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
      } else {
          document.documentElement.setAttribute('data-theme', 'light');
      }
  });

  // Function to show specific Courses depends on the selected Year Level
  function updateCourses() {
      const yearLevelValue = yearLevel.value;
      courses.innerHTML = '<option value="">Select Course</option>';

      if (yearLevelValue === 'shs') {
          shsCourses.forEach(course => {
              const option = document.createElement('option');
              option.value = course.value;
              option.textContent = course.text;
              courses.add(option);
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
              courses.appendChild(optgroup);
          });
      }
      validateForm();
  }

  // Submit button can't be selected unless all fields (Full Name input, Year Level input, Courses input) are selected
  function validateForm() {
      if (nameInput.value && yearLevel.value && courses.value) {
          submitButton.disabled = false;
          errorMessage.style.display = 'none';
      } else {
          submitButton.disabled = true;
      }
  }

  nameInput.addEventListener('input', validateForm);
  yearLevel.addEventListener('change', updateCourses);
  courses.addEventListener('change', validateForm);
  
  nameForm.addEventListener('submit', function(event) {
    if (!nameInput.value || !yearLevel.value || !courses.value) {
        event.preventDefault();
        errorMessage.style.display = 'block';
    } else {
        event.preventDefault();
        errorMessage.style.display = 'none';
        const userName = nameInput.value;
        const userYearLevel = yearLevel.options[yearLevel.selectedIndex].text;
        const userCourse = courses.options[courses.selectedIndex].text;

        // Store user data in local storage
        localStorage.setItem('userName', userName);
        localStorage.setItem('userYearLevel', userYearLevel);
        localStorage.setItem('userCourse', userCourse);

        // Redirect to main.html
        window.location.href = 'main.html';
    }
});
});