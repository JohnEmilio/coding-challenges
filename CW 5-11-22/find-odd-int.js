// https://www.codewars.com/kata/54da5a58ea159efa38000836/javascript
/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

*/

function findOdd(A) {
    let count = 0
    A = A.sort((a,b) => a>b)
    for(let i = 0; i < A.length; i++){
      for(let j = 0; j < A.length; j++){ //Loops through the array comparing each element to the next. After all the elements have been compared to one element, the next element will compare itself to all the other elements and so forth. After each check of the elements, the for loop with the 'i' initialization will check if the counter if odd or even, which if A[i] has an odd amount, the counter will have increased an odd amount in the 'j' for loop, at which point we can return A[i] to be the solution.
        if(A[i] == A[j]){
          count++
        }
        console.log(count, A[i], A[j])
      }
      if(count % 2 != 0){
        return A[i]
      }
    }
  }