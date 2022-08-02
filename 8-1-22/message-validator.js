// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/javascript
/*
In this kata, you have an input string and you should check whether it is a valid message. To decide that, you need to split the string by the numbers, and then compare the numbers with the number of characters in the following substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2; as the numbers and the character counts match, the result is true.

Notes:

Messages are composed of only letters and digits
Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid message
Every number must match the number of character in the following substring, otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
If the message is an empty string, you should return true
*/

function isAValidMessage(message){
    if(message == "") return true
    if(!Number(message[0]) || Number(message[message.length-1])) return false
    
    let num = ''
    let words = 0
    let numArr = []
    let wordArr = []
    
    for(let i = 0; i < message.length; i++){
      if(Number(message[i])){
        num += message[i]
        if(!Number(message[i+1])){
          numArr.push(Number(num))
          num = ''
        }
      }
      else{
        words += 1
        if(Number(message[i+1] || i+1 == message.length)){
          wordArr.push(words)
          words = 0
        }
      }
    }
    
    for(let i = 0; i < numArr.length; i++){
      console.log(numArr, wordArr)
      if(numArr[i] != wordArr[i]) return false
    }
    return true
  }