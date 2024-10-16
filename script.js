document.getElementById("openButton").addEventListener("click", function() {
  // Target the second and third quarters for animation
  const secondQuarter = document.querySelector('.second');
  const thirdQuarter = document.querySelector('.third');
  const layerTop = document.querySelector('.layer-top');
  const layerBottom = document.querySelector('.layer-bottom');

  // Apply animations to the second and third quarters
  secondQuarter.style.animation = 'foldOutLeft 1s forwards';
  thirdQuarter.style.animation = 'foldOutRight 1s forwards';

  // Once the animation completes, hide the top layer and reveal the bottom layer
  setTimeout(() => {
    layerTop.style.opacity = '0'; // Fade out the top layer
    setTimeout(() => {
      layerTop.classList.add('hidden'); // Hide it completely after fade out
      layerBottom.style.opacity = '1'; // Reveal the bottom layer
    }, 300);
  }, 1000); // After the animation (1 second)
});
