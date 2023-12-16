function calorieObject(arr) {
    let resultObj = {};
    for (let i = 0; i < arr.length; i += 2) {
        if (i % 2 === 0) {
            resultObj[arr[i]] = Number(arr[i + 1]);
        }
    }
    console.log(resultObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138',
    'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63',
    'Cucumber', '18', 'Milk', '42']
);