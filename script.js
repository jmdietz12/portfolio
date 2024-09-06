// JavaScript to handle arrow key navigation
let currentIndex = 0;
const sections = document.querySelectorAll('.section');

// Function to activate the next section
function activateSection(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Event listener for arrow key presses
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        // Navigate down
        if (currentIndex < sections.length - 1) {
            currentIndex++;
            activateSection(currentIndex);
        }
    } else if (event.key === 'ArrowUp') {
        // Navigate up
        if (currentIndex > 0) {
            currentIndex--;
            activateSection(currentIndex);
        }
    }
});

// Initialize the first section as active
activateSection(currentIndex);

// Event listener for button click
document.getElementById('start').addEventListener('click', () => {
    // Trigger the down arrow action or your specific navigation logic
    navigateDown();
});

// Function to handle navigating down
function navigateDown() {
    // Example logic for moving to the next section
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        activateSection(currentIndex);
    }
}
