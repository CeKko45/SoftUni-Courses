function sumTable() {
    let table = document.querySelectorAll("table tr");
    let total = 0;
    for (let i = 1; i < table.length; i++){
        let products = table[i].children;
        let cost = products[products.length - 1].textContent;
        total += Number(cost);
    }
    document.getElementById("sum").textContent = total;
}