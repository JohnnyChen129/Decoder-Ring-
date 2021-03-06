// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;
    if(!encode){shift *= -1};
    const abc = [
      "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
      "t","u","v","w","x","y","z",
    ];

    let newArray = [];

    const index = input.toLowerCase().split("");

    for (let j = 0; j < index.length; j++) {
      if (abc.includes(index[j])) {
        let shf = index[j].charCodeAt(0);

        if (shf + shift < 97) {
          shf += 26;
        }
        if (shf + shift > 122) {
          shf -= 26;
        }
        let shifted = String.fromCharCode(shf + shift);

        newArray.push(shifted);
      } else {
        newArray.push(index[j]);
      }
    }
    return newArray.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
