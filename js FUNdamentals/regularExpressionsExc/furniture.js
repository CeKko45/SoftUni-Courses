function furniture(data) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");
    for (let line of data) {
        if(line === "Purchase") {
            break;
        }
        if(pattern.test(line)) {
            let product = pattern.exec(line);
            let price = Number(product.groups.price) * Number(product.groups.quantity);
            console.log(product.groups.name);
            totalMoney += price;
        }
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);
furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);