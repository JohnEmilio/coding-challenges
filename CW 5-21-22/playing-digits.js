// https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript
/*
Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/



function digPow(n, p){
    let numArr = String(n).split('').map(el => Number(el)) //Turn the number into an array where each digit is an element.
    let sum = 0
    for(let i = 0; i < numArr.length; i++){
      sum += Math.pow(numArr[i],p) // Loop through the array and find the base-exponent value of that element, being the base, and the p value, being the exponenet. At the end of each iteration add one to p such as in the examples.
      p++
    }
    return Number.isInteger(sum/n) ? sum/n : -1 //If the total sum of all the numbers based with their exponent, p, divided by the original number, n, is an integer return that number otherwise return -1.
  }

  //Code below has been refractored
function digPow(n, p){
    let numArr = String(n).split('').map(el => Number(el)) //Turn the number into an array where each digit is an element.
    let sum = numArr.reduce((prev, curr, ind)=>prev + Math.pow(curr, ind+p) ,0) / n //Reduce the array using the same principle as above whre we find the base-exponent value and add it together, then divide by n.
    return Number.isInteger(sum) ? sum : -1 
  }