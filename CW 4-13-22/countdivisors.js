// https://www.codewars.com/kata/542c0f198e077084c0000c2e/javascript
/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
Examples (input --> output)

4 --> 3 (1, 2, 4)
5 --> 2 (1, 5)
12 --> 6 (1, 2, 3, 4, 6, 12)
30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
*/

function getDivisorsCnt(n){
    let newArr=[]
    for(let i=1;i<=n;i++){ //Loops through all numbers from 1 to n and if n is divisible will push i to the array
      if(n%i==0){
        newArr.push(i)
      }
    }
    return newArr.length //Array length will give us the number of integers from 1 to n that n is divisible by.
   }