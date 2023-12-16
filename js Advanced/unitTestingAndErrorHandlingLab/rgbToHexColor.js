const chai = require("chai");

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255)) {
        return undefined; // Red value is invalid
    }
    if (!Number.isInteger(green) || (green < 0) || (green > 255)) {
        return undefined; // Green value is invalid
    }
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255)) {
        return undefined; // Blue value is invalid
    }
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}


describe("rgbToHex", function () {

    it("with non integer red, should return undefined", function () {
        //Arrange
        let red1 = 12.5;
        let red2 = "100";
        let blue = 100;
        let green = 100;

        //Act
        let result1 = rgbToHexColor(red1, blue, green);
        let result2 = rgbToHexColor(red2, blue, green);

        //Assert
        chai.expect(result1).to.be.undefined;
        chai.expect(result2).to.be.undefined;
    })

    it("edge cases red", function () {
        //Arrange
        let red1 = 0;
        let red2 = 255;
        let red3 = -1;
        let red4 = 256;
        let blue = 100;
        let green = 100;

        //Act
        let result1 = rgbToHexColor(red1, blue, green);
        let result2 = rgbToHexColor(red2, blue, green);
        let result3 = rgbToHexColor(red3, blue, green);
        let result4 = rgbToHexColor(red4, blue, green);

        //Assert
        chai.expect(result1).to.equal("#006464");
        chai.expect(result2).to.equal("#FF6464");
        chai.expect(result3).to.be.undefined;
        chai.expect(result4).to.be.undefined;
    })

    it("with non integer blue, should return undefined", function () {
        //Arrange
        let blue1 = 12.5;
        let blue2 = "100";
        let red = 100;
        let green = 100;

        //Act
        let result1 = rgbToHexColor(red, blue1, green);
        let result2 = rgbToHexColor(red, blue2, green);

        //Assert
        chai.expect(result1).to.be.undefined;
        chai.expect(result2).to.be.undefined;
    })

    it("edge cases blue", function () {
        //Arrange
        let blue1 = 0;
        let blue2 = 255;
        let blue3 = -1;
        let blue4 = 256;
        let red = 100;
        let green = 100;

        //Act
        let result1 = rgbToHexColor(red, blue1, green);
        let result2 = rgbToHexColor(red, blue2, green);
        let result3 = rgbToHexColor(red, blue3, green);
        let result4 = rgbToHexColor(red, blue4, green);

        //Assert
        chai.expect(result1).to.equal("#640064");
        chai.expect(result2).to.equal("#64FF64");
        chai.expect(result3).to.be.undefined;
        chai.expect(result4).to.be.undefined;
    })

    it("with non integer green, should return undefined", function () {
        //Arrange
        let green1 = 12.5;
        let green2 = "100";
        let red = 100;
        let blue = 100;

        //Act
        let result1 = rgbToHexColor(red, blue, green1);
        let result2 = rgbToHexColor(red, blue, green2);

        //Assert
        chai.expect(result1).to.be.undefined;
        chai.expect(result2).to.be.undefined;
    })

    it("edge cases green", function () {
        //Arrange
        let green1 = 0;
        let green2 = 255;
        let green3 = -1;
        let green4 = 256;
        let red = 100;
        let blue = 100;

        //Act
        let result1 = rgbToHexColor(red, blue, green1);
        let result2 = rgbToHexColor(red, blue, green2);
        let result3 = rgbToHexColor(red, blue, green3);
        let result4 = rgbToHexColor(red, blue, green4);

        //Assert
        chai.expect(result1).to.equal("#646400");
        chai.expect(result2).to.equal("#6464FF");
        chai.expect(result3).to.be.undefined;
        chai.expect(result4).to.be.undefined;
    })
})