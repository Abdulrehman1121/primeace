<?php
/**
 * PrimeAce Tech Contact Form API
 * Processes and stores contact form submissions securely.
 */

require_once __DIR__ . '/config.php';

// Accept only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, "Invalid request method. Only POST is allowed.", null, 405);
}

// Read raw request body
$inputRaw = file_get_contents('php://input');
$data = json_decode($inputRaw, true);

// Fallback to standard POST array if content-type is form-data
if (empty($data)) {
    $data = $_POST;
}

// Extract and sanitize fields
$fullName = isset($data['full_name']) ? trim(strip_tags($data['full_name'])) : '';
$email    = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone    = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$company  = isset($data['company_name']) ? trim(strip_tags($data['company_name'])) : '';
$project  = isset($data['project_type']) ? trim(strip_tags($data['project_type'])) : '';
$budget   = isset($data['budget_range']) ? trim(strip_tags($data['budget_range'])) : '';
$message  = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// Validation Check
if (empty($fullName)) {
    sendResponse(false, "Full Name is required.", null, 400);
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, "A valid email address is required.", null, 400);
}
if (empty($message)) {
    sendResponse(false, "Message content is required.", null, 400);
}

try {
    // Insert into database
    $sql = "INSERT INTO contact_messages (full_name, email, phone, company_name, project_type, budget_range, message) 
            VALUES (:full_name, :email, :phone, :company_name, :project_type, :budget_range, :message)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':full_name'    => $fullName,
        ':email'        => $email,
        ':phone'        => $phone ? $phone : null,
        ':company_name' => $company ? $company : null,
        ':project_type' => $project ? $project : null,
        ':budget_range' => $budget ? $budget : null,
        ':message'      => $message
    ]);

    sendResponse(true, "Thank you, your message has been securely recorded. Our executive engineering team will contact you shortly.", [
        "id" => $pdo->lastInsertId()
    ]);
} catch (PDOException $e) {
    sendResponse(false, "Internal Database Failure. Please try again later.", $e->getMessage(), 500);
}
