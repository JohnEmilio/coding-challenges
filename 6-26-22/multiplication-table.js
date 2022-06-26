// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript
/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
    let result = []
  
    for(let i = 1; i <= size; i++){ //Initialize an empty array above, then push "size" number of empty arrays into the main array.
      result.push([])
    }
    
    for(let i = 1; i <= size; i++){ //The first array in the result will be integers from 1 to "size"
      result[0].push(i)
    }
    
    result[0].forEach((num, ind) => { //For Each integer in the first array, we will push that integer plus itself times the index+1 into the next array. 
      for(let i = 1; i < result.length; i++){
        if(ind+1 <= result.length){ //This will make sure we don't try to push into an array that doesn't exist which would give us an error of undefined.
        result[i].push(num+num*i)
        }
      }
    })
    return result
  }