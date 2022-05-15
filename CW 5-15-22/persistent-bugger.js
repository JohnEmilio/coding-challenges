// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
    let total = 0
    let arr = num.toString().split('').map(el => Number(el)) //Take num and place it into and array where each element is a number in num.
    while(num >= 10){
      num = arr.reduce((a,b) => a*b) //Use .reduce array method to multiple each array element (the numbers in num) until they are a single digit number. Then reassign num to equal the integer.
      arr = num.toString().split('').map(el => Number(el)) //Reasign the array variable like we did previously
      total ++ //This logs a running number of times we have to reduce the original num.
    }
   return total
 }