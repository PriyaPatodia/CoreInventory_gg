const inventoryBody = document.getElementById("inventoryBody");
const message = document.getElementById("message");

function loadInventory() {

    const inventory = getInventory();

    inventoryBody.innerHTML = "";

    inventory.forEach((product, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${product.name}</td>
        <td class="stock">${product.stock}</td>
        <td><button onclick="pickItem(${index})">Pick</button></td>
        <td><button onclick="packItem(${index})">Pack</button></td>
        <td><button onclick="deliverItem(${index})">Deliver</button></td>
        `;

        inventoryBody.appendChild(row);
    });
}

function pickItem(i) {
    message.innerText = "Item Picked";
}

function packItem(i) {
    message.innerText = "Item Packed";
}

function deliverItem(i) {

    const inventory = getInventory();

    if (inventory[i].stock > 0) {

        inventory[i].stock--;

        saveInventory(inventory);

        message.innerText = "Item Delivered";

        loadInventory();

    } else {

        message.innerText = "Out of stock";

    }
}
function addDelivery(event){

event.preventDefault();

let customer = document.getElementById("customer").value;
let product = document.getElementById("product").value;
let quantity = document.getElementById("quantity").value;

let formData = new FormData();

formData.append("customer", customer);
formData.append("product_id", product);
formData.append("quantity", quantity);

fetch("../backend/operations/delivery.php",{
method:"POST",
body:formData
})
.then(res=>res.text())
.then(data=>{
alert(data);
});

}
loadInventory();