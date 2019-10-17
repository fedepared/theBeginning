<?php 
//Declaro variables
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

// Datos del email
$para = "amrebottaro@estudiorebottaro.com.ar";
$titulo  = "consulta desde pagina web";
$header = "From: " . $email;
$msjCorreo = "Nombre:" . $name . "\n Telefono: " . $phone . "\n E-Mail: " . $email . "\n Mensaje: \n" . $message;

if(mail($para,$titulo,$msjCorreo,$header)){
    echo "<script language='javascript'>
    alert('Mensaje Enviado')</script>";
}else{
    echo "Fallo el envio";
}







?>