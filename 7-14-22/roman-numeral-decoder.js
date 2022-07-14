// https://www.codewars.com/kata/51b6249c4612257ac0000005/javascript
/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
*/

function solution (roman) {
    const romanArr = roman.split('')

    let total = 0, currentValue, nextValue

    const conversion = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    
    for(let i = 0; i < romanArr.length; i++){
      currentValue = conversion[romanArr[i]]
      
      nextValue = conversion[romanArr[i+1]]
      
      if(currentValue >= nextValue) {
        total += currentValue
      }
      else if(!nextValue) {
        total += currentValue
      }
      else {
        total -= currentValue
      }
    }
    return total
  }