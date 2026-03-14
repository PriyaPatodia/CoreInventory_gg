<?php

include("../config/db.php");

$id = $_POST['id'];

$sql = "DELETE FROM products WHERE id='$id'";

if($conn->query($sql) === TRUE){
echo "Product Deleted";
}
else{
echo "Error deleting product";
}

?>