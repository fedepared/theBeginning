<?php 
// Declaro variables
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

// Datos del email
  $para = "amrebottaro@estudiorebottaro.com.ar";
  $titulo  = "consulta desde pagina web";
  $header = "From: " . $email;
  $msjCorreo = "Nombre: " . $name . "\n\nTelefono: " . $phone . "\n\nE-Mail: " . $email . "\n\nMensaje: \n\n\t\t" . $message;

 if(mail($para,$titulo,$msjCorreo,$header)){
     echo true;
 }else{
     
     echo false;
    
    }
?>