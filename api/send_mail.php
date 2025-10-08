<?php
// Mostrar errores para depuración
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Cargar Composer autoload
require __DIR__ . '/vendor/autoload.php';

// Solo procesar POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Obtener datos del formulario
    $name    = htmlspecialchars($_POST['name'] ?? '');
    $email   = htmlspecialchars($_POST['email'] ?? '');
    $phone   = htmlspecialchars($_POST['phone'] ?? '');
    $service = htmlspecialchars($_POST['service'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    // Validación básica
    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "error" => "Faltan campos obligatorios"]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuración SMTP
        $mail->isSMTP();
        $mail->Host       = 'mail.nextmove25.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@nextmove25.com';
        $mail->Password   = '#(&M)SKGL3QgMJ{o';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // STARTTLS
        $mail->Port       = 587;

        // Ignorar verificación de certificado (por problemas de SSL autofirmado)
        $mail->SMTPOptions = [
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true,
            ],
        ];

        // Remitente y destinatario
        $mail->setFrom('info@nextmove25.com', 'NextMove Contacto');
        $mail->addAddress('info@nextmove25.com');

        // Contenido del correo
        $mail->isHTML(true);
        $mail->Subject = 'Nueva solicitud de presupuesto';
        $mail->Body    = "
            <h3>Nueva solicitud de contacto</h3>
            <p><strong>Nombre:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Teléfono:</strong> {$phone}</p>
            <p><strong>Servicio:</strong> {$service}</p>
            <p><strong>Mensaje:</strong><br>{$message}</p>
        ";

        // Enviar
        $mail->send();
        echo json_encode(["success" => true, "message" => "Correo enviado correctamente"]);

    } catch (Exception $e) {
        echo json_encode(["success" => false, "error" => "Error al enviar: {$mail->ErrorInfo}"]);
    }

} else {
    echo json_encode(["success" => false, "error" => "Método no permitido"]);
}
