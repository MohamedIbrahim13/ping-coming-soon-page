const registerForm = document.querySelector('form');
const input = document.querySelector('input');
const error = document.querySelector('p.error');


const emailIsValid = email => {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!registerForm.email.value) {
        error.style.display = "block";

        input.style.borderColor = "hsl(354, 100%, 66%)";

    }
    if (!emailIsValid(registerForm.email.value)) {
        error.style.display = "block";
        input.style.borderColor = "hsl(354, 100%, 66%)";
    }

});
