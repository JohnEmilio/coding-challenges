// https://www.codewars.com/kata/56060ba7b02b967eb1000013/javascript
/*
The number six has this interesting property, and is the smallest number in having it (after the integer 1 that obviously fulfills this condition): Its cube, is divisible by the sum of its divisors. Let's see it:

6 ^ 3 = 216
divisors of 6: 1, 2, 3, 6
sum of its divisors= 1 + 2 + 3 + 6 = 12
And 216 / 12 = 18 (integer) and 18.12 = 216
The first terms of this sequence are:

n    a(n)
1       6 
2      28
3      30
4      84
5     102
Your challenge is to create a function that receives an ordinal number n of the term of the sequence as an argument, and returns the nth term of that sequece of integers.

Let's see some cases (input ------> output):

4 ------> 84
/// divisors of 84 : 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84
    sum of divisors = 1 + 2 + 3 + 4 + 6 + 7 + 12 + 14 + 21 + 28 + 42 + 84 = 224
    cube of 84 = 84^3 = 592704
    592704 is a multiple of 224///

5 ------> 102
Your code should use memoization in order to have higher speed for testing. Does your code reach up to the 120-th term? We can get this upper limit in the tests.

Enjoy it and happy coding!!
*/

function intCubeSumDiv(n) {
    let map = { 1: 6, 2: 28, 3: 30, 4: 84, 5: 102 } // The map of number we currently know meet the criteria
    let last = 5 // The last "index" of our map
    if (map[n]) { // If the integer passes in as an argument is in our map return that corresponding value
        return map[n]
    }
    else {
        let x = 103 // Start at the number after the last number recorded in the map
        while (true) {
            let sum = 1 // Our sum will always include 1 and the number
            if (Math.pow(x, 3) == Math.floor(x ** 3)) { // If x pow 3 is a whole integer we continue
                let max = Math.floor(Math.sqrt(x))
                sum += x
                for (let i = 2; i <= max; i++) {
                    let j = x / i
                    if (j == Math.floor(j)) { // If the we find a divisor, add it to the sum with its counterpart 
                        sum += i + j
                    }
                }
                if ((x ** 3) / sum == Math.floor((x ** 3) / sum)) { // If the x cubed divided by the sum of all of x's divisors is a whole integer, we will log it into the map with the next index
                    map[last + 1] = x
                    if (last + 1 == n) { // If the index we just logged is n, return the number otherwise increase the last index by one
                        return map[last + 1]
                    }
                    else {
                        last++
                    }
                }
            }
            x++
        }
    }
}