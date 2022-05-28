// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/javascript
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/




function findOutlier(integers){

 // P  Array of numbers, either all even numbers except for one, or all odd numbers except for one. array length will be > 2.
// R  Either the single even number or the single odd number from the given array
// E  [1,1,0,1,1] => 0; [0,0,3,0,0] => 3
// P  Filter through the array and see if there are more even numbers. If there are, filter the original array to find the odd number, otherwise filter through the array to find the one even number.

    if(integers.filter(el => el%2 ==0).length == 1){ // Use .filter() array method to filter any element that is even. If the length of the returned array is 1, then the majority of the array is odd and we will return the single element from that filtered array
      return integers.filter(el => el%2 == 0)[0]
    }else {
      return integers.filter(el => el%2 != 0)[0] // This will return the odd number from the array since the if statement was false.
    }
  }