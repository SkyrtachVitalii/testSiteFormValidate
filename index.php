<!DOCTYPE html>
<html lang="uk">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <script src="../js/coockies.js"></script>
    <link rel="stylesheet" href="./css/style.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
    </style>
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
                            <li class="menu__item"><a href="#">Page</a></li>
                            <li class="menu__item"><a href="#">Page</a></li>
                            <li class="menu__item"><a href="#">Page</a></li>
                        </nav>
                        <a class="sendButton" href="./form.php">
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
                <h1 class="landingTitle text-center">Landing page title</h1>
                <p class="landingDescr text-center">And a subheading describing your site, too</p>
                <a class="sendButton" href="./contact.php">
                    Send form
                </a>
            </section>

            <section class="container text-center">
                <div class="background">
                    <img class="backgroundImg" src="./images/background.png" alt="background">
                </div>
            </section>

            <section class="container containerSpacing">
                <h2 class="blockTitle">Heading</h2>
                <p class="blockDescr">Subheading to introduce testimonials</p>

                <div class="cards">
                    <div class="card">
                        <h5 class="card__heading">“A terrific piece of praise”</h5>
                        <div class="card__author">
                            <div class="card__authorImg">
                                <img src="./images/Avatar1.png" alt="Avatar1">
                            </div>
                            <div class="card__authorInfo">
                                <div class="card__authorName">Name</div>
                                <div class="card__authorDescr">Description</div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <h5 class="card__heading">“A terrific piece of praise”</h5>
                        <div class="card__author">
                            <div class="card__authorImg">
                                <img src="./images/Avatar1.png" alt="Avatar1">
                            </div>
                            <div class="card__authorInfo">
                                <div class="card__authorName">Name</div>
                                <div class="card__authorDescr">Description</div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <h5 class="card__heading">“A terrific piece of praise”</h5>
                        <div class="card__author">
                            <div class="card__authorImg">
                                <img src="./images/Avatar1.png" alt="Avatar1">
                            </div>
                            <div class="card__authorInfo">
                                <div class="card__authorName">Name</div>
                                <div class="card__authorDescr">Description</div>
                            </div>
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
                    <a href="#"><img class="socials__img" src="./images/facebook.png" alt="facebook"></a>
                    <a href="#"><img class="socials__img" src="./images/linkedIn.png" alt="linkedIn"></a>
                    <a href="#"><img class="socials__img" src="./images/youtube.png" alt="youtube"></a>
                    <a href="#"><img class="socials__img" src="./images/instagram.png" alt="instagram"></a>

                </div>
            </div>
            <div class="footer__block">
                <div class="footerMenu">
                    <div class="footerMenu__block">
                        <div class="footerMenu__heading">Topic</div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                    </div>
                    <div class="footerMenu__block">
                        <div class="footerMenu__heading">Topic</div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                    </div>
                    <div class="footerMenu__block">
                        <div class="footerMenu__heading">Topic</div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                        <div class="footerMenu__item"><a href="#">Page</a></div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script src="./js/main.js"></script>
</body>

</html>