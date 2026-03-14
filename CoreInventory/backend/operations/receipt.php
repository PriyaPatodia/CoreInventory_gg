<?php

include("../config/db.php");

$supplier = $_POST['supplier'];
$product_id = $_POST['product_id'];
$quantity = $_POST['quantity'];

$sql = "INSERT INTO receipts (supplier, product_id, quantity)
VALUES ('$supplier', '$product_id', '$quantity')";

if($conn->query($sql)){
echo "Receipt Added";
}else{
echo "Error";
}

?>