function receiveStock(index){

let inventory = getInventory();

inventory[index].stock += 5;

saveInventory(inventory);

alert("Stock Updated");

}
function addReceipt(event){

event.preventDefault();

let supplier = document.getElementById("supplier").value;
let product = document.getElementById("product").value;
let quantity = document.getElementById("quantity").value;

let formData = new FormData();

formData.append("supplier", supplier);
formData.append("product_id", product);
formData.append("quantity", quantity);

fetch("../backend/operations/receipt.php",{
method:"POST",
body:formData
})
.then(res=>res.text())
.then(data=>{
alert(data);
});

}