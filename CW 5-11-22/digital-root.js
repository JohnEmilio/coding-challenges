// https://www.codewars.com/kata/541c8630095125aba6000c00/javascript
/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples

    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

function digital_root(n) {
    let num = n.toString().split('').reduce((a,b) => Number(a) + Number(b)) //Take the number, use the .toString method to turn the number to a string, then use the .split method to split the stringified number into an array. Use the .reduce array method to add the digits of the original number. 
    while(num >= 10){ //If the digits of the number add to be greater or equal to 10, it will be reduced further using the same template as above.
      num = num.toString().split('').reduce((a,b) => Number(a) + Number(b))
    }
    return Number(num)
  }