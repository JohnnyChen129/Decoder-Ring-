// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("Polybius function", () => {
    it("When encoding your Polybius function, your output should still be a string.", () => {
      const message = "typhlosion";
      const actual = polybius(message);
      const expected = "44455332134334424333";

      expect(actual).to.equal(expected);
    });

    it("both letters I and J can be converted to 42, but when decoding, both letters should somehow be shown.", () => {
      const message = "jingle";
      const actual = polybius(message);
      const expected = "424233221351";

      expect(actual).to.equal(expected);
    });

    it("Spaces entered in the message should be maintained throughout.", () => {
      const message = "my message for the professor";
      const actual = polybius(message);
      const expected = "2345 23513434112251 124324 443251 532443125134344324";

      expect(actual).to.equal(expected);
    });

    it("Polybius function should ignore capital letters in the message.", () => {
        const message = "I sUrE am ThirSty";
        const actual = polybius(message);
        const expected = "42 34542451 1123 44324224344445";
  
        expect(actual).to.equal(expected);
      });
  });// Write your tests here!
