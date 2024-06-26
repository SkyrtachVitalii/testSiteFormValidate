<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="stylesheet" href="../css/style.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js"></script>
    <script src="js/coockies.js"></script>
</head>

<body>
    <header>
        <div class="wrapper">
            <div class="container">
                <div class="header__container">
                    <div class="logo">
                        Site name
                    </div>

                    <div class="header__menu">
                        <nav class="menu">
                            <ul>
                                <li class="menu__item"><a href="#">Page</a></li>
                                <li class="menu__item"><a href="#">Page</a></li>
                                <li class="menu__item"><a href="#">Page</a></li>
                            </ul>
                        </nav>
                        <a class="sendButton" href="#">
                            Send form
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="wrapper">
            <section class="container containerSpacing text-center">
                <div class="contactBlock">
                    <div class="contactBlock__item">
                        <div>
                            <h1 class="contactBlock__heading">Contact us</h1>
                            <p class="contactBlock__text">Subheading for description or instructions</p>
                            <script id="salesdrive_forms_params_1">
                                var salesdrive_forms_params_1 = {"id": "1", "hash": "RvUC18GiIs9eaSFfJnIKHr9OCZVEMgWX", "modal": "n", "locale": "ua", "defaults": {
                                    "submit": "", "sd-form-title": "", "fName": "", "lName": "", "phone": "", "email": "", "con_comment": ""
                                }};
                            </script>
                            <script forms-id="1" id="salesdriveforms_script"
                            async="async" src="https://static.salesdrive.me/salesdriveforms/assets/js/salesdriveforms.js"></script>
                        </div>



<!--
                        <form name="contactForm" id="contactForm" class="contactForm" action="php/main.php"
                            method="post" draggable="false">
                            onsubmit="return validateForm()" додай це в тег форм коли зробиш запит в php
                            <h1 class="contactBlock__heading">Contact us</h1>
                            <p class="contactBlock__text">Subheading for description or instructions</p>
                            <div class="contactBlock__inputs">
                                <div class="contactBlock__name">
                                    <div class="contactBlock__container">
                                        <label for="first_name" class="label__295px">First name</label>
                                        <input type="text" name="first_name" id="first_name" minlength="3"
                                            maxlength="20" title="Довжина імені від 3 до 20 символів" placeholder="Jane"
                                            required>
                                    </div>

                                    <div class="contactBlock__container">
                                        <label for="last_name" class="label__295px">Last name</label>
                                        <input type="text" name="last_name" id="last_name" minlength="3" maxlength="20"
                                            title="Довжина прізвища від 3 до 20 символів" placeholder="Smitherton"
                                            required>
                                    </div>
                                </div>

                                <div class="contactBlock__container">
                                    <label for="email_address" class="label__fullWidth">Email address</label>
                                    <input type="email" name="email_address" id="email_address"
                                        placeholder="email@janesfakedomain.net" required>
                                </div>

                                <div class="contactBlock__container">
                                    <label for="contact_number" class="label__fullWidth">Number</label>
                                    <input type="tel" name="contact_number" id="contact_number"
                                        title="Введіть номер у форматі +380-ХХ-ХХ-ХХ-ХХХ"
                                        placeholder="+380-ХХ-ХХ-ХХ-ХХХ" autocorrect="off" autocapitalize="off" required>
                                </div>

                                <div class="contactBlock__container">
                                    <label class="label__fullWidth">Your message</label>
                                    <textarea autocapitalize="off" id="contactTextArea" name="contactTextArea"
                                        class="contactTextArea" rows="1" cols="33"
                                        title="Кількість символів для повідомлення до 50" minlength="3" maxlength="50"
                                        class="" placeholder="Enter your question or message"></textarea>
                                </div>

                                <input class="contactBlock__submit" value="Submit" type="submit"/>
                            </div>
                        </form>
                        -->

                    </div>
                    <div class="contactBlock__item">
                        <div class="background">
                            <img class="backgroundImg" src="../images/Hero_Image.jpg" alt="background">
                        </div>
                    </div>
                </div>
            </section>



        </div>
    </main>
    <footer>
        <div class="wrapper border-top d-flex">
            <div class="footer__block d-flex flex-column space-between">
                <div class="logo">Site name</div>
                <div class="socials">
                    <a href="#"><img class="socials__img" src="../images/facebook.png" alt="facebook"></a>
                    <a href="#"><img class="socials__img" src="../images/linkedIn.png" alt="linkedIn"></a>
                    <a href="#"><img class="socials__img" src="../images/youtube.png" alt="youtube"></a>
                    <a href="#"><img class="socials__img" src="../images/instagram.png" alt="instagram"></a>

                </div>
            </div>
            <div class="footer__block">
                <div class="footerMenu">
                    <div class="footerMenu__block">
                        <div class="footerMenu__heading">Topic</div>
                        <ul>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                        </ul>
                    </div>
                    <div class="footerMenu__block">
                        <div class="footerMenu__heading">Topic</div>
                        <ul>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                        </ul>
                    </div>
                    <div class="footerMenu__block">
                        <div class="footerMenu__heading">Topic</div>
                        <ul>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                            <li class="footerMenu__item"><a href="">Page</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <script src="../js/main.js"></script>
</body>

</html>
