<?php

// echo "Вік: ";
// print_r($_POST);


$incoming_data = json_decode(file_get_contents('php://input'), true);

// echo $incoming_data;

        
$products = [];
            
$products[0]["id"] = "34634636"; // id товару
$products[0]["name"] = "Тепла підлога"; // назва товару
$products[0]["costPerItem"] = "500,00"; // ціна
$products[0]["amount"] = "1"; // кількість
$products[0]["description"] = "у цу  аццу цуцуа цуа цуа цу ццуцуцу цу ацу ц"; // опис товарної позиції в заявці
$products[0]["discount"] = "5%"; // знижка, задається в % або в абсолютній величині
$products[0]["sku"] = "24235325"; // артикул (SKU) товару

$data = [
    "fName"=>$incoming_data["first_name"],
    "lName"=>$incoming_data["last_name"]
];
                            
// $_salesdrive_url = "https://salesme.salesdrive.me/handler/";
$_salesdrive_values = [
    "form" => "UJ0tY7eMrhkEjVUkfZiNMq6AOnW5HZLgWGEZr9ekcE7shKwQAyu",
    "getResultData" => "1", // Отримувати дані створеної заявки (0 - не отримувати, 1 - отримувати)
    "products"=>$products, //Товари/Послуги
    "comment"=>"пуук пук п укпукп ук пукп ук пу", // Коментар
    "externalId"=>"2323423", // Зовнішній номер заявки
    "fName"=>"Ім'я", // Ім'я
    "lName"=>"Прізвище", // Прізвище
    "mName"=>"Побатькові", // По батькові
    "phone"=>"0997517848", // Телефон
    "email"=>"tytywl@gmail.com", // E-mail
    "con_comment"=>"пуук пук п укпукп ук пукп ук пу", // Коментар
    "shipping_method"=>"", // Спосіб доставки
    "payment_method"=>"", // Спосіб оплати
    "shipping_address"=>"", // Адреса доставки
];

$salesdrive_ch = curl_init();
curl_setopt($salesdrive_ch, CURLOPT_URL, "https://salesme.salesdrive.me/handler/");
curl_setopt($salesdrive_ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($salesdrive_ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
// curl_setopt($_salesdrive_ch, CURLOPT_SAFE_UPLOAD, true);
curl_setopt($salesdrive_ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($salesdrive_ch, CURLOPT_POST, 1);
curl_setopt($salesdrive_ch, CURLOPT_POSTFIELDS, json_encode($_salesdrive_values));
echo json_encode($_salesdrive_values);
curl_setopt($salesdrive_ch, CURLOPT_TIMEOUT, 15);

$_salesdrive_res = curl_exec($salesdrive_ch); 



// if (curl_errno($_salesdrive_res)) {
//     echo 'Помилка cURL: ' . curl_error($_salesdrive_res);
// } else {
//     echo 'Відповідь сервера: ' . $response;
// }

// мій дописаний php
curl_exec($salesdrive_ch);
curl_close($salesdrive_ch);