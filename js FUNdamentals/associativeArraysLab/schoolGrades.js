function schoolGrades(arr) {
    let obj = {};
    for(let line of arr) {
        let info = line.split(" ");
        let name = info.shift();
        if(!obj.hasOwnProperty(name)){
            obj[name] = info;
        } else {
            let buffArr = Object.values(obj[name]);
            for(let value of info) {
                buffArr.push(value);
                obj[name] = buffArr;
            }
        }
    }
    for(let [name, grades] of Object.entries(obj)) {
        let sumGrades = 0;
        let allGrades = grades.length;
        for(let grade of grades) {
            let currentGrade = Number(grade);
            sumGrades += currentGrade;
            
        }
        let avgGrade = sumGrades / allGrades;
        obj[name] = avgGrade;
    }
    let sortedNames = Object.entries(obj).sort((keyA, keyB) => keyA[0].localeCompare(keyB[0]));
    for(let [key, value] of Object.values(sortedNames)) {
        console.log(`${key}: ${value.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
);