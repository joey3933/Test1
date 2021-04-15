<?php
if (isset($_POST['submit'])){
    $one = $_POST['firsttype'];
    $two = $_POST['secondtype'];

    $email_from ='qiuyue3933@gmail.com';

    $email_subject ='new';

    $email_body = "first answer: $one"
                    "second answer：$two";

    $to = "qiuyue1104@outlook.com";

    mail($to,$email_subject,$email_body);
    header("location: Form.js");

}


?>