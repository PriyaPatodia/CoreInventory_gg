# CoreInventory 📦

CoreInventory is a simple Inventory Management System built using **HTML, CSS, JavaScript, PHP, and MySQL**.  
It helps manage products, track stock, and record inventory operations such as receipts, deliveries, adjustments, and transfers.

---

## Features

- User Authentication (Login / Signup)
- Add Products
- View Products
- Delete Products
- Low Stock Alerts
- Receipts (Increase Stock)
- Deliveries (Decrease Stock)
- Adjustments (Manual Stock Changes)
- Transfers (Move Stock Between Locations)

---

## Tech Stack

Frontend
- HTML
- CSS
- JavaScript

Backend
- PHP

Database
- MySQL (phpMyAdmin)

Server
- XAMPP / Apache

---

## Project Structure

CoreInventory

frontend
- index.html
- dashboard.html
- products.html
- receipts.html
- delivery.html
- adjustments.html
- transfers.html
- style.css
- script.js

backend

auth
- login.php
- register.php
- reset_password.php

config
- db.php

operations
- receipt.php
- delivery.php
- adjustment.php
- transfer.php

products
- create_product.php
- delete_product.php
- update_product.php
- get_products.php

---

## Database Tables

The project uses the following tables:

- users
- products
- receipts
- deliveries
- adjustments
- transfers

---

## Setup Instructions

1. Install **XAMPP**

2. Move the project folder into:

htdocs/CoreInventory

3. Start **Apache** and **MySQL** in XAMPP.

4. Open phpMyAdmin in your browser:

http://localhost/phpmyadmin

5. Create a database named:

coreinventory

6. Create the required tables.

7. Run the project using:

http://localhost/CoreInventory/frontend/index.html

---

## How the System Works

- Users log in to access the dashboard.
- Products are stored in the **products table**.
- Receipts increase product stock.
- Deliveries decrease product stock.
- Adjustments allow manual stock changes.
- Transfers record stock movement between locations.

---

## Author Priya,Purva,Archi,Nirva

Hackathon Project – CoreInventory Inventory Management System