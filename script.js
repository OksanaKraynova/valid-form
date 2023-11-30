const form = document.querySelector('.form');
const success = document.querySelector('.success');
const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const num = document.getElementById('num');
const checkbox = document.getElementById('checkbox');
let check = false

const mask = new IMask(phone, {
    mask: '+{7}(000)000-00-00'
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error');

    errorDisplay.innerText = message;
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.form-error');

    errorDisplay.innerText = '';
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidNumber = number => {
    const re = /^(0|[1-9]\d*)(\.[0-9]{1,2})?$/ 
    return  re.test(number)
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
const phoneValue =   phone.value.trim();
console.log(phoneValue);
const numValue = num.value.trim();

    if(usernameValue === '') {
        setError(username, 'Введите не менее 5 символов');
        check = false
    } else {
        setSuccess(username);
        check = true
    }

    if(emailValue === '') {
        setError(email, 'Введите email');
        check = false
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Некорректный emeil');
    } else {
        setSuccess(email);
        check = true
    }

    if(numValue === '') {
        setError(num, 'Введите число');
        check = false
    } else if (!isValidNumber(numValue)) {
        setError(num, 'Некорректное число');
    } else {
        setSuccess(num);
        check = true
    }

    if(phoneValue < 16) {
        setError(phone, 'Введите номер телефона');
        check = false
    } else {
        setSuccess(phone);
        check = true
    }
    if(!checkbox.checked ) {
        check = false
    } 
    if(check === true){
    
        form.classList.add('hide')
        success.classList.add('show')
    }
  };

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    
});