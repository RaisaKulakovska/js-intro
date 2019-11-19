<?php
 if(isset($_POST["send"])){
 	$to="raisakulakovska@gmail.com";
 	$subj="Лист з сайту-візитки";
 	$charset="utf-8";
 	$headerss="content-type: text/html; charset=$charset\r\n";
 	$headerss="Date:".date('D,d M Y h:i:s O');
 	$msg="Ім'я: ".$POST["name"]."\n";
 	$msg.="e-mail: ".$POST["email"]."\n";
 	$msg.="Повідомлення: ".$POST["message"]."\n";
 	mail($to, $subj, $msg, $headerss);
 	print("<script>alert(\"Повідомлення відправлено!\")</script>");

 }
?>