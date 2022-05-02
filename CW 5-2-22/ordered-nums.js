// https://www.codewars.com/kata/56b7f2f3f18876033f000307/javascript
/*
Are the numbers in order?

In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

For the purposes of this Kata, you may assume that all inputs are valid, i.e. non-empty arrays containing only integers.

Note that an array of 1 integer is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value. An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.

For example:

inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.

*/

function inAscOrder(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < arr[i+1]){
        sum++
      } // This loop will iterate through the array and for each element that is less than the next element, 1 is added to the sum. If the sum is equal to the total number of element in the array, then all the elements are in ascending order. If sum is less than total number of elements then the array element numbers are not in ascending order.
    }return arr.length-1 === sum
  }