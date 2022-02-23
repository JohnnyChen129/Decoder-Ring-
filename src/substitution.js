// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) return false;
    if (alphabet.length !== 26)
      // alphababet must have 16 unique charactors.
      return false;
    if (
      ![...alphabet].every(
        (letter) => alphabet.indexOf(letter) === alphabet.lastIndexOf(letter)
      )
    )
      return false;
    let sub = [..."abcdefghijklmnopqrstuvwxyz"];
    let alpha = [...alphabet];
    input = [...input.toLowerCase()];
    for (let letter in input) {
      if (input[letter] === " ") input[letter] = " ";
      else {
        encode
          ?(input[letter] = alpha[sub.indexOf(input[letter])])
          :(input[letter] = sub[alpha.indexOf(input[letter])]);
      }
    }
    return input.join("").toLowerCase();
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
