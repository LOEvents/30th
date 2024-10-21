document.getElementById('foldButton').addEventListener('click', function() {
    const topLayer = document.querySelector('.top-layer');
    const foldButton = document.getElementById('foldButton');
    
    // Hide the button when clicked
    foldButton.style.display = 'none';
    
    // Add the folded class to trigger the animation
    topLayer.classList.toggle('folded');
    
    // Wait for the animation to complete before hiding the top layer
    setTimeout(() => {
        if (topLayer.classList.contains('folded')) {
            topLayer.classList.add('hidden'); // Add the hidden class to remove it
        }
    }, 3000); // Match this time with the transition duration in CSS
});
