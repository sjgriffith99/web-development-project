// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the contact form, success message, and form elements
    const contactForm = document.getElementById('contactForm'); // Get the contact form element
    const successMessage = document.getElementById('successMessage'); // Get the success message element
    const nameInput = document.getElementById('name'); // Get the name input element
    const emailInput = document.getElementById('email'); // Get the email input element
    const messageInput = document.getElementById('message'); // Get the message input element

    // Check if the contact form element exists
    if (contactForm) {
        // Add event listener for form submission
        contactForm.addEventListener('submit', function (event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Validate form fields
            if (validateForm()) {
                // Display the success message
                successMessage.style.display = 'block';
                // Reset form fields
                contactForm.reset();
            }
        });
    }

    // Function to validate form fields
    function validateForm() {
        let isValid = true;

        // Validate name field
        if (nameInput.value.trim() === '') {
            isValid = false;
            alert('Please enter your name.');
            // Optionally, you can also add visual feedback for the user, such as adding a red border to the input field
            // nameInput.style.border = '1px solid red';
        }

        // Validate email field
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for basic email validation
        if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            alert('Please enter a valid email address.');
            // Optionally, you can also add visual feedback for the user, such as adding a red border to the input field
            // emailInput.style.border = '1px solid red';
        }

        // Validate message field
        if (messageInput.value.trim() === '') {
            isValid = false;
            alert('Please enter a message.');
            // Optionally, you can also add visual feedback for the user, such as adding a red border to the input field
            // messageInput.style.border = '1px solid red';
        }

        return isValid;
    }
});