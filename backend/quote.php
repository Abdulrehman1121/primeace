<?php
/**
 * PrimeAce Tech Request a Quote Form API
 * Processes detailed quotations and handles secure file attachments.
 */

require_once __DIR__ . '/config.php';

// Accept only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendResponse(false, "Invalid request method. Only POST is allowed.", null, 405);
}

// Extract parameters from standard $_POST (since it uses multipart/form-data for file uploads)
$fullName      = isset($_POST['full_name']) ? trim(strip_tags($_POST['full_name'])) : '';
$email         = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone         = isset($_POST['phone']) ? trim(strip_tags($_POST['phone'])) : '';
$company       = isset($_POST['company']) ? trim(strip_tags($_POST['company'])) : '';
$serviceNeeded = isset($_POST['service_needed']) ? trim(strip_tags($_POST['service_needed'])) : '';
$description   = isset($_POST['project_description']) ? trim(strip_tags($_POST['project_description'])) : '';
$budget        = isset($_POST['budget']) ? trim(strip_tags($_POST['budget'])) : '';
$timeline      = isset($_POST['timeline']) ? trim(strip_tags($_POST['timeline'])) : '';
$contactMethod = isset($_POST['preferred_contact_method']) ? trim(strip_tags($_POST['preferred_contact_method'])) : '';

// Validation Check
if (empty($fullName)) {
    sendResponse(false, "Full Name is required.", null, 400);
}
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(false, "A valid email address is required.", null, 400);
}
if (empty($serviceNeeded)) {
    sendResponse(false, "Please specify the service needed.", null, 400);
}
if (empty($description)) {
    sendResponse(false, "Project description is required.", null, 400);
}

// File Upload Handler
$uploadedFilePath = null;
if (isset($_FILES['file']) && $_FILES['file']['error'] !== UPLOAD_ERR_NO_FILE) {
    $fileError = $_FILES['file']['error'];
    if ($fileError !== UPLOAD_ERR_OK) {
        sendResponse(false, "File upload error occurred. Error Code: " . $fileError, null, 400);
    }

    $fileName = $_FILES['file']['name'];
    $fileSize = $_FILES['file']['size'];
    $fileTemp = $_FILES['file']['tmp_name'];

    // Enforce 10MB File Size limit
    $maxFileSize = 10 * 1024 * 1024; // 10MB
    if ($fileSize > $maxFileSize) {
        sendResponse(false, "File size exceeds the maximum limit of 10MB.", null, 400);
    }

    // Restrict File Extensions for Security
    $allowedExtensions = ['pdf', 'doc', 'docx', 'zip', 'rar', 'txt', 'png', 'jpg', 'jpeg'];
    $fileInfo = pathinfo($fileName);
    $fileExt  = isset($fileInfo['extension']) ? strtolower($fileInfo['extension']) : '';

    if (!in_array($fileExt, $allowedExtensions)) {
        sendResponse(false, "Invalid file format. Allowed formats: " . implode(', ', $allowedExtensions), null, 400);
    }

    // Set upload directory inside backend
    $uploadDir = __DIR__ . '/uploads/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    // Generate highly unique filename to prevent path traversal and overwrite issues
    $secureFileName = uniqid('brief_', true) . '.' . $fileExt;
    $uploadedFilePath = $uploadDir . $secureFileName;

    if (!move_uploaded_file($fileTemp, $uploadedFilePath)) {
        sendResponse(false, "Unable to save uploaded file on host server.", null, 500);
    }

    // Store relative path in database for clean references
    $uploadedFilePath = 'uploads/' . $secureFileName;
}

try {
    // Insert into quote_requests
    $sql = "INSERT INTO quote_requests (full_name, email, phone, company, service_needed, project_description, budget, timeline, preferred_contact_method, file_path) 
            VALUES (:full_name, :email, :phone, :company, :service_needed, :project_description, :budget, :timeline, :preferred_contact_method, :file_path)";
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        ':full_name'                => $fullName,
        ':email'                    => $email,
        ':phone'                    => $phone ? $phone : null,
        ':company'                  => $company ? $company : null,
        ':service_needed'           => $serviceNeeded,
        ':project_description'      => $description,
        ':budget'                   => $budget,
        ':timeline'                 => $timeline,
        ':preferred_contact_method' => $contactMethod,
        ':file_path'                => $uploadedFilePath
    ]);

    sendResponse(true, "Your design brief has been successfully analyzed. An executive strategist will contact you within 24 hours.", [
        "id" => $pdo->lastInsertId()
    ]);
} catch (PDOException $e) {
    sendResponse(false, "Internal Database Failure. Please try again later.", $e->getMessage(), 500);
}
