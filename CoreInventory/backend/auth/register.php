<?php

include("../config/db.php");

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "INSERT INTO users (email,password) VALUES ('$username','$password')";

if($conn->query($sql) === TRUE){
    echo "Signup Successful";
}
else{
    echo "Error creating account";
}

?>