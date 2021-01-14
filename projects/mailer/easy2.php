<?php
$to = "miroslav@slusarcik.cz";
$subject = "My subject";
$txt = "Hello world!";
$headers = "From: info@slusarcik.cz";

if(mail($to,$subject,$txt,$headers)){
  echo "Chyba!";
  print phpinfo;
};
?>