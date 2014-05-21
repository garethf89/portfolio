<?php

$name = $_POST['person_name'];
$email = $_POST['person_email'];
$themessage = $_POST['person_enq'];

$myemail = 'gareth.f@hotmail.co.uk';
$subject = 'Website Enquiry';

$message = "Name: " . $name . "<br/> Email: " . $email . "<br/><br/> message: " . $themessage;

$headers = "From: ".$email."\r\n"; 
$headers .= "Reply-To: ".$email."\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

mail($myemail, $subject, $message,$headers,"-f gareth.f@hotmail.co.uk") or die ("failed");

header('Location: http://www.garethferguson.co.uk/index.php?email=success');

?>