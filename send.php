<?php
$fio = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$question = $_POST['question'];


$question = htmlspecialchars($question);
$fio = htmlspecialchars($fio);

$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);
$question = urldecode($question);

$question = trim($question);
$phone = trim($phone);
$fio = trim($fio);
$email = trim($email);
if (mail("dbjenov@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email , "Phone: " .$phone, "Question: ".$question, "From: bajenov.dima.oleg@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>