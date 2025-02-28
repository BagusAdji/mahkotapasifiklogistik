<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Pastikan PHPMailer sudah diinstal

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST["email"]);

    // Validasi email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid email address!'); window.history.back();</script>";
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // Konfigurasi SMTP Gmail
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'your-email@gmail.com'; // Ganti dengan email Anda
        $mail->Password   = 'your-app-password'; // Ganti dengan password aplikasi Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Pengirim dan Penerima
        $mail->setFrom('your-email@gmail.com', 'Newsletter Subscription');
        $mail->addAddress('mplgroupindonesia@gmail.com', 'MPL Group Indonesia');

        // Konten Email
        $mail->isHTML(true);
        $mail->Subject = 'New Newsletter Subscription';
        $mail->Body    = "<p>A new user has subscribed to your newsletter:</p>
                          <p><strong>Email:</strong> $email</p>";

        $mail->send();
        echo "<script>alert('Subscription successful!'); window.location.href='index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Failed to send email: {$mail->ErrorInfo}'); window.history.back();</script>";
    }
}
?>
