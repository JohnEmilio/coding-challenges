// https://www.codewars.com/kata/52fba66badcd10859f00097e

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/



// function disemvowel(str) {
//     let newArr = str.split('')
//     for(let i=0;i<newArr.length;i++){
//       if(newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o' || newArr[i] === 'u' || newArr[i] === 'A' || newArr[i] === 'E' || newArr[i] === 'I' || newArr[i] === 'O' || newArr[i] === 'U'){
//         newArr[i] = ''
//       }
//     }
//     return newArr.join('')
//   }


// Or


  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')
  }