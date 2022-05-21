// https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript
/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

and 1652 (4 digits), which isn't:

    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/

function narcissistic(value) {
    let exp = String(value).split('') // Turn the value into a string and turn that string into an array using .split() method.
    let sum = 0 // Initialize a total variable and set to 0 
    for(let i = 0; i < exp.length; i++){ // Use for loop to increase the sum variable by the value of the base of each number in the original number (which can be found by looping through the array we instantiated), and the exponent which in this case is the length of the array, or how many digits make up the original parameter. 
      sum += Math.pow(exp[i], exp.length)
    }
    return sum == value // If the total sum found by looping over the array is equal to the original parameter, then return true, otherwise return false.
  }