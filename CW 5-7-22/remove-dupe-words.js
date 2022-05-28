// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/javascript
/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'

*/

function removeDuplicateWords (s) {
    let arr = s.split(' ')  //place each word from the string into an element in an array
    let obj = new Set(arr) // create a new Obj from that array removing any duplicates using the Set() constructor
    let newArr = Array.from(obj) // Turn the object from the Set() constructor into an array
    return newArr.join(' ') //Join the newArr into the new string without any duplicates from the original
  }