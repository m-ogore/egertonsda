<?php
if(isset($_POST['submit']))
{

	$to="ogoremarv@gmail.com";
	$from=$_POST['senderemail'];
	$firstname=$_POST['fname'];
	$lastname=$_POST['lname'];
	$subject="form submission";
	$header="From:".$from;

	$message=$firstname."".$lastname."".$_POST['message'];
	mail($to, $subject, $message,$header);
echo "Dear".$firstname."we will contact you shortly.";
}


?>
