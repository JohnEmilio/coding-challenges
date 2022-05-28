// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/javascript
/*
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.

Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.
Example

For example, start with 87:

  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!

4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
*/

var palindromeChainLength = function(n) {
    let sum = 0
    let palindrome = parseInt(String(n).split('').reverse().join('')) //Make a reverse of the parameter n
    while(n != palindrome){ //Use while loop to check for palindrome
      n = parseInt(n) + parseInt(palindrome) //While there is not a palindrome, n increases by the reverse of itself. 
      palindrome = parseInt(String(n).split('').reverse().join('')) //Create a new reverse number of the new n number
      sum++ //Increment sum by one for each iteration
    }
    return sum //Once palindrome has been created, return the sum which is the total number of iterations creating a new n number and checking its palindrome.
  };