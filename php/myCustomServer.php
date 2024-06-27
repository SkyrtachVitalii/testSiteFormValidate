<?php
// myCustomServer.php

// Встановлюємо заголовки для підтримки CORS
header("Access-Control-Allow-Origin: http://salesme.42web.io");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Перевірка методу запиту
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Отримуємо сировинні дані JSON з тіла запиту
    $rawData = file_get_contents("php://input");
    // Декодуємо JSON у асоціативний масив
    $data = json_decode($rawData, true);

    if ($data) {
        // Логіка обробки отриманих даних
        // Наприклад, ви можете зберегти дані в базу даних або виконати інші операції

        // Формуємо відповідь
        $response = [
            'status' => 'success',
            'message' => 'Data received successfully',
            'receivedData' => $data
        ];

        // Відправляємо JSON-відповідь назад клієнту
        echo json_encode($response);
    } else {
        // Відправляємо помилку у разі некоректного JSON
        http_response_code(400);
        echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
    }
} else {
    // Відправляємо помилку у разі некоректного методу запиту
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
}
?>
