<?php

include("../config/db.php");

$email = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if($result->num_rows > 0){

$user = $result->fetch_assoc();

if($password == $user['password']){
echo "Login Successful";
}
else{
echo "Wrong Password";
}

}
else{
echo "User Not Found";
}

?>