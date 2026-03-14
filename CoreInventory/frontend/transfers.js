const transferBody = document.getElementById("transferBody");
const message = document.getElementById("message");

function loadTransfers(){

const inventory = getInventory();

transferBody.innerHTML="";

inventory.forEach((product,index)=>{

const row = document.createElement("tr");

row.innerHTML = `
<td>${product.name}</td>
<td>${product.stock}</td>

<td>
<select id="from${index}">
<option>Main Warehouse</option>
<option>Rack A</option>
<option>Rack B</option>
</select>
</td>

<td>
<select id="to${index}">
<option>Production</option>
<option>Rack A</option>
<option>Rack B</option>
</select>
</td>

<td>
<button onclick="transferStock(${index})">Transfer</button>
</td>
`;

transferBody.appendChild(row);

});

}

function transferStock(i){

let from = document.getElementById("from"+i).value;
let to = document.getElementById("to"+i).value;

message.innerText = "Stock moved from "+from+" to "+to;

}
function addTransfer(event){

event.preventDefault();

let product = document.getElementById("product").value;
let from = document.getElementById("from").value;
let to = document.getElementById("to").value;
let quantity = document.getElementById("quantity").value;

let formData = new FormData();

formData.append("product_id", product);
formData.append("from_location", from);
formData.append("to_location", to);
formData.append("quantity", quantity);

fetch("../backend/operations/transfer.php",{
method:"POST",
body:formData
})
.then(res=>res.text())
.then(data=>{
alert(data);
});

}

loadTransfers();