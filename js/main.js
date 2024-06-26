function validateForm(){
    let firstName = document.forms["contactForm"]["first_name"].value;
    let lastName = document.forms["contactForm"]["last_name"].value;
    let emailAddress = document.forms["contactForm"]["email_address"].value;
    let contactNumber = document.forms["contactForm"]["contact_number"].value;
    let contactTextArea = document.forms["contactForm"]["contactTextArea"].value;


    if (firstName.length > 20){
        alert("Ви ввели своє ім'я довжино більше ніж 20 символів")
    }
    if (lastName.length > 20){
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
}

function validateEmail(email){
    const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailMask.test(email)){
        alert('Ваш email не коректний, перевірте будь-ласка наявність таких символів як".", "@" або наявність пробілів')
    }
    return emailMask.test(email);
}

function validateFullName(firstName, lastName){

    if (!(/^[а-яА-Я]+$/i.test(firstName))){
        alert("Не валідні дані")
    }
    if (!(/^[а-яА-Я]+$/i.test(lastName))){
        alert("Не валідні дані")
    }
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

let textArea = document.querySelector('#contactTextArea');
textArea.addEventListener('focus', _ => {
    console.log(textArea.value)
    if(textArea.value.length > 50){
        
    }
})



// $(document).ready(function() {
//     let ukraineMobileRegex = /^\+380-(39|50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)-\d{2}-\d{2}-\d{3}$/;

//     $('#contact_number').mask('+380-00-00-00-000', {autoclear: false}, {placeholder: '+380-ХХ-ХХ-ХХ-ХХХ'});

//     $('#contact_number').on('input', function() {
//         let value = $(this).val();
           
//         if (value.charAt(0) !== '+') {
//             $(this).val('+380' + value);
//         } else if (value.charAt(4) !== '-') {
//             $(this).val(value.slice(0, 4) + '-' + value.slice(4));
//         }

//         if (!ukraineMobileRegex.test(value)) {
//             alert('Номер телефону повинен починатися з відповідного коду мобільного оператора.');
//         } 

//     })
// });

// $(document).ready(function() {
//     let firstDigitsRegex = /^\+380-(39|50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)-\d{2}-\d{2}-\d{3}$/;

//     // Встановлюємо маску для поля з номером телефону
//     $('#contact_number').mask('+380-00-00-00-000', {autoclear: false}, {placeholder: '+380-ХХ-ХХ-ХХ-ХХХ'});

//     // Обробник введення для перевірки комбінацій перших ХХ
//     $('#contact_number').on('input', function() {
//         let value = $(this).val();

//         // Перевіряємо, чи введене значення відповідає регулярному виразу для перших ХХ
//         if (firstDigitsRegex.test(value)) {
//             console.log('Перші дві цифри відповідають дозволеним комбінаціям.');
//             // Тут можна виконати додаткові дії, якщо умова виконується
//         } else {
//             console.log('Перші дві цифри не відповідають дозволеним комбінаціям.');
//             // Тут можна виконати додаткові дії, якщо умова не виконується
//         }
//     });
// });

// $(document).ready(function() {
//     let firstDigitsRegex = /^\+380-(39|50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)-\d{2}-\d{2}-\d{3}$/;

//     // Встановлюємо маску для поля з номером телефону
//     $('#contact_number').mask('+380-00-00-00-000', {autoclear: false}, {placeholder: '+380-ХХ-ХХ-ХХ-ХХХ'});

//     // Обробник введення для перевірки комбінацій перших ХХ
//     $('#contact_number').on('input', function() {
//         // Отримуємо справжнє значення поля без дефісів і пробілів
//         let value = $(this).val().replace(/[^0-9]/g, '');

//         // Перевіряємо, чи введене значення відповідає регулярному виразу для перших ХХ
//         if (firstDigitsRegex.test(value)) {
//             console.log('Перші дві цифри відповідають дозволеним комбінаціям.');
//             if (value.charAt(0) !== '+') {
//                 $(this).val('+380' + value);
//             } else if (value.charAt(4) !== '-') {
//                 $(this).val(value.slice(0, 4) + '-' + value.slice(4));
//             }
//         } else {
//             console.log('Перші дві цифри не відповідають дозволеним комбінаціям.');
//             // Тут можна виконати додаткові дії, якщо умова не виконується
//         }
//     });
// });

function validateNumber(phone){
    if (phone.startsWith('+38') && !phone.startsWith('+380')) {
        $(this).val(phone.replace('+38', '+380'));
    }
}

$(document).ready(function() {
    let ukraineMobileRegex = /^\+380-(39|50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)-\d{2}-\d{2}-\d{3}$/;

    $('#contact_number').mask('+380-99-99-99-999', {autoclear: false}, {placeholder: '+380-ХХ-ХХ-ХХ-ХХХ'});

    $('#contact_number').on('input', function() {
        let value = $(this).val();

        validateNumber(value)

        // Перевіряємо, чи введене значення відповідає регулярному виразу для мобільного оператора України
        if (ukraineMobileRegex.test(value)) {
            console.log('Номер введено правильно.');
            // Тут можна виконати додаткові дії, якщо умова виконується
        } else {
            if(value.length == 17 & !ukraineMobileRegex.test(value)){
                console.log('Номер не відповідає формату мобільного оператора України.');
                alert("Номер не відповідає формату мобільного оператора України.")
            }
        }
    });

    $('#contact_number').on('keydown', function(e) {
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

    $('#contactForm').on('submit', function(event) {
        var phone = $('#phone').val();
        var phonePattern = /^\+380-\d{2}-\d{2}-\d{2}-\d{3}$/;

        // Перевірка маски
        if (!phonePattern.test(phone)) {
            alert('Будь ласка, введіть номер телефону у форматі +380-XX-XX-ХX-XXX.');
            event.preventDefault();
        }
    });




    $('#contactTextArea').on('input', function() {
        let charCount = $(this).val().length;
        if (charCount > 50) alert("У вас занадто багато символів, обмеження - до 50!!!!")
    });

    $('#first_name').on('input', function() {
        let charCount = $(this).val().length;
        if (charCount > 20) alert("У вас занадто багато символів, обмеження - до 20!!!!")
    });
    $('#last_name').on('input', function() {
        let charCount = $(this).val().length;
        if (charCount > 20) alert("У вас занадто багато символів, обмеження - до 20!!!!")
    });

});
