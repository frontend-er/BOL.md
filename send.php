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
if (mail("bol.moldova@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email. ". Phone: " .$phone.". Question: ".$question,  "From: bajenov.dima.oleg@gmail.com \r\n"))
{     
      echo "<h1> Form was succes send </h1>";
} else {
    echo "Error wit form sending";
}




