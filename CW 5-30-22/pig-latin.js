// https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript
/*Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
    let end = ''
    if(str.match(/[.!?]/)){ //Remove the punctuation from the end of the string. This only works if it is a single sentence string. All the code could be refactored using replace method and a regular expression
      end = str.slice(-2) 
      str = str.slice(0, str.length-2)
    }
    let arr = str.split(' ')
    return arr.map(el => el.slice(1) + el.slice(0,1) + 'ay').join(' ') + end
  }