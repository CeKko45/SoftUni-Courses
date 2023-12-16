function cityRecord(cityName, population, treasury) {
    let obj = {
        name: cityName,
        population: population,
        treasury: treasury
    }
    return obj;
}
console.log(cityRecord('Tortuga',
    7000,
    15000
));
console.log(cityRecord('Santo Domingo',
    12000,
    23500
));