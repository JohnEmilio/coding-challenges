// https://www.codewars.com/kata/59cfc000aeb2844d16000075/javascript

/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!
*/
function capitalize(s){
    let evenArr = []
    let oddArr = []
    for(let i = 0; i < s.length; i++){
      if(i === 0){
        evenArr.push(s[i].toUpperCase())
        oddArr.push(s[i])
      }else if (i % 2 == 0){
        evenArr.push(s[i].toUpperCase())
        oddArr.push(s[i])
      }else{
        evenArr.push(s[i])
        oddArr.push(s[i].toUpperCase())
      }
    }
    return [evenArr.join(''), oddArr.join('')]
  };

//  OR

function capitalize(s){
    let even = s.split('').map((el, ind) => ind % 2 === 0 ? el.toUpperCase() : el).join('')
    let odd = s.split('').map((el, ind) => ind % 2 !== 0 ? el.toUpperCase() : el).join('')
    return [even, odd]
  };