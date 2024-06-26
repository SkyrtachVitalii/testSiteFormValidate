function validateForm() {
    let firstName = document.forms["contactForm"]["first_name"].value;
    let lastName = document.forms["contactForm"]["last_name"].value;
    let emailAddress = document.forms["contactForm"]["email_address"].value;
    let contactNumber = document.forms["contactForm"]["contact_number"].value;
    let contactTextArea = document.forms["contactForm"]["contactTextArea"].value;


    if (firstName.length > 20) {
        alert("Ви ввели своє ім'я довжино більше ніж 20 символів")
    }
    if (lastName.length > 20) {
        alert("Ви ввели своє ім'я довжино більше ніж 20 символів")
    }

    validateEmail(emailAddress);
    validateFullName(firstName, lastName);
    console.group("Дані з форми:");
    console.log(firstName, lastName);
    console.log(emailAddress);
    console.log(contactNumber);
    console.log(contactNumber);
    console.groupEnd();

    sendData(firstName, lastName,  contactTextArea, contactNumber, emailAddress)
}

function validateEmail(email) {
    const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailMask.test(email)) {
        alert('Ваш email не коректний, перевірте будь-ласка наявність таких символів як".", "@" або наявність пробілів')
    }
    return emailMask.test(email);
}

function validateFullName(firstName, lastName) {

    if (!(/^[а-яА-Я]+$/i.test(firstName))) {
        alert("Не валідні дані")
    }
    if (!(/^[а-яА-Я]+$/i.test(lastName))) {
        alert("Не валідні дані")
    }
}

let tel = document.querySelector('#contact_number');

tel.addEventListener('focus', _ => {
    if (!/^\+\d*$/.test(tel.value))
        tel.value = '+380';
});

tel.addEventListener('keypress', e => {
    if (!/\d/.test(e.key))
        e.preventDefault();
});

let textArea = document.querySelector('#contactTextArea');
textArea.addEventListener('focus', _ => {
    console.log(textArea.value)
    if (textArea.value.length > 50) {

    }
})

function validateNumber(phone) {
    if (phone.startsWith('+38') && !phone.startsWith('+380')) {
        $(this).val(phone.replace('+38', '+380'));
    }
}

$(document).ready(function () {
    let ukraineMobileRegex = /^\+380-(39|50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)-\d{2}-\d{2}-\d{3}$/;

    $('#contact_number').mask('+380-99-99-99-999', { autoclear: false }, { placeholder: '+380-ХХ-ХХ-ХХ-ХХХ' });

    $('#contact_number').on('input', function () {
        let value = $(this).val();

        validateNumber(value)

        if (ukraineMobileRegex.test(value)) {
            console.log('Номер введено правильно.');
        } else {
            if (value.length == 17 & !ukraineMobileRegex.test(value)) {
                console.log('Номер не відповідає формату мобільного оператора України.');
                alert("Номер не відповідає формату мобільного оператора України.")
            }
        }
    });

    $('#contact_number').on('keydown', function (e) {
        var cursorPosition = this.selectionStart;
        var phone = $(this).val();

        if (cursorPosition < 4 && (e.key === 'Backspace' || e.key === 'Delete')) {
            e.preventDefault();
        }

        // Запобігти видаленню префіксу, якщо частково видалено
        if (phone.length < 4) {
            $(this).val('+380');
        }
    });

    $('#contactForm').on('submit', function (event) {
        var phone = $('#phone').val();
        var phonePattern = /^\+380-\d{2}-\d{2}-\d{2}-\d{3}$/;

        // Перевірка маски
        if (!phonePattern.test(phone)) {
            alert('Будь ласка, введіть номер телефону у форматі +380-XX-XX-ХX-XXX.');
            event.preventDefault();
        }
    });

    $('#contactTextArea').on('input', function () {
        let charCount = $(this).val().length;
        if (charCount > 50) alert("У вас занадто багато символів, обмеження - до 50!!!!")
    });

    $('#first_name').on('input', function () {
        let charCount = $(this).val().length;
        if (charCount > 20) alert("У вас занадто багато символів, обмеження - до 20!!!!")
    });
    $('#last_name').on('input', function () {
        let charCount = $(this).val().length;
        if (charCount > 20) alert("У вас занадто багато символів, обмеження - до 20!!!!")
    });

});


function sendData(firstName, lastName,  contactTextArea, contactNumber, emailAddress) {
    $.ajax({
        url: "https://salesme.salesdrive.me/handler/",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            "form": "UJ0tY7eMrhkEjVUkfZiNMq6AOnW5HZLgWGEZr9ekcE7shKwQAyu",
            "getResultData": "",
            "products": [
                {
                    "id": 1,
                    "name": `${firstName + " " + lastName}`,
                    "costPerItem": 0,
                    "amount": 0,
                    "description": textArea,
                    "discount": 0,
                    "sku": 459798465
                }
            ],
            "comment": contactTextArea,
            "phone": contactNumber,
            "email": emailAddress
        }),
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.error(error);
        }
    });
}


