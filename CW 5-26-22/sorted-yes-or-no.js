// https://www.codewars.com/kata/580a4734d6df748060000045/javascript
/*
Complete the method which accepts an array of integers, and returns one of the following:

    "yes, ascending" - if the numbers in the array are sorted in an ascending order
    "yes, descending" - if the numbers in the array are sorted in a descending order
    "no" - otherwise

You can assume the array will always be valid, and there will always be one correct answer.

*/


function isSortedAndHow(array) {
    let ascendArr = array.filter((el, ind, arr) => el > arr[ind+1]).length == 0 //Using filter to check if the current element is greater than the next element, that element is removed. If it is an ascending array then all the elements will be removed and the length will be zero.
    let descendArr = array.filter((el, ind, arr) => el < arr[ind+1]).length == 0 //Similar to above but if all the elements are less than the next they are removed which means it is a descending array.
    return ascendArr  ? 'yes, ascending' : descendArr  ? 'yes, descending' : 'no'
  }