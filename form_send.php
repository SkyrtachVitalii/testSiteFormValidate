<?php
        
$_salesdrive_url = "https://salesme.salesdrive.me/handler/";
$_salesdrive_values = [
    "form" => "FvyqxOvIvdaqJ-VAL-qU9lZXi7xHRvA3LytGvxzPQg7jD78TtbfakPrG4IykwC4K1AaJ0Yi7uV-fUM91t1ihm5mLuOqE17QopTgx",
    "getResultData" => "1", // Отримувати дані створеної заявки (0 - не отримувати, 1 - отримувати)
    "fName"=>isset($_POST["fName"])?$_POST["fName"]:"", // Ім'я
    "lName"=>isset($_POST["lName"])?$_POST["lName"]:"", // Прізвище
    "phone"=>isset($_POST["phone"])?$_POST["phone"]:"", // Телефон
    "email"=>isset($_POST["email"])?$_POST["email"]:"", // E-mail
    "con_comment"=>isset($_POST["con_comment"])?$_POST["con_comment"]:"", // Коментар
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
curl_close($_salesdrive_ch);