// script.js

document.querySelector('.hexagon-container').addEventListener('mousemove', function(e) {
    const hexagon = document.querySelector('.hexagon');
    const x = (e.clientX - window.innerWidth / 2) / window.innerWidth * 2;
    const y = (e.clientY - window.innerHeight / 2) / window.innerHeight * 2;
  
    hexagon.style.transform = `rotateX(${y * 15}deg) rotateY(${x * 15}deg)`;
  });
  
  document.querySelector('.hexagon-container').addEventListener('mouseleave', function() {
    const hexagon = document.querySelector('.hexagon');
    hexagon.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
  