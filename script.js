const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

nameInput.addEventListener('input', validateName);
nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('input', validateEmail);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('input', validatePassword);
passwordInput.addEventListener('blur', validatePassword);

function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name cannot be empty';
    } else {
        nameError.textContent = '';
    }
}

function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email';
    } else {
        emailError.textContent = '';
    }
}

function validatePassword() {
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
    } else {
        passwordError.textContent = '';
    }
}
