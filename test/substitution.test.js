const { expect } = require("chai");
const { substitution } = require("../src/substitution");


//The input could include spaces and letters as well as special characters such as #, $, *, etc.
//Spaces should be maintained throughout.
//Capital letters can be ignored.
//The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
//ll the characters in the alphabet parameter must be unique. Otherwise, it should return false.\

describe("encoding a message", () => {
    it("The input could include spaces and letters as well as special characters such as #, $, *, etc.", () => {
        const message = "meowy!! things";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "ysvkp jdxgri";
  
        expect(actual).to.equal(expected);
      });

    it("Spaces should be maintained throughout.", () => {
        const message = "me ssa ge";
        const alphabet = "ZombiesplaycrwthqujFDGxvnk";
        const actual = substitution(message, alphabet);
        const expected = "ri jjz si";
  
        expect(actual).to.equal(expected);
      });

      it("Capital letters can be ignored.", () => {
        const message = "Tony The Tiger Once stood HeRe";
        const alphabet = "Cwmfjordvegbalksnthpyxquiz";
        const actual = substitution(message, alphabet);
        const expected = "pkli pdj pvrjt klmj hpkkf djtj";
  
        expect(actual).to.equal(expected);
      });

      it("The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false", () => {
        const message = "message";
      const alphabet = "one";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
      });

      it("all the characters in the alphabet parameter must be unique. Otherwise, it should return false.", () => {
        const message = "message";
        const alphabet = "dkajhdslkhsakdhlhdsaldhsal";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
    });