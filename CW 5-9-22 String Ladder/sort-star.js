// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/javascript
/*
You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

*/

function twoSort(s) {
    s = s.sort(); //Sort array alphabetically
    return s[0].split('').join('***'); //Grab the first element from the sorted array, split the string by each character, then join the string back and place '***' between each letter.
  }