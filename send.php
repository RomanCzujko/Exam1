
<?php

$recepient = "info@web-up-steps.com";
$siteName = "WebUpSteps - web-up-steps.com";

$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$subject = trim($_POST["subject"]);
$message = trim($_POST["message"]);

$message = "Имя клиента: $name \nE-mail клиента: $mail\nСообщение: $message";

$pagetitle = "Заявка с сайта \"$siteName\" ";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>

