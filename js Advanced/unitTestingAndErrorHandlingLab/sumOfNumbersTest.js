const chai = require("chai");

function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}

describe("sum function", function () {
    it("should sum integers correctly", function () {
        //Arrange
        let arr = [1, 2, -3];

        //Act
        let result = sum(arr);

        //Assert
        chai.expect(result).to.equal(0);
    })
})

it("should sum floating point numbers correctly", function () {
    //Arrange
    let arr = [1.1, 2.2, 3.3];

    //Act
    let result = sum(arr);

    //Assert
    chai.expect(result).to.be.approximately(6.6, 0.001);
})

it("should cast strings to numbers correctly", function () {
    //Arrange
    let arr = ["11", "ea"];

    //Act
    let result = sum(arr);

    //Assert
    chai.expect(result).to.be.NaN;
})
