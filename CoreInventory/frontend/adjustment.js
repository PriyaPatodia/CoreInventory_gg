const adjustBody = document.getElementById("adjustBody");
const message = document.getElementById("message");

function loadAdjustments(){

const inventory = getInventory();

adjustBody.innerHTML="";

inventory.forEach((product,index)=>{

const row = document.createElement("tr");

row.innerHTML = `
<td>${product.name}</td>
<td>${product.stock}</td>

<td>
<input type="number" id="qty${index}" placeholder="Qty">
</td>

<td>
<select id="reason${index}">
<option>Damaged</option>
<option>Lost</option>
<option>Manual Correction</option>
</select>
</td>

<td>
<button onclick="adjustStock(${index})">Adjust</button>
</td>
`;

adjustBody.appendChild(row);

});

}

function adjustStock(i){

const inventory = getInventory();

let qty = parseInt(document.getElementById("qty"+i).value);
let reason = document.getElementById("reason"+i).value;

if(qty > 0){

inventory[i].stock -= qty;

saveInventory(inventory);

message.innerText = "Stock adjusted: "+reason;

loadAdjustments();

}

}
function addAdjustment(event){

event.preventDefault();

let product = document.getElementById("product").value;
let quantity = document.getElementById("quantity").value;
let reason = document.getElementById("reason").value;

let formData = new FormData();

formData.append("product_id", product);
formData.append("quantity", quantity);
formData.append("reason", reason);

fetch("../backend/operations/adjustment.php",{
method:"POST",
body:formData
})
.then(res=>res.text())
.then(data=>{
alert(data);
});

}

loadAdjustments();