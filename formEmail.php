<?php

$name = $_POST['person_name'];
$email = $_POST['person_email'];
$themessage = $_POST['person_enq'];

$myemail = 'gazmatron1@gmail.com';
$subject = 'Website Enquiry';

$message = "Name: " . $name . "<br/> Email: " . $email . "<br/><br/> Message: " . $themessage;

$headers = "From: ".$email."\r\n"; 
$headers .= "Reply-To: ".$email."\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

mail($myemail,$subject,$message,$headers,"-f $email") or die ("failed");

echo "success";

?>