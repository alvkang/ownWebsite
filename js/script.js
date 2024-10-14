// Toggle Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('toggle');
});

// Password Protection for Protected Page
// Check if the current page is 'protected.html'
if (window.location.pathname.endsWith('resources.html')) {
    const submitButton = document.getElementById('submit-password');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const resourcesContent = document.getElementById('resources-content');
    const passwordForm = document.getElementById('password-form');

    // Define your desired password here
    const correctPassword = 'iguessyouknowhowtocrackjavascript.-.'; 

    submitButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;

        if (enteredPassword === correctPassword) {
            // Hide the password form and show protected content
            passwordForm.style.display = 'none';
            resourcesContent.style.display = 'block';
        } else {
            // Display error message
            errorMessage.textContent = 'Incorrect password. Please try again.';
            passwordInput.value = '';
        }
    });

    // Optional: Allow pressing 'Enter' to submit the password
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submitButton.click();
        }
    });
}
