function getInventory() {
    let data = localStorage.getItem("inventory");

    if (!data) {
        const defaultInventory = [
            { name: "Product A", stock: 10 },
            { name: "Product B", stock: 8 },
            { name: "Product C", stock: 15 }
        ];

        localStorage.setItem("inventory", JSON.stringify(defaultInventory));
        return defaultInventory;
    }

    return JSON.parse(data);
}

function saveInventory(data) {
    localStorage.setItem("inventory", JSON.stringify(data));
}