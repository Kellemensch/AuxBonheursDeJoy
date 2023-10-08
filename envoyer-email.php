<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "baptistedemoisy@gmail.com"; // Votre adresse e-mail
    $sujet = "Réservation de chiot";
    $contenu = "Nom : $nom\nEmail : $email\nMessage : $message";

    mail($to, $sujet, $contenu);

    header("Location: index.html"); // Rediriger après envoi
}
?>
