// https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)

*/

function solution(number){
    let sum = 0
    for(let i = 1; i < number; i++){ //Loop through numbers from 1 to parameter number, if i is a multiple of 3 or 5, add it to the running sum.
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return number < 0 ? 0 : sum //If number is a negative return 0, else return the number sum which has been calculating using the for loop
  }