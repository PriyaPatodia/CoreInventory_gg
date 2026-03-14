function addProduct(event){

event.preventDefault();

let name = document.getElementById("pname").value;
let sku = document.getElementById("sku").value;
let category = document.getElementById("category").value;
let qty = document.getElementById("qty").value;

let formData = new FormData();

formData.append("name", name);
formData.append("sku", sku);
formData.append("category", category);
formData.append("qty", qty);

fetch("../backend/products/create_product.php", {
method: "POST",
body: formData
})
.then(res => res.text())
.then(data => {

alert(data);
loadProducts();

});

}
function loadProducts(){

fetch("../backend/products/get_products.php")
.then(response => response.json())
.then(data => {

let table = document.getElementById("productTable");

table.innerHTML = "";

data.forEach(product => {

let row = table.insertRow();

row.insertCell(0).innerHTML = product.name;
row.insertCell(1).innerHTML = product.sku;
row.insertCell(2).innerHTML = product.category;
row.insertCell(3).innerHTML = product.quantity;
row.insertCell(4).innerHTML =
`<button onclick="deleteProduct(${product.id})">Delete</button>`;

if(product.quantity < 5){
row.style.backgroundColor = "#5a0000";
}

});

});

}
function deleteProduct(id){

let formData = new FormData();
formData.append("id", id);

fetch("../backend/products/delete_product.php", {
method: "POST",
body: formData
})
.then(response => response.text())
.then(data => {

alert(data);
loadProducts();

});

}