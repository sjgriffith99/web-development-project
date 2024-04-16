document.addEventListener('DOMContentLoaded', function () 
{
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            successMessage.style.display = 'block';
        });
}});