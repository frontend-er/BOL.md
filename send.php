<?php






// ваш секретный ключ
$secret = '6LdHH6cbAAAAAA4yNOY3t-iCoEtyQjxpKCnSnyXj';
// однократное включение файла autoload.php (клиентская библиотека reCAPTCHA PHP)
require_once (dirname(__FILE__).'/recaptcha/autoload.php');
// если в массиве $_POST существует ключ g-recaptcha-response, то...
if (isset($_POST['g-recaptcha-response'])) {
  // создать экземпляр службы recaptcha, используя секретный ключ
  $recaptcha = new \ReCaptcha\ReCaptcha($secret);
  // получить результат проверки кода recaptcha
  $resp = $recaptcha->verify($_POST['g-recaptcha-response'], $_SERVER['REMOTE_ADDR']);
  // если результат положительный, то...
  if ($resp->isSuccess()){
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
if (mail("dbjenov@gmail.com", "Заявка с сайта", "ФИО:".$fio.". E-mail: ".$email. ". Phone: " .$phone.". Question: ".$question,  "From: bajenov.dima.oleg@gmail.com \r\n"))
 {      echo "<h1> Form was succes send </h1>";
} else {
    echo "Error wit form sending";
}
  } else {
    // иначе передать ошибку
    $errors = $resp->getErrorCodes();
    $data['error-captcha']=$errors;
    $data['msg']='Код капчи не прошёл проверку на сервере';
    $data['result']='error';
  }

} else {
  //ошибка, не существует ассоциативный массив $_POST["send-message"]
  $data['result']='error';
}