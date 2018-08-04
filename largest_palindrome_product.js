/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  console.log("checkem", digits);
  // do your work here
  if (digits === 2) {
    factor_0 = 91;
    factor_1 = 99;
    for (let i=1; i<=factor_0; i++) {
      for (let j=1; j<=factor_1; j++) {
        let product = i * j;
        if (product.toString() === product.toString().split("").reverse().join("")) {
          if (product > palindromeNumber) {
            palindromeNumber = Number(product);
          }
        }
      }
    } 
  } else if (digits === 3) {
    factor_0 = 913;
    factor_1 = 993;
    for (let i=1; i<=factor_0; i++) {
      for (let j=1; j<=factor_1; j++) {
        let product = i * j;
        if (product.toString() === product.toString().split("").reverse().join("")) {
          if (product > palindromeNumber) {
            palindromeNumber = Number(product);
          }
        }
      }
    }
  }


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber,
    // palindromeNumber2 : palindromeNumber2
  };
};
