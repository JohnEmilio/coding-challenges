// https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript
/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/


function toWeirdCase(string){
    let result = '' //Initialize our final result string
    string.split(' ').forEach(el => { //Split the arguement string into an array of each word from the string
      el.split('').forEach((el, ind) =>{ //Split each word from the arguement string array into the individual letters, then compare the letter's index to see if they are odd or even to make them the associated case.
        if(ind % 2 == 0){
          result += el.toUpperCase()
        }
        else result += el.toLowerCase()
      })
    })
    
    result = result.split('') //Split the result word into an array so we can add the spaces below
    
    for(let i = 0; i < string.length; i++){
      if(string[i] == ' '){
        result.splice(i,0, ' ') //If the index of the arguement array is a space, we will splice the result word to include the space
      }
    }
    return result.join('') //Join the result word back together making the alternating case string.
  }