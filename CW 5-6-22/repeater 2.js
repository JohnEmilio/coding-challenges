// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/javascript
/*
Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.
Example: (Input1, Input2 --> Output)

"a", 5 --> "aaaaa"


*/


function repeater(string, n){
    return string.repeat(n)
}

function repeater(string, n){

    let sum = string
    for(let i = 1; i < n; i++){
      sum+= string 
    }
  
    return sum
  }