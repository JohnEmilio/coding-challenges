// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript
/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
    let zeros = arr.length //Initialize a variable 'zeros' and set it equal to length of arr so we will be able to find the different after all the zeros are removed.
    arr = arr.filter(el => el !== 0) //Removes all the elements that strictly equal 0 so we can compare the length differences below
    zeros -= arr.length
    for(let i = 0; i < zeros; i++){ //The integer in variable zeros is now equal to the number of zeros removed from the arr. Each iteration of the loop will push a zero to the end of the array for the length difference determined by variable zero.
      arr.push(0)
    }
    return arr 
}

function moveZeros(){
    return arr.filter(el => el !== 0).concat(arr.filter(el => el === 0)) // This refactored code will first filter the arr removing all the zeros then using the concat method we will concat the filtered arr with another filtered arr this time with all the zeros. 
}
