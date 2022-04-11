// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" "); //This will split the string by each letter into an array, reverse the letters and then join them back into their original words. This will result in a string of reversed words and reversed order from the original string. Next we have to reverse the words as a whole and join them back so they are in their original order but reversed.
  }