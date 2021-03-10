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