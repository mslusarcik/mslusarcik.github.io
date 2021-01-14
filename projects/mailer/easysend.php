<?php     
$to_email = 'miroslav@slusarcik.cz';
$subject = 'Testing PHP Mail';
$message = 'This mail is sent using the PHP mail function';
$headers = 'From: miroslav@slusarcik.cz';
if(!mail($to_email,$subject,$message,$headers)){
  echo "Chyba!";
} else {
  echo "Úspěšně odesláno!";
};
?>