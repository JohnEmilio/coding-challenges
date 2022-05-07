//https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/javascript
/*
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/


function flattenAndSort(array) {
    let newArr = []
    for(let i = 0; i < array.length; i++){
      if(array[i].length > 0){
        newArr = newArr.concat(array[i]) //Adds the array within the element of parameter array into the newArr; If the element is an empty array it is disregarded.
      }
    }
    return newArr.sort((a,b) => a-b); // Sort the newArr elements from lowest to highest number
  }