nameForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = nameInput.value;
    welcomeMessage.textContent = `Welcome to iACADEMY ${userName}!`;
    personalizedMessage.textContent = `Hi ${userName}! Welcome to your game-changing journey at iACADEMY.`;
    welcomeSection.style.display = 'none';
    contentSection.style.display = 'block';
  });