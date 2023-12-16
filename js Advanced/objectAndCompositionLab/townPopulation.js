function townPopulation(arr) {
    let cityMap = {};
    for (let cityAsString of arr) {
        let [cityName, population] = cityAsString.split(" <-> ");
        population = Number(population);
        if (cityMap[cityName] === undefined) {
            cityMap[cityName] = 0;
        }
        cityMap[cityName] += population;
    }
    for (let cityName in cityMap) {
        console.log(`${cityName} : ${cityMap[cityName]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);