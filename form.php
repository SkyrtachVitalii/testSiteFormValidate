<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="utf-8">
    <!-- <link rel="stylesheet" type="text/css" href="https://static.salesdrive.me/salesdriveforms/assets/css/salesdrive_iframe.css"> -->
    <title>Document</title>
</head>
<body>

<div id="sd-form-wrapper" class="">
    <form id="sd-form" method="post" action="" enctype="multipart/form-data" accept-charset="UTF-8">

        <div id="sd-form-header">
            <div  id="sd-form-title">Заголовок форми</div>
        </div>
        <div id="sd-form-body">
            <div id="fName" class="sd-form-group" >
                <div align="right" class="sd-form-label">Ім'я</div>
                <div class="sd-form-control"><input placeholder="Ім'я"  class="sd-form-type-text" type="text" name="fName" value="" /></div>
            </div>

            <div id="lName" class="sd-form-group" >
                <div align="right" class="sd-form-label">Прізвище</div>
                <div class="sd-form-control"><input placeholder="Прізвище"  class="sd-form-type-text" type="text" name="lName" value="" /></div>
            </div>

            <div id="phone" class="sd-form-group" >
                <div align="right" class="sd-form-label">Телефон</div>
                <div class="sd-form-control"><input placeholder="Телефон"  class="sd-form-type-text" type="text" name="phone" value="" /></div>
            </div>

            <div id="email" class="sd-form-group" >
                <div align="right" class="sd-form-label">E-mail</div>
                <div class="sd-form-control"><input placeholder="E-mail"  class="sd-form-type-email" type="email" name="email" value="" /></div>
            </div>

            <div id="con_comment" class="sd-form-group" >
                <div align="right" class="sd-form-label">Коментар</div>
                <div class="sd-form-control"><textarea placeholder="Коментар"  class="sd-form-textarea" name="con_comment"></textarea></div>
            </div>

            <div id="submit" class="sd-form-group">
               <div align="right" class="sd-form-label">&nbsp;</div>
               <div class="sd-form-control sd-form-button">
                <input type="submit" id="sd-form-button-submit" name="submit" value="Надіслати" style="background-color:#4697ce ; color:#fff ;" />
                </div>
            </div>
        </div>
    </form>
</div>
</body>
</html>
