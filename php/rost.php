<?php
  /*
  $data = [
    "chat_id" => "-4125347974",
    "text" => $dump['info'] . " \nІмя: " . $dump['name'] . "\nТелефон: " . $dump['phone']
  ];
  */
  $dump = json_decode(file_get_contents('php://input'), true);
  //$name = explode(" ", $dump['name']);
  $data = [
      "form" => "IYMQMdhCUbGtHYfxE2sQDoJwJHi7IDeHlEutqM6tBq6w2Tw6zrvlI4UxR4bQiNGc5gB5F8dO__xIDZ3wnRvvijI-Goxib3vE1ES4",
      "fName" => $dump['name'],
      "phone" => $dump['phone'],
      "tipZaavki" => "id_384",
      "comment" => $dump['info'],
    "resurs" => "id_418"
    ];
    
  $ch = curl_init('https://ekobud.salesdrive.me/handler/');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_exec($ch);
    curl_close($ch);