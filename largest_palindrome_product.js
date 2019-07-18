/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  function isPalindrome(num) {
    let stringyNum = num.toString();
    let arrayNum = stringyNum.split("");
    let reverseArr = arrayNum.reverse();
    let reverseStringyNum = reverseArr.join("");

    if (stringyNum === reverseStringyNum) {
      return true;
    } else {
      return false;
    }
  }

  let start = Math.pow(10, digits) - 1;
  console.log(start);

  for (let i = start; i > 0; i--) {
    for (let j = start; j > 0; j--) {
      let number = i * j;
      if (isPalindrome(number) && palindromeNumber < number) {
        factor_0 = i;
        factor_1 = j;
        palindromeNumber = number;
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
