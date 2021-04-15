<?php
/* // el proceso que envia el email.
error_reporting(0);
$emailuser = "Info@lirvan.com";

$cabecera  = "MIME-Version: 1.0"."\r\n";
$cabecera .= "Content-type: text/html; charset=UTF-8"."\r\n";

$email  = htmlentities($_POST["email"]);
$nombre = htmlentities($_POST["nombre"]);
$messageuser = htmlentities($_POST["asunto"]);
$desc = str_replace("\n", "<br>", $_POST["descripcion"]);
$respuesta = $_POST["res"];
$n1 = $_POST["n1"];
$n2 = $_POST["n2"];
$respuesta1 = $n1+$n2;

if ($email == null || $nombre == null || $messageuser == null || $desc == null || $respuesta == null) {	
	die("Error, todos los campos son requeridos");
}

if ($respuesta != $respuesta1) {	
	die("Error, la comprobación Anti-spam ha fallado.");
}
if (mail($emailuser, $messageuser, "<b>Nombre</b>: ".$nombre."<br><b>Correo</b>: ".$email."<br><b>Problema</b>: ".$desc, $cabecera)) {	
	die($nombre.", El email se ha enviado correctamente.");
}
echo "Error, no se ha podido enviar el correo, inténtelo más tarde."; */

$email_destino = 'valenrobledo31@gmail.com'
$email = $_POST['email'];
$name = $_POST['name'];
$asunto = $_POST['asunto'];
$descripcion = $_POST['descripcion'];


$header = 'De: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version 1.0 \r\n"
$neader .= "Content-type: text/plain";

$message .= "Correo: " . $email . "\r\n";
$message = "Nombre: " . $name . "\r\n";
$message .= "Teléfono: " . $descripcion . "\r\n";

mail($email_destino, $asunto, utf8_decode($message), $header);

header("Location:contact.html");


?>