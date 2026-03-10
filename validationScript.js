// JavaScript code for form validation

const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevents page reload

    const value = inputField.value;

    const alphanumericPattern = /^[a-zA-Z0-9]+$/;

    if (alphanumericPattern.test(value)) {
        message.style.color = 'green';
        message.textContent = 'Input is valid. Form submitted!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid input. Please enter only alphanumeric characters';
    }
});