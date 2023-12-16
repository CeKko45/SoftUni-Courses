const chai = require("chai");

function isSymmetric(arr) {
    if (!Array.isArray(arr)) {
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('Regular cases', () => {
    // odd count - numbers only
    it('should return true on isSymmetric([1,2,1])', () => {
        chai.expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    // even count - numbers only
    it('should return false on isSymmetric([1,2,-1])', () => {
        chai.expect(isSymmetric([1, 2, -1])).to.be.false;
    });

    // odd count - numbers only
    it('should return true on isSymmetric([10,20,20,10])', () => {
        chai.expect(isSymmetric([10, 20, 20, 10])).to.be.true;
    });

    // even count - numbers only
    it('should return false on isSymmetric([10,20,30,10])', () => {
        chai.expect(isSymmetric([10, 20, 30, 10])).to.be.false;
    });

    // odd count - mixed types
    it('should return true on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        chai.expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])).to.be.true;
    });

    // even count - mixed types
    it('should return false on isSymmetric(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        chai.expect(isSymmetric(["pesho", new Date(2016, 8, 15), false, "pesho"])).to.be.false;
    });
});

describe('Tests for isSymmetric(arr) - Edge cases', () => {
    // number and string representation of the same number
    it('should return false on isSymmetric(["2",2])', () => {
        chai.expect(isSymmetric(["2", 2])).to.be.false;
    });

    // 1 item
    it('should return true on isSymmetric([2])', () => {
        chai.expect(isSymmetric([2])).to.be.true;
    });

    // []
    it('should return true on isSymmetric([])', () => {
        chai.expect(isSymmetric([])).to.be.true;
    });

    // string instead []
    it('should return false on isSymmetric("hello")', () => {
        chai.expect(isSymmetric("hello")).to.be.false;
    });

    // [[], [], []]
    it('should return true on isSymmetric([[1,2], [2], [1,2]])', () => {
        chai.expect(isSymmetric([[1, 2], [2], [1, 2]])).to.be.true;
    });
});