<?php
if($_POST) {

	// Sanitize POST data
	$name 		= 	filter_var($_POST["name"], FILTER_SANITIZE_STRING);
	$email 		= 	filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
	$message 	= 	filter_var($_POST["message"], FILTER_SANITIZE_STRING);

	// Set mailer variables
	$sendTo		= 	"haileyhentschel@gmail.com";
	$subject 	= 	"A new email from my website!";
	$content 	= 	"Name: $name\n" .
					"Email: $email\n" .
					"Message:\n\n$message";
	$headers	=	'From: haileyhentschel.com' . "\r\n" .
    				'Reply-To: '.$email.'' . "\r\n" .
    				'X-Mailer: PHP/' . phpversion();

	// Varify email again with PHP, continue if so
	if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {

		// Detect & prevent header injections
		$test = "/(content-type|bcc:|cc:|to:)/i";
		foreach ( $_POST as $key => $val ) {
			if ( preg_match( $test, $val ) ) {
		  		exit;
			}
		}

		// Send email
		mail($sendTo, $subject, $content, $headers);
	}
}
?>