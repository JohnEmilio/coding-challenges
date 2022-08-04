// https://www.codewars.com/kata/5a87449ab1710171300000fd/javascript
/*
Definition
A Tidy number is a number whose digits are in non-decreasing order.

Task
Given a number, Find if it is Tidy or not . 

Notes

    Number passed is always Positive .

    Return the result as a Boolean

Input >> Output Examples
tidyNumber (12) ==> return (true)

Explanation:
The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
*/

function tidyNumber(n){
    let a = String(n).split('').map(num => Number(num))
    for (let i = 0; i < a.length; i++){
      if(a[i+1] < a[i]) return false
    } 
    return true
  }
