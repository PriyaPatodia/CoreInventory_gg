<?php
include("../config/db.php");

$email = $_POST['email'];
$newpass = password_hash($_POST['password'],PASSWORD_DEFAULT);

$sql = "UPDATE users SET password='$newpass' WHERE email='$email'";

if($conn->query($sql)){
    echo "Password Updated";
}else{
    echo "Error";
}
?>