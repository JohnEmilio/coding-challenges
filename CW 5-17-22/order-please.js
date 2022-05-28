// https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

function order(words){
    let arr = words.split(' ') //Turn the string parameter into an array.
    let newArr = []
    for(let i = 0; i < arr.length; i++){
      let match = Number(arr[i].match(/[0-9]/g)) //Loop through the array, and whatever the number in the string element is, set match equal to that.
      newArr[match-1] = arr[i] // Using match, which is the number from the word string, set that element in the empty array equal to that element in the words array. Subtract 1 from match because the original parameter uses numbers starting at 1, so we have to subtract one to set it in the correct index of the new array as array indexing starts at 0.
      }
    return newArr.join(' ') //Join the new array of words that have been sorted by their number.
  }