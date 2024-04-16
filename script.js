// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form and success message elements
    const contactForm = document.getElementById('contactForm'); // Get the contact form element
    const successMessage = document.getElementById('successMessage'); // Get the success message element

    // Check if the contact form element exists
    if (contactForm) {
        // Add event listener for form submission
        contactForm.addEventListener('submit', function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Display the success message
            successMessage.style.display = 'block';
        });
    }
});