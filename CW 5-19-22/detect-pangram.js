// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/javascript
/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

function isPangram(string){
    string = string.toLowerCase() // set all letters to lowercase
    let abc = 'abcdefghijklmnopqrstuvwxyz' // Place all letters in alphabet into a string.
    return abc.split('').every(letter => string.indexOf(letter) != -1) // Use array method .split() to take all the letters in the alphabet string and place each letter into an element in an array. Next using array method .every() (which produces a boolean result) we will see if each letter in the alphabet array matches to an index in the lowercased string parameter. If a letter from the alphabet is not in the string no index is found and thus a -1 is produced resulting in a false statement. If every letter in the alphabet array is found in the string arguement, then a boolean true is returned.
  }