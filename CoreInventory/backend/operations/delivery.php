<?php

include("../config/db.php");

$customer = $_POST['customer'];
$product_id = $_POST['product_id'];
$quantity = $_POST['quantity'];

$sql = "INSERT INTO deliveries (customer, product_id, quantity)
VALUES ('$customer', '$product_id', '$quantity')";

if($conn->query($sql)){
echo "Delivery Added";
}else{
echo "Error";
}

?>