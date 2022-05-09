// https://www.codewars.com/kata/525f50e3b73515a6db000b83/javascript
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!

*/

function createPhoneNumber(numbers){   
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(6,numbers.length).join('')}`;
  } // Take the numbers array, use the array method .slice() at various intervals to include the appropriate numbers. Then use the array method .join() to join the numbers. The slice method and join method are done son the numbers array consecutively and inside of template literal.