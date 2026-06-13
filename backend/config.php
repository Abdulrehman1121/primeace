<?php
/**
 * PrimeAce Tech Backend Configuration
 * Establishes secure PDO MySQL connection and sets robust CORS policies.
 */

// Enable error reporting for debugging, disable in production
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Set responsive CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, Cache-Control");

// Handle OPTIONS Preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit(0);
}

// Database Credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'primeace_db');
define('DB_USER', 'root');
define('DB_PASS', ''); // Default empty password for local development

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]
    );
} catch (PDOException $e) {
    // Return standard JSON error response instead of leaking technical traces
    header('Content-Type: application/json', true, 500);
    echo json_encode([
        "success" => false,
        "message" => "Database connection failure. Please ensure your local MySQL server is active and the primeace_db schema is created.",
        "error"   => $e->getMessage()
    ]);
    exit();
}

/**
 * Utility function to send JSON response cleanly
 */
function sendResponse($success, $message, $data = null, $statusCode = 200) {
    header('Content-Type: application/json', true, $statusCode);
    echo json_encode([
        "success" => $success,
        "message" => $message,
        "data"    => $data
    ]);
    exit();
}
