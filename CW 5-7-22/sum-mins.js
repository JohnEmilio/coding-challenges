// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/javascript
/*
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

ENJOY CODING :)
*/


function sumOfMinimums(arr) {
    return arr.map(el => Math.min(...el)).reduce((a,b) => a+b);
    /* Take the parameter, arr, and using .map() method, produce a new array where each element (which in the parameter arr is an array) is spread from the array into the Math method .min() to find the minimum value. Then add all the values in the new array (which are all the minimum values from the original array of arrays) using the array method .reduce()*/
}