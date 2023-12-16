function solution(data, criteria) {

    let criteriaName, criteriaValue = "";
    const isNotAll = criteria !== "all";

    if (isNotAll) {
        [criteriaName, criteriaValue] = criteria.split("-");
    }

    data = JSON.parse(data);
    data = data.filter(function (i) {
        return isNotAll ? i[criteriaName] === criteriaValue : true;
    })
        .forEach((person, index) => console.log(`${index}. ${person.first_name} ${person.last_name} - ${person.email}`)
        );
}

const jsonData = `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
    }]`
solution(jsonData, 'last_name-Johnson');