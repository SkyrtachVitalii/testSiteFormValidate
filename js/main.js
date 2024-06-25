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
    
    validateEmail(emailAddress)
    

    // console.log(firstName, lastName, emailAddress, contactNumber)
}

function validateEmail(email){
    const emailMask = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailMask.test(email)){
        alert("Ваш email не коректний, перевырте будь-ласка наявність таких символів як")
    }
    return emailMask.test(email);
}