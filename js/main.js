function validateForm(){
    let firstName = document.forms["contactForm"]["first_name"].value;
    let lastName = document.forms["contactForm"]["last_name"].value;
    let emailAddress = document.forms["contactForm"]["email_address"].value;
    let contactNumber = document.forms["contactForm"]["contact_number"].value;

    if (firstName.length > 20){
        alert("Ви ввели своє ім'я довжино більше ніж 20 символів")
    }
    if (lastName.length > 20){
        alert("Ви ввели своє ім'я довжино більше ніж 20 символів")
    }
    
    validateEmail(emailAddress);
}

function validateEmail(email){
    const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailMask.test(email)){
        alert('Ваш email не коректний, перевірте будь-ласка наявність таких символів як".", "@" або наявність пробілів')
    }
    return emailMask.test(email);
}

let tel = document.querySelector('#contact_number');

tel.addEventListener('focus', _ => {
  if(!/^\+\d*$/.test(tel.value))
    tel.value = '+380';
});

tel.addEventListener('keypress', e => {
  if(!/\d/.test(e.key))
    e.preventDefault();
});

$(document).ready(function() {
    $('#contact_number').mask('+380-00-00-00-000', {autoclear: false}, {placeholder: '+380-ХХ-ХХ-ХХ-ХХХ'});

    $('#contact_number')
    .on('input', function() {
        let value = $(this).val();
        
        let operatorRegex = /^(\+380-6|\+380-9|\+380-5|\+380-7)-\d{2}-\d{2}-\d{3}$/;
        // let operatorRegex = /^(\+380-67|\+380-68|\+380-96|\+380-97|\+380-98|\+380-99|\+380-50|\+380-66|\+380-95|\+380-63|\+380-73|\+380-93)-\d{2}-\d{2}-\d{3}$/;
        console.log(value)
        if (!operatorRegex.test(value)) {
            alert('Номер телефону повинен починатися з відповідного коду мобільного оператора.');
            $(this).val('');
        }



        if (value.charAt(0) !== '+') {
            $(this).val('+380' + value);
        } else if (value.charAt(4) !== '-') {
            $(this).val(value.slice(0, 4) + '-' + value.slice(4));
        }


    })
});
