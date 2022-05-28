//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript
/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let numArr = x.split(' ') // Use these two split methods to first get each word into an element of an array, then the second split method will procude an array with each element being a letter from each word. We end up with an array where each element is an array of the letters from a single word.
                  .map(el => el.split(''))
                  .map(el => el.map(el => el.charCodeAt() - 96)) // Convert the letter's into integer values so we can find which word has the greatest value. Use the reduce method to do so.
                  .map(el => el.reduce((a,b)=> a+b, 0))
    let max = Math.max(...numArr) // Take the array of integer values and find the max value so we can find the index of that value in the integer array.
    return x.split(' ')[numArr.indexOf(max)] // Using the max integer value we find its index in the array of integers, which will be equal to the index of an array where each word is an element.
  }