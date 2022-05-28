// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/javascript
/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"

(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function findMissingLetter(array){
    let numArr = array.map((el,ind)=> el.charCodeAt()) //Take the array and create a new array using the character codes from each letter
    numArr = numArr.filter((el,ind,arr) => el+1 != arr[ind+1]) //Filter out the character codes where the next code isn't 1 number higher.
    return String.fromCharCode(numArr[0]+1) //Return the character at the character code that is one number greater than the filtered numbers.
  }