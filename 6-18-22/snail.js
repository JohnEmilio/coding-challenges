// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/


snail = function(array) {
    let finArr = []
    while(array.length > 0){
      finArr.push(...array.shift())
      for (let i = 0; i < array.length; i++){
        finArr.push(array[i].pop())
      }
      finArr.push(...(array.pop() || []).reverse())
      for(let i = array.length-1; i >= 0; i--){
        finArr.push(array[i].shift())
      }
    }
    return finArr
  }