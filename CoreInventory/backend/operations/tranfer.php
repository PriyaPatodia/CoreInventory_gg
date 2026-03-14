<?php

include("../config/db.php");

$product_id = $_POST['product_id'];
$from = $_POST['from_location'];
$to = $_POST['to_location'];
$quantity = $_POST['quantity'];

$sql = "INSERT INTO transfers (product_id, from_location, to_location, quantity)
VALUES ('$product_id', '$from', '$to', '$quantity')";

$conn->query($sql);

echo "Transfer Added";

?>