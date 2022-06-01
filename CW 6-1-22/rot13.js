// https://www.codewars.com/kata/530e15517bc88ac656000716/javascript
/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/

function rot13(message){
    let crypt = {
      a:'n',
      b:'o',
      c:'p',
      d:'q',
      e:'r',
      f:'s',
      g:'t',
      h:'u',
      i:'v',
      j:'w',
      k:'x',
      l:'y',
      m:'z',
      n:'a',
      o:'b',
      p:'c',
      q:'d',
      r:'e',
      s:'f',
      t:'g',
      u:'h',
      v:'i',
      w:'j',
      x:'k',
      y:'l',
      z:'m',
      A:'N',
      B:'O',
      C:'P',
      D:'Q',
      E:'R',
      F:'S',
      G:'T',
      H:'U',
      I:'V',
      J:'W',
      K:'X',
      L:'Y',
      M:'Z',
      N:'A',
      O:'B',
      P:'C',
      Q:'D',
      R:'E',
      S:'F',
      T:'G',
      U:'H',
      V:'I',
      W:'J',
      X:'K',
      Y:'L',
      Z:'M'
    }
    let str = ''
    let letter
    for(let i = 0; i < message.length; i++){
      letter = crypt[message[i]] //Assign letter the value of the encrypted letter
      if(letter == undefined){ //This will check if the value of message[i] is not a letter (for instance if it is a math symbol, blank space, etc) in which case it will return whatever the value from the original string is.
        str += message[i]
      }
      else str += letter
    }
    return str
  }