// https://www.codewars.com/kata/5264d2b162488dc400000001/javascript
/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

*/

function spinWords(string){
    return string.split(' ').map( el => el.length > 4 ? el.split('').reverse().join('') : el).join(' ');
    //Take the string, use the string method .split() to make an array containing each word in the string. Then, using the array .map() method, check if each word is greater than 4 letters. If it is greater than four letters, use the .split method to split the word into an array of the letters, use the .reverse() array method to reverse the letter orders, and then the .join() method to join the reversed letters back to form the word but reversed. After each element has been checked, we use the .join() array method again to join the words the way they were in the original string, but this time, any word that was greater than 4 letters has been reversed.
  }