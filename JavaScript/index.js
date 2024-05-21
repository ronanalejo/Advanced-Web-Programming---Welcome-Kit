document.addEventListener('DOMContentLoaded', function() {
    const modeSwitch = document.getElementById('modeSwitch');
    const nameForm = document.getElementById('nameForm');
    const nameInput = document.getElementById('nameInput');
    const personalizedMessage = document.getElementById('personalizedMessage');
    const welcomeSection = document.getElementById('welcome');
    const contentSection = document.getElementById('content');

    modeSwitch.addEventListener('change', function() {
      if (modeSwitch.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    });

    nameForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const userName = nameInput.value;
      welcomeMessage.textContent = `Welcome to iACADEMY ${userName}!`;
      personalizedMessage.textContent = `Hi ${userName}! Welcome to your game-changing journey at iACADEMY.`;
      welcomeSection.style.display = 'none';
      contentSection.style.display = 'block';
    });
  });