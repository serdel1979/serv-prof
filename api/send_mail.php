<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $service = htmlspecialchars($_POST['service'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (empty($name) || empty($email) || empty($message)) {
        echo json_encode(["success" => false, "error" => "Faltan campos obligatorios"]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host       = 'mail.nextmove25.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@nextmove25.com';
        $mail->Password   = '#(&M)SKGL3QgMJ{o';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL/TLS
        $mail->Port       = 465;

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

        $mail->send();
        echo json_encode(["success" => true, "message" => "Correo enviado correctamente"]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "error" => "Error al enviar: {$mail->ErrorInfo}"]);
    }
}
?>
