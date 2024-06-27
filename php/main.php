<?php
        
$products = [];
            
$products[0]["id"] = "34634636"; // id товару
$products[0]["name"] = "Тепла підлога"; // назва товару
$products[0]["costPerItem"] = "500,00"; // ціна
$products[0]["amount"] = "1"; // кількість
$products[0]["description"] = "у цу  аццу цуцуа цуа цуа цу ццуцуцу цу ацу ц"; // опис товарної позиції в заявці
$products[0]["discount"] = "5%"; // знижка, задається в % або в абсолютній величині
$products[0]["sku"] = "24235325"; // артикул (SKU) товару
                            
$_salesdrive_url = "https://salesme.salesdrive.me/handler/";
$_salesdrive_values = [
    "form" => "UJ0tY7eMrhkEjVUkfZiNMq6AOnW5HZLgWGEZr9ekcE7shKwQAyu",
    "getResultData" => "1", // Отримувати дані створеної заявки (0 - не отримувати, 1 - отримувати)
    "products"=>$products, //Товари/Послуги
    "comment"=>"пуук пук п укпукп ук пукп ук пу", // Коментар
    "externalId"=>"", // Зовнішній номер заявки
    "fName"=>"Ім'я", // Ім'я
    "lName"=>"Прізвище", // Прізвище
    "mName"=>"Побатькові", // По батькові
    "phone"=>"0997517848", // Телефон
    "email"=>"tytywl@gmail.com", // E-mail
    "con_comment"=>"пуук пук п укпукп ук пукп ук пу", // Коментар
    "shipping_method"=>"", // Спосіб доставки
    "payment_method"=>"", // Спосіб оплати
    "shipping_address"=>"", // Адреса доставки
    "novaposhta"=> [
        "ServiceType" => "", // можливі значення: Warehouse, Doors
        "payer" => "", // можливі значення: "sender", "recipient"
        "area" => "", // область російською або українською мовою, або Ref області в системі Нової пошти
        "region" => "", // район російською або українською мовою (використовується тільки якщо cityNameFormat=settlement)
        "city" => "", // назва міста російською або українською мовою, або Ref міста в системі Нової пошти
        "cityNameFormat" => "", // можливі значення: full (за замовчуванням), short, settlement (населений пункт із нової адресної системи: ref або назва)
        "WarehouseNumber" => "", // відділення Нової Пошти в одному з форматів: номер, опис, Ref
        "Street" => "", // назва і тип вулиці, або Ref вулиці в системі Нової пошти
        "BuildingNumber" => "", // номер будинку
        "Flat" => "", // номер квартири
    ],
    "ukrposhta"=> [
        "ServiceType" => "", // можливі значення: Warehouse, Doors
        "payer" => "", // можливі значення: "sender", "recipient"
        "type" => "", // можливі значення: express, standard
        "city" => "", // місто російською або українською мовою, або CITY_ID Укрпошти
        "WarehouseNumber" => "", // номер відділення Укрпошти
        "Street" => "", // STREET_ID Укрпошти
        "BuildingNumber" => "", // номер будинку
        "Flat" => "" // номер квартири
    ],
    "sajt"=>"", // Сайт
    "con_telegram"=>"", // Telegram
    "organizationId"=>"", // id організації
    "shipping_costs"=>"", // Витрати на доставку
    "con_instagramNick"=>"", // Instagram nick
    "meest"=> [
        "ServiceType" => "", // можливі значення: Warehouse, Doors
        "payer" => "", // можливі значення: "sender", "recipient"
        "area" => "", // область українською або російською мовою
        "city" => "", // місто українською або російською мовою
        "WarehouseNumber" => "", // відділення Meest в одному з форматів: номер або br_id
    ],
    "stockId"=>"", // id складу
    "prodex24source_full"=>isset($_COOKIE["prodex24source_full"])?$_COOKIE["prodex24source_full"]:"",
    "prodex24source"=>isset($_COOKIE["prodex24source"])?$_COOKIE["prodex24source"]:"",
    "prodex24medium"=>isset($_COOKIE["prodex24medium"])?$_COOKIE["prodex24medium"]:"",
    "prodex24campaign"=>isset($_COOKIE["prodex24campaign"])?$_COOKIE["prodex24campaign"]:"",
    "prodex24content"=>isset($_COOKIE["prodex24content"])?$_COOKIE["prodex24content"]:"",
    "prodex24term"=>isset($_COOKIE["prodex24term"])?$_COOKIE["prodex24term"]:"",
    "prodex24page"=>isset($_SERVER["HTTP_REFERER"])?$_SERVER["HTTP_REFERER"]:"",
];

$_salesdrive_ch = curl_init();
curl_setopt($_salesdrive_ch, CURLOPT_URL, $_salesdrive_url);
curl_setopt($_salesdrive_ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($_salesdrive_ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($_salesdrive_ch, CURLOPT_SAFE_UPLOAD, true);
curl_setopt($_salesdrive_ch, CURLOPT_CONNECTTIMEOUT, 10);
curl_setopt($_salesdrive_ch, CURLOPT_POST, 1);
curl_setopt($_salesdrive_ch, CURLOPT_POSTFIELDS, json_encode($_salesdrive_values));
curl_setopt($_salesdrive_ch, CURLOPT_TIMEOUT, 15);

$_salesdrive_res = curl_exec($_salesdrive_ch); 