// https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript
/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

*/

var countBits = function(n) {
    n = n.toString(2).split('').reduce((a,b) => Number(a) + Number(b)) //Take the integer and convert to binary using the .toString(2) method. Then split the binary string into an array using the .split() method. Then using the array method .reduce() reduce down all the binary digits, which will add all the 1's
    return Number(n)
  };