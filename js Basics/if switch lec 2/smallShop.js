function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    if (city == "Sofia") {
        if (product == "beer") {
        price = 1.20;
        let finalPrice = price * quantity;
        console.log(`${finalPrice}`);  
        }
        if (product == "sweets") {
            price = 1.45;
            let finalPrice = price * quantity;
            console.log(`${finalPrice}`);  
            }
            if (product == "peanuts") {
                price = 1.60;
                let finalPrice = price * quantity;
                console.log(`${finalPrice}`);  
                }
                if (product == "coffee") {
                    price = 0.50;
                    let finalPrice = price * quantity;
                    console.log(`${finalPrice}`);  
                    }
                    if (product == "water") {
                        price = 0.80;
                        let finalPrice = price * quantity;
                        console.log(`${finalPrice}`);  
                        } 
    }
    if (city == "Plovdiv") {
        if (product == "beer") {
        price = 1.15;
        let finalPrice = price * quantity;
        console.log(`${finalPrice}`);  
        }
        if (product == "sweets") {
            price = 1.30;
            let finalPrice = price * quantity;
            console.log(`${finalPrice}`);  
            }
            if (product == "peanuts") {
                price = 1.50;
                let finalPrice = price * quantity;
                console.log(`${finalPrice}`);  
                }
                if (product == "coffee") {
                    price = 0.40;
                    let finalPrice = price * quantity;
                    console.log(`${finalPrice}`);  
                    }
                    if (product == "water") {
                        price = 0.70;
                        let finalPrice = price * quantity;
                        console.log(`${finalPrice}`);  
                        } 
    }
    if (city == "Varna") {
        if (product == "beer") {
        price = 1.10;
        let finalPrice = price * quantity;
        console.log(`${finalPrice}`);  
        }
        if (product == "sweets") {
            price = 1.35;
            let finalPrice = price * quantity;
            console.log(`${finalPrice}`);  
            }
            if (product == "peanuts") {
                price = 1.55;
                let finalPrice = price * quantity;
                console.log(`${finalPrice}`);  
                }
                if (product == "coffee") {
                    price = 0.45;
                    let finalPrice = price * quantity;
                    console.log(`${finalPrice}`);  
                    }
                    if (product == "water") {
                        price = 0.70;
                        let finalPrice = price * quantity;
                        console.log(`${finalPrice}`);  
                        } 
    } 
}
smallShop (["sweets",
"Sofia",
"2.23"])



