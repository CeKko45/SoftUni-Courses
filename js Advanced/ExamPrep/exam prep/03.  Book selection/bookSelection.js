const chai = require("chai");

const bookSelection = {
  isGenreSuitable(genre, age) {
    if (age <= 12 && (genre === "Thriller" || genre === "Horror")) {
      return `Books with ${genre} genre are not suitable for kids at ${age} age`;
    } else {
      return `Those books are suitable`;
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let result = budget - price;

    if (result < 0) {
      return "You don't have enough money";
    } else {
      return `Book bought. You have ${result}$ left`;
    }
  },
  suitableTitles(array, wantedGenre) {
    let resultArr = [];

    if (!Array.isArray(array) || typeof wantedGenre !== "string") {
      throw new Error("Invalid input");
    }
    array.map((obj) => {
      if (obj.genre === wantedGenre) {
        resultArr.push(obj.title);
      }
    });
    return resultArr;
  },
};

describe("bookSelection tests", function () {
  describe("is Genre Suitable", function () {
    it("with Thriller of Horror genre, should return correct", function () {
      //Arrange
      let genre1 = "Thriller";
      let genre2 = "Horror";
      let age1 = 12;
      let age2 = 13;

      //Act
      let result1 = bookSelection.isGenreSuitable(genre1, age1);
      let result2 = bookSelection.isGenreSuitable(genre2, age1);
      let result3 = bookSelection.isGenreSuitable(genre1, age2);
      let result4 = bookSelection.isGenreSuitable(genre2, age2);

      //Assert
      chai.expect(result1).to.equal(`Books with ${genre1} genre are not suitable for kids at ${age1} age`);
      chai.expect(result2).to.equal(`Books with ${genre2} genre are not suitable for kids at ${age1} age`);
      chai.expect(result3).to.equal("Those books are suitable");
      chai.expect(result4).to.equal("Those books are suitable");
    })

    it("with different genre, should return correct", function () {
      //Arrange
      let genre1 = "Something";
      let genre2 = "Some Genre";
      let age1 = 12;
      let age2 = 13;

      //Act
      let result1 = bookSelection.isGenreSuitable(genre1, age1);
      let result2 = bookSelection.isGenreSuitable(genre2, age1);
      let result3 = bookSelection.isGenreSuitable(genre1, age2);
      let result4 = bookSelection.isGenreSuitable(genre2, age2);

      //Assert
      chai.expect(result1).to.equal("Those books are suitable");
      chai.expect(result2).to.equal("Those books are suitable");
      chai.expect(result3).to.equal("Those books are suitable");
      chai.expect(result4).to.equal("Those books are suitable");
    })
  })

  describe("isItAffordable", function () {
    it("with non-number price and budget, should throw Error", function () {
      //Arrange
      let price = "20";
      let budget = "30";

      //Act
      let result1Func = () => bookSelection.isItAffordable(price, 30);
      let result2Func = () => bookSelection.isItAffordable(20, budget);

      //Assert
      chai.expect(result1Func).to.throw(Error, "Invalid input");
      chai.expect(result2Func).to.throw(Error, "Invalid input");
    })

    it("with more budget than price, should return correct", function () {
      //Arrange
      let price = 30;
      let price1 = 22.3;
      let budget = 30;
      let budget1 = 33.3;

      //Act
      let result1 = bookSelection.isItAffordable(price, budget);
      let result2 = bookSelection.isItAffordable(price1, budget1);

      //Assert
      chai.expect(result1).to.equal(`Book bought. You have ${budget - price}$ left`);
      chai.expect(result2).to.equal(`Book bought. You have ${budget1 - price1}$ left`);
    })

    it("with less budget than price, should return correct", function () {
      //Arrange
      let price = 31;
      let price1 = 32.3;
      let budget = 30;
      let budget1 = 23.3;

      //Act
      let result1 = bookSelection.isItAffordable(price, budget);
      let result2 = bookSelection.isItAffordable(price1, budget1);

      //Assert
      chai.expect(result1).to.equal("You don't have enough money");
      chai.expect(result2).to.equal("You don't have enough money");
    })
  })
  describe("suitableTitles", function () {
    it("with non array books and non-string genre, should return error", function () {
      let arr = "test";
      let arr1 = [{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Some Title", genre: "Mystery" }];
      let genre = 23;

      let result1Func = () => bookSelection.suitableTitles(arr, "test");
      let result2Func = () => bookSelection.suitableTitles(arr1, genre);

      chai.expect(result1Func).to.throw(Error, "Invalid input");
      chai.expect(result2Func).to.throw(Error, "Invalid input");
    })

    it("with correct array books and genre, should return correct", function () {
      let arr1 = [{ title: "The Da Vinci Code", genre: "Thriller" }, { title: "Some Title", genre: "Thrill" }, { title: "Thrill", genre: "Random" }];
      let genre = "Thrill";
      let result = arr1.filter(x => x.genre === genre)
        .map(x => x.title);

      let result1 = bookSelection.suitableTitles(arr1, genre);
      let result2 = bookSelection.suitableTitles([], genre);

      chai.expect(result1).to.deep.equal(result);
      chai.expect(result2).to.deep.equal([]);
    })
  })
})