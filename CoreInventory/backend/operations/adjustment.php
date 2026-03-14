<?php

include("../config/db.php");

$product_id = $_POST['product_id'];
$quantity = $_POST['quantity'];
$reason = $_POST['reason'];

$sql = "INSERT INTO adjustments (product_id, quantity, reason)
VALUES ('$product_id', '$quantity', '$reason')";

$conn->query($sql);

echo "Adjustment Added";

?>