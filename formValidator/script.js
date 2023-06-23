const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}

//success message
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// requirement check 
function requriedFieldCheck(inputArr) {
    inputArr.forEach(function (item) {
        if (item.value.trim() === '') {
            showError(item, `${returnTitle(item)} is required`)
        }
        else {
            showSuccess(item);
        }
    });
}

//length check function
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${returnTitle(input)} must have atleast ${min + 1} characters`)
    }
    else if (input.value.length >= max) {
        showError(input, `${returnTitle(input)} must have max ${max} characters`)
    }
}

// coverting string to title
function returnTitle(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//password matching checker
function passwordChecker(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password is not matching');
    }
    else {
        showSuccess(input2);
    }
}

function validateEmail(input) {
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(String(input.value).toLowerCase())
}

// email validatior

function isEmailValid(email) {
    if (!validateEmail(email)) {
        showError(email, 'Email is not valid');
    }
    else {
        showSuccess(email);
    }
}

//event listener 
form.addEventListener('submit', function (e) {
    e.preventDefault();


    requriedFieldCheck([username, email, password, password2]);
    checkLength(username, 3, 15);
    isEmailValid(email);
    checkLength(password, 6, 20);
    passwordChecker(password, password2);

});


