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

    // sendData(firstName, lastName, contactTextArea, contactNumber, emailAddress)
    sendData();
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

const jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/posts";


function sendData(firstName, lastName, contactTextArea, contactNumber, emailAddress) {
    $.ajax({
        // url: "../php/myCustomServer.php",
        // url: "https://salesme.salesdrive.me/handler/",
        url: jsonPlaceHolderUrl,
        type: "POST",
        contentType: "application/json",
        "Access-Control-Allow-Origin": "http://salesme.42web.io",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
        "Access-Control-Allow-Headers": "Content-Type",
        data: JSON.stringify({
            "form": "UJ0tY7eMrhkEjVUkfZiNMq6AOnW5HZLgWGEZr9ekcE7shKwQAyu",
            "getResultData": "1",
            "products": [
                {
                "id": "34634636",
                "name": "Тепла підлога",
                "costPerItem": "500,00",
                "amount": "1",
                "description": "у цу  аццу цуцуа цуа цуа цу ццуцуцу цу ацу ц",
                "discount": "5%",
                "sku": "24235325"
                }
            ],
            "comment": "sdsdfsd fef esdf dsf sdfs sd",
            "externalId": "34634636",
            "fName": "Аіваіва",
            "lName": "Іцуецн3434",
            "mName": "Рвварвар",
            "phone": "0995315874",
            "email": "qwrty@gmail.com",
            "con_comment": "",
            "shipping_method": "Самовивіз",
            "payment_method": "Післяплата",
            "shipping_address": "",
            "novaposhta": {
                "ServiceType": "",
                "payer": "",
                "area": "",
                "region": "",
                "city": "",
                "cityNameFormat": "",
                "WarehouseNumber": "",
                "Street": "",
                "BuildingNumber": "",
                "Flat": ""
            },
            "ukrposhta": {
                "ServiceType": "",
                "payer": "",
                "type": "",
                "city": "",
                "WarehouseNumber": "",
                "Street": "",
                "BuildingNumber": "",
                "Flat": ""
            },
            "sajt": "http://salesme.42web.io/pages/contact.html",
            "con_telegram": "",
            "organizationId": "",
            "shipping_costs": "",
            "con_instagramNick": "",
            "meest": {
                "ServiceType": "",
                "payer": "",
                "area": "",
                "city": "",
                "WarehouseNumber": ""
            },
            "stockId": "",
            "prodex24source_full": "",
            "prodex24source": "",
            "prodex24medium": "",
            "prodex24campaign": "",
            "prodex24content": "",
            "prodex24term": "",
            "prodex24page": ""
        }),
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.error(error);
        }
    });
}

// function sendData(firstName, lastName, contactTextArea, contactNumber, emailAddress) {
//     let fulName = `${firstName + " " + lastName}`;
//     $.ajax({
//         url: "https://salesme.salesdrive.me/handler/",
//         type: "POST",
//         form: "UJ0tY7eMrhkEjVUkfZiNMq6AOnW5HZLgWGEZr9ekcE7shKwQAyu",
//         contentType: "application/json",
//         getResultData: "",
//         xhrFields: {
//             withCredentials: true
//         },
//         data: {
//             name: fulName,
//             contactTextArea: contactTextArea,
//             contactNumber: contactNumber,
//             emailAddress: emailAddress
//         },
//         "Access-Control-Allow-Origin": "*",
//         "crossDomain": true,
//         "async": true,

//         success: function (response) {
//             console.log(response);
//         },
//         error: function (error) {
//             console.error(error);
//         }

//     }, function (response) {
//         response => response.json();
//         console.log(response);
//     }
//     );

// console.group("Дані з форми:");
// console.log(firstName, lastName);
// console.log(emailAddress);
// console.log(contactNumber);
// console.log(contactNumber);
// console.groupEnd();


// }

// jQuery.postCORS = function (url, data, func) {
//     if (func == undefined) func = function () { };
//     return $.ajax(
//         {
//             form: "UJ0tY7eMrhkEjVUkfZiNMq6AOnW5HZLgWGEZr9ekcE7shKwQAyu",
//             type: 'POST',
//             url: url,
//             data: data,
//             dataType: 'json',
//             // contentType: 'application/x-www-form-urlencoded',
//             contentType: "application/json",
//             xhrFields: { withCredentials: true },
//             success: function (res) { func(res) },
//             error: function () {
//                 func({})
//             }
//         }
//     );
// }



// function sendData() {
//     const url = 'https://salesme.salesdrive.me/handler/';
//     const proxyUrl = 'https://api.allorigins.win/get?url=';
//     const jsonPlaceHolderUrl = "https://jsonplaceholder.typicode.com/posts";
//     $.postCORS(url, { x: 1 }).done(function (obj) {
//         if (obj.ok) {
//             console.log("contactNumber");
//         }
//     }).fail(function () {
//         alert("Error!");
//     });
// }



// function sendData() {
//     let form = $('#contactForm');

//     form.on('submit', function (evt){
//         evt.preventDefault();
    
//         $.ajax({
//             type: 'POST',
//             url: 'https://jsonplaceholder.typicode.com/posts',
//             data: $(this).serialize(),
//         }).done (function (res) { 
//             console.log(res);
//          })
//     })
// }


