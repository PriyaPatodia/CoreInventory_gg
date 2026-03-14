<?php

include("../config/db.php");

$name = $_POST['name'];
$sku = $_POST['sku'];
$category = $_POST['category'];
$qty = $_POST['qty'];

$sql = "INSERT INTO products (name,sku,category,quantity)
VALUES ('$name','$sku','$category','$qty')";

if($conn->query($sql) === TRUE){
echo "Product Added";
}
else{
echo "Error";
}

?>