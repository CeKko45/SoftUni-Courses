const chai = require("chai");

const lottery = {
  buyLotteryTicket(ticketPrice, ticketCount, buy) {
    if (buy === false) {
      throw new Error("Unable to buy lottery ticket!");
    } else {
      if (
        ticketPrice <= 0 ||
        ticketCount < 1 ||
        typeof ticketPrice !== "number" ||
        typeof ticketCount !== "number" ||
        typeof buy !== "boolean"
      ) {
        throw new Error("Invalid input!");
      } else {
        let totalPrice = ticketPrice * ticketCount;
        return `You bought ${ticketCount} tickets for ${totalPrice}$.`;
      }
    }
  },
  checkTicket(ticketNumbers, luckyNumbers) {
    if (
      !Array.isArray(ticketNumbers) ||
      !Array.isArray(luckyNumbers) ||
      ticketNumbers.length !== 6 ||
      luckyNumbers.length !== 6
    ) {
      throw new Error("Invalid input!");
    }

    const uniqueTicketNumbers = ticketNumbers.filter(
      (number, index, array) => array.indexOf(number) === index
    );
    let winningNumbers = 0;

    for (const number of uniqueTicketNumbers) {
      if (luckyNumbers.includes(number)) {
        winningNumbers++;
      }
    }

    if (winningNumbers >= 3 && winningNumbers < 6) {
      return "Congratulations you win, check your reward!";
    } else if (winningNumbers === 6) {
      return "You win the JACKPOT!!!";
    }
  }
  ,
  secondChance(ticketID, secondChanceWinningIDs) {
    if (typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)) {
      throw new Error("Invalid input!");
    }
    if (secondChanceWinningIDs.includes(ticketID)) {
      return "You win our second chance prize!";
    } else {
      return "Sorry, your ticket didn't win!";
    }
  },
};

describe('Testing lottery object', function () {
  describe('Testing buyLotteryTicket method', function () {
    it('Testing input with invalid parameters and boolean true', function () {
      chai.expect(() => { lottery.buyLotteryTicket("test", 1, true) }).to.throw("Invalid input!");
      chai.expect(() => { lottery.buyLotteryTicket(15, 'test', true) }).to.throw("Invalid input!");
      chai.expect(() => { lottery.buyLotteryTicket(15, 1, 'test') }).to.throw("Invalid input!");
      chai.expect(() => { lottery.buyLotteryTicket(0, 1, true) }).to.throw("Invalid input!");
      chai.expect(() => { lottery.buyLotteryTicket(15, 0, true) }).to.throw("Invalid input!");
    });
    it('Testing input with invalid parameters and boolean false', function () {
      chai.expect(() => { lottery.buyLotteryTicket(15, 1, false) }).to.throw("Unable to buy lottery ticket!");
    });
    it('Testing with valid parameters', function () {
      chai.expect(lottery.buyLotteryTicket(15, 1, true)).to.equal(`You bought 1 tickets for 15$.`);
      chai.expect(lottery.buyLotteryTicket(15, 3, true)).to.equal(`You bought 3 tickets for 45$.`);
    })
  });

  describe('Testing checkTicket method', function () {
    it('Testing input with invalid parameters', function () {
      chai.expect(() => { lottery.checkTicket("test", [1, 2, 3, 4, 5, 6]) }).to.throw("Invalid input!");
      chai.expect(() => { lottery.checkTicket([1, 2, 3, 4, 5, 6], 'test') }).to.throw("Invalid input!");
    });
    it('Testing with valid parameters and 3 winning numbers', function () {
      chai.expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal(`Congratulations you win, check your reward!`);
    });
    it('Testing with valid parameters and 6 winning numbers', function () {
      chai.expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal(`You win the JACKPOT!!!`);
    });
  });

  describe('Testing secondChance method', function () {
    it('Testing input with invalid parameters', function () {
      chai.expect(() => { lottery.secondChance("test", [1, 2, 3, 4, 5, 6]) }).to.throw("Invalid input!");
      chai.expect(() => { lottery.secondChance(3, 'test') }).to.throw("Invalid input!");
    });
    it('Testing with valid parameters and winning second chance', function () {
      chai.expect(lottery.secondChance(201, [200, 201, 202, 203, 204, 205])).to.equal(`You win our second chance prize!`);
    });
    it('Testing with valid parameters and not winning second chance', function () {
      chai.expect(lottery.secondChance(199, [200, 201, 202, 203, 204, 205])).to.equal(`Sorry, your ticket didn't win!`);
    });
  });
});