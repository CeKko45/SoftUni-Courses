const chai = require("chai");
const expect = chai.expect;

// the function
function lookupChar(string, index) {
  if (typeof string !== "string" || !Number.isInteger(index)) {
    return undefined;
  }

  if (string.length <= index || index < 0) {
    return "Incorrect index";
  }

  return string.charAt(index);
}

// the tests
describe("retrieve character at index from string parameter", () => {
  it("valid input -> (a, 0) => a", () => {
    chai.expect(lookupChar("a", 0)).to.equal("a");
  });

  it("valid input -> (ab, 1) => b", () => {
    chai.expect(lookupChar("ab", 1)).to.equal("b");
  });

  it("invalid input - second parameter is floating point number", () => {
    chai.expect(lookupChar("a", 1.1)).to.be.undefined;
  });

  it("invalid input - first parameter not a string", () => {
    chai.expect(lookupChar(0, 0)).to.be.undefined;
  });

  it("invalid input - second parameter is string", () => {
    chai.expect(lookupChar("a", "a")).to.be.undefined;
  });

  it("invalid input - second parameter is negative number", () => {
    chai.expect(lookupChar("a", -1)).to.equal("Incorrect index");
  });

  it("invalid input - second parameter is out of bounderies", () => {
    chai.expect(lookupChar("a", 1)).to.equal("Incorrect index");
  });
});
