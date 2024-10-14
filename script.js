// Get references to the elements
const leftHalf = document.getElementById('leftHalf');
const rightHalf = document.getElementById('rightHalf');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

// Event listener for left half button
leftButton.addEventListener('click', () => {
    // Toggle the 'open' class on the left half
    leftHalf.classList.toggle('open');

    // Change button text based on state
    if (leftHalf.classList.contains('open')) {
        leftButton.textContent = 'Close Left';
    } else {
        leftButton.textContent = 'Open Left';
    }
});

// Event listener for right half button
rightButton.addEventListener('click', () => {
    // Toggle the 'open' class on the right half
    rightHalf.classList.toggle('open');

    // Change button text based on state
    if (rightHalf.classList.contains('open')) {
        rightButton.textContent = 'Close Right';
    } else {
        rightButton.textContent = 'Open Right';
    }
});
