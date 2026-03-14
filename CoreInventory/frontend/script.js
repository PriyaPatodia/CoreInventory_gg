
function signup(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let formData = new FormData();

formData.append("username", username);
formData.append("password", password);

fetch("../backend/auth/register.php", {
method: "POST",
body: formData
})
.then(response => response.text())
.then(data => {

alert(data);

if(data.includes("Signup Successful")){
window.location = "index.html";
}

});

}


function login(){

let username = document.getElementById("loginUser").value;
let password = document.getElementById("loginPass").value;

let formData = new FormData();

formData.append("username", username);
formData.append("password", password);

fetch("../backend/auth/login.php", {
method: "POST",
body: formData
})
.then(response => response.text())
.then(data => {

alert(data);

if(data.includes("Login Successful")){
sessionStorage.setItem("loggedIn","true");
window.location = "dashboard.html";
}

});

}

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
.then(response => response.text())
.then(data => {

alert(data);

document.getElementById("pname").value="";
document.getElementById("sku").value="";
document.getElementById("category").value="";
document.getElementById("qty").value="";

});

}


function addReceipt(event){

event.preventDefault();

let supplier = document.getElementById("supplier").value;
let product = document.getElementById("product").value;
let quantity = document.getElementById("quantity").value;

let table = document.getElementById("receiptTable");

let row = table.insertRow();

row.insertCell(0).innerHTML = supplier;
row.insertCell(1).innerHTML = product;
row.insertCell(2).innerHTML = quantity;

document.getElementById("supplier").value="";
document.getElementById("product").value="";
document.getElementById("quantity").value="";

}

// Function to decrease stock and show message
function updateStock(btn, actionName) {
  const row = btn.closest("tr");
  const stockCell = row.querySelector(".stock");
  let stock = parseInt(stockCell.textContent);

  if (stock > 0) {
    stock--;
    stockCell.textContent = stock;
    showMessage(`${actionName} Successful ✅`);
  } else {
    showMessage(`Out of Stock ❌`, true);
  }
}

// Show temporary messages
function showMessage(msg, error=false) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = msg;
  messageDiv.style.color = error ? "red" : "green";

  setTimeout(() => {
    messageDiv.textContent = "";
  }, 1500);
}
if(product.stock < 5){
row.classList.add("low-stock");
}

if(product.stock < 5){
row.style.backgroundColor = "#5a0000";
}

// Attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".pickBtn").forEach(btn => {
    btn.addEventListener("click", () => updateStock(btn, "Pick"));
  });

  document.querySelectorAll(".packBtn").forEach(btn => {
    btn.addEventListener("click", () => updateStock(btn, "Pack"));
  });

  document.querySelectorAll(".deliverBtn").forEach(btn => {
    btn.addEventListener("click", () => updateStock(btn, "Delivery"));
  });
});

function checkLogin(){

let loggedIn = sessionStorage.getItem("loggedIn");

if(loggedIn !== "true"){
alert("Please login first");
window.location = "index.html";
}

}