function autoCompany(vehiclesArr) {
    let cars = {};

    for (let vehicle of vehiclesArr) {
        let [carBrand, carModel, production] = vehicle.split(" | ");
        production = Number(production);

        if (!cars[carBrand]) {
            cars[carBrand] = [];
            cars[carBrand].push({ carModel, production });
        } else if(cars[carBrand].some(car => car.carModel === carModel)) {
            let targetCar = cars[carBrand].find(car => car.carModel === carModel);
            targetCar.production += production;
        } else {
            cars[carBrand].push({carModel, production});
        }
    }

    for(const[brand, car] of Object.entries(cars)) {
        console.log(brand);
        for(const currentCar of Object.values(car)) {
            console.log(`###${currentCar.carModel} -> ${currentCar.production}`);
        }
    }
}
autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);