// https://www.codewars.com/kata/59a8570b570190d313000037/javascript
/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

Assume that the input n will always be a positive integer.

Examples: (Input --> output)

2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/


function sumCubes(n){
    let arr = []
    for (let i = 1; i <= n; i++){
      arr.push(i)
    }
    return arr.map(num => num**3).reduce((a,b) => a+b)
  }