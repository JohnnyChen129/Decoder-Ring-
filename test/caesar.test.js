// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");


    describe("the caesar function should be able to", () => {
      it("should return false if the shift amount is 0 or not present", () => {
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);
        
        expect(actual).to.be.false;
      });
  
      it("encoded result maintains spaces and symbols", () => {
        const message = "Happy! Sandwich Day!";
        const shift = 5;
        const actual = caesar(message, shift);
        const expected = "mfuud! xfsibnhm ifd!";
        expect(actual).to.equal(expected);
      });
  
      it("letters sghould loop around the alphebet", () => {
        const message = "qwertyuiopasdfghjklzxcvbnm";
        const shift = 7;
        const actual = caesar(message, shift);
        const expected = "xdlyafbpvwhzkmnoqrsgejciut";
        expect(actual).to.equal(expected);
      });

      it(" capital letters can be ignored ", () => {
        const message = "TurDuCken";
        const shift = 9;
        const actual = caesar(message, shift);
        const expected = "cdamdltnw";
        expect(actual).to.equal(expected);
      });

      it("should return input message as result if input is not a letter", () => {
        const message = "2345678";
        const shift = 6;
        const actual = caesar(message, shift);
        const expected = "2345678";
        expect(actual).to.equal(expected);
      });
  
    });
