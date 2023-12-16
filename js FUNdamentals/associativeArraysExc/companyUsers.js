function companyUsers(input) {
    let companies = new Map();
    for (let line of input) {
        let [company, employeeId] = line.split(" -> ");
        if (!companies.has(company)) {
            companies.set(company, new Set());
        }
        companies.get(company).add(employeeId);
    }
    let sortCompaniesObj = Object.fromEntries(companies);
    let sortCompanies = Object.entries(sortCompaniesObj).sort((a, b) => a[0].localeCompare(b[0]));
    for (let key of sortCompanies) {
        let company = key.shift();
        console.log(company);
        for (let employeeId of Array.from(key[0])) {
            console.log(`-- ${employeeId}`);
        }

    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]

);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]


);