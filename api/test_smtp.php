<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/error_log.txt');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'mail.nextmove25.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@nextmove25.com';
    $mail->Password   = '#(&M)SKGL3QgMJ{o';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('info@nextmove25.com', 'NextMove Test');
    $mail->addAddress('info@nextmove25.com');

    $mail->isHTML(true);
    $mail->Subject = 'Test SMTP';
    $mail->Body    = 'Este es un correo de prueba para verificar SMTP.';

    $mail->send();
    echo "Correo enviado correctamente";
} catch (Exception $e) {
    echo "Error al enviar: {$mail->ErrorInfo}";
}
