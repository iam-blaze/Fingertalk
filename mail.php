<?php
    /*
     * Enable error reporting
     */
     ini_set("sendmail_from", "nvignesh3398@gmail.com");
     error_reporting( E_ALL );

    /*
     * Setup email addresses and change it to your own
     */
     $from = $_POST['email'];
     $to = 'nvignesh3398@gmail.com';
     $subject = 'Fingertalk - feedback';
     $message = $_POST ['message'];
     $headers = "From:" . $from;

    /*
     * Test php mail function to see if it returns "true" or "false"
     * Remember that if mail returns true does not guarantee
     * that you will also receive the email
     */
    if(mail($to,$subject,$message, $headers))
    {
        echo "Test email send.";
    }
    else
    {
        echo "Failed to send...".$from;
    }
?>
