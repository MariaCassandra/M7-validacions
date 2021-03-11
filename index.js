//Busqueda de los tratamientos

function submitSearchForm() {
    let wordNotValid = 0;
    if ((searchInput.value).length === 0) {
        noWord.classList.remove('invalid-feedback');
        wordNotValid++;
    } else if ((searchInput.value).length < 3) {
        lessThree.classList.remove('invalid-feedback');
        wordNotValid++;
    };
    searchInput.value = '';
    return wordNotValid === 0 ? true : false;
};

searchForm.addEventListener('click', event => {
    if (!lessThree.classList.contains('invalid-feedback')) {
        lessThree.classList.add('invalid-feedback');
    };
    if (!noWord.classList.contains('invalid-feedback')) {
        noWord.classList.add('invalid-feedback');
    };
});

//Login de los usuarios

function validateEmail(email) {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email) ? true : false;
};

function validatePass(pass) {
    return pass.length < 1 ? false : true;
};

function submitLogin() {
    let fielNotValid = 0;

    if (!validatePass(passInput.value) || !validateEmail(emailInput.value)) {
        fielNotValid++;
    }
    if (fielNotValid === 0) {
        return true;
    } else {
        return false;
    }
};

emailInput.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
    } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    };
});

passInput.addEventListener('blur', () => {
    if (!validatePass(passInput.value)) {
        passInput.classList.add('is-invalid');
    } else {
        passInput.classList.remove('is-invalid');
        passInput.classList.add('is-valid');
    };
});

loginBtn.addEventListener('click', () => {
    if (!validatePass(passInput.value)) {
        passInput.classList.add('is-invalid');
    };
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
    };
});

//Registro de los nuevos clientes

function validate(event)
{
    event.preventDefault()

    var name = document.getElementById('inputName')
    var surname = document.getElementById('inputSurnames')
    var email = document.getElementById('inputEmail')
    var pass1 = document.getElementById('inputPassword')
    var pass2 = document.getElementById('inputPassword2')

    if (!checkRequired(name.value)) {
        name.classList.add('is-invalid')
      
    } else {
        name.classList.remove('is-invalid')
        name.classList.add('is-valid')
    }
    if (!checkRequired(surname.value)) {
        surname.classList.add('is-invalid')
      
    } else {
        surname.classList.remove('is-invalid')
        surname.classList.add('is-valid')
    }
    if (!checkRequired(email.value)) {
        email.classList.add('is-invalid')
      
    } else {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }
    if (!checkEmailFormat(email.value)) {
        email.classList.add('is-invalid')
      
    } else {
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }
    if (!checkRequired(pass1.value)) {
        pass1.classList.add('is-invalid')
      
    } else {
        pass1.classList.remove('is-invalid')
        pass1.classList.add('is-valid')
    }
    if (!checkRequired(pass2.value)) {
        pass2.classList.add('is-invalid')
      
    } else {
        pass2.classList.remove('is-invalid')
        pass2.classList.add('is-valid')
    }
    if (!checkPasswordPolicy(pass1.value)) {
        pass1.classList.add('is-invalid')
      
    } else {
        pass1.classList.remove('is-invalid')
        pass1.classList.add('is-valid')
    }
    if (!checkPasswordPolicy(pass2.value)) {
        pass2.classList.add('is-invalid')
      
    } else {
        pass2.classList.remove('is-invalid')
        pass2.classList.add('is-valid')
    }
    if (!checkMatchPassword(pass1.value, pass2.value)) {
        pass1.classList.add('is-invalid')
        pass2.classList.add('is-invalid')
    }
}

function checkRequired(value){
    if( 
        value==null || 
        value==undefined ||
        value.trim()==""
    ){
        return false
    }

    return true
}

function checkEmailFormat(value){
    if(
        value.match(/\w{1,}@\w{1,}\.\w{1,}/ig) == null
    ) {
        return false
    }

    return true
}

function checkPasswordPolicy(value){
    if(
        value == null ||
        value.length < 8 ||
        value.match(/[0-9]{1,}/g) == null ||
        value.match(/[A-Z]{1,}/g) == null
    ) {
        return false
    }

    return true
}

function checkMatchPassword(value1,value2){
    if(
        value1==value2
    ){
        return true
    }else{
        return false
    }
        
}
