// https://www.codewars.com/kata/546f922b54af40e1e90001da/javascript
/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabetPosition("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

*/

function alphabetPosition(text) {
    let arr = []
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for(let i = 0; i < text.length; i++){
      let code = text[i].toLowerCase()
      if(alphabet.indexOf(code) != -1){ //After running a test case, any character that was not in the alphabet string would log -1, so therefore we want any index of a character that is not -1. 
        arr.push(alphabet.indexOf(code)+1) //Since the alhpabet string starts with a=0, and the return needs to be a=1 and so forth, we add 1 to the index number we get.
      }
    }
    return arr.join(' ') //This will join all the index numbers into a string with a space between each number.
  }