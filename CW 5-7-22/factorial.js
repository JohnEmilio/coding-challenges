// https://www.codewars.com/kata/57a049e253ba33ac5e000212/javascript
/*
Your task is to write function factorial.
*/

function factorial(n){
    let sum = 1
    while(n > 1){
      sum += sum * (n-1)
      n--
    }
    return sum
}