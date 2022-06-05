// https://www.codewars.com/kata/5aff237c578a14752d0035ae/javascript
/*
My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.

Example

predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.
*/


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let agesArr = [age1,age2,age3,age4,age5,age6,age7,age8] // Take all the ages and place them into an array
    return Math.floor(Math.sqrt(agesArr.map(el => el*el).reduce((a,b) => a+b))/2)
    //Take array of ages and procude a new array where each age is multiplied by itself using the .map() method. Then add all the ages together using .reduce() method. Using the Math.sqrt() method find square root off all the ages multipled and added, then divide that by 2 and use Math.floor() to round down to the nearest integer.
  }