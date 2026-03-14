<?php
include("../config/db.php");

$id = $_POST['id'];
$name = $_POST['name'];
$sku = $_POST['sku'];
$category = $_POST['category'];
$unit = $_POST['unit'];

$sql = "UPDATE products
SET name='$name',
sku='$sku',
category='$category',
unit='$unit'
WHERE id=$id";

if($conn->query($sql)){
    echo "Product Updated";
}else{
    echo "Error";
}
?>