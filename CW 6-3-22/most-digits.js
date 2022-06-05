// https://www.codewars.com/kata/58daa7617332e59593000006/javascript
/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
[1,3,100] => 100
[10,20,500,900] => 500
*/


function findLongest(array){
    let newArr = array.map(el => String(el)).map(el => el.length)
    return array[newArr.indexOf(Math.max(...newArr))]
  }