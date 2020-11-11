<?php
    if (isset($_POST['submit'])) {
        $mailTo = "songlymusic@gmail.com";
        $subject = "Web Message";
        $message = $_POST['message'];

        mail($mailTo, $subject, $message)
    }
?>