<?php
include("../config/db.php");

$total_products = $conn->query("SELECT COUNT(*) as total FROM products")->fetch_assoc()['total'];

$low_stock = $conn->query("SELECT COUNT(*) as total FROM products WHERE stock < 10")->fetch_assoc()['total'];

$receipts = $conn->query("SELECT COUNT(*) as total FROM receipts")->fetch_assoc()['total'];

$deliveries = $conn->query("SELECT COUNT(*) as total FROM deliveries")->fetch_assoc()['total'];

$response = [
 "total_products"=>$total_products,
 "low_stock"=>$low_stock,
 "receipts"=>$receipts,
 "deliveries"=>$deliveries
];

echo json_encode($response);

?>