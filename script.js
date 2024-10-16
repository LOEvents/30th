document.getElementById('foldButton').addEventListener('click', function() {
    // Toggle a class on the top layer when the button is clicked
    const topLayer = document.querySelector('.top-layer');
    
    // Add the folded class to trigger the animation
    topLayer.classList.toggle('folded');
    
    // Wait for the animation to complete before hiding the top layer
    setTimeout(() => {
        if (topLayer.classList.contains('folded')) {
            topLayer.classList.add('hidden'); // Add the hidden class to remove it
        }
    }, 1000); // Match this time with the transition duration in CSS
});
