const chai = require("chai");

function createCalculator() {
    let value = 0;
    return {
    add: function(num) { value += Number(num); },
    subtract: function(num) { value -= Number(num); },
    get: function() { return value; }
    }
   }

   describe("Tests for this task", function () {
 
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
 
        it("should be a function", function () {
            chai.expect(typeof calc).to.equal("object");
        })

        it("should zero value when created", function () {
            chai.expect(calc.get()).to.equal(0);
        })

        it("Check add function", function () {
            calc.add(5);
            calc.add(2);
            chai.expect(calc.get()).to.equal(7);
        })
 
        it("Check subtract function", function () {
            calc.subtract(6);
            calc.subtract(3);
            chai.expect(calc.get()).to.equal(-9);
        })

        it("Check add function with fractions", function () {
            calc.add(2.14);
            calc.add(5.14);
            chai.expect(calc.get()).to.equal(7.279999999999999);
        })

        it("Check subtract function with fractions", function () {
            calc.subtract(-5.14);
            calc.subtract(-2.14);
            chai.expect(calc.get()).to.equal(7.279999999999999);
        })
 
        it("Check incorrect input for add", function () {
            calc.add("pesho");
            chai.expect(calc.get()).to.be.NaN;
        })
 
        it("Check incorrect input for subtract", function () {
            calc.subtract("pesho");
            chai.expect(calc.get()).to.be.NaN;
        })
 
        it("Check empty input", function () {
            calc.subtract();
            chai.expect(calc.get()).to.be.NaN;
        })
 
        it("Check both functions (add/subtract) with strings", function () {
            calc.add("pesho");
            calc.subtract("gosho");
            chai.expect(calc.get()).to.be.NaN;
        })
 
        it("Should work with numbers as strings", function () {
            calc.add("5");
            chai.expect(calc.get()).to.equal(5);
        })
});
   