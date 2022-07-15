// https://www.codewars.com/kata/5503013e34137eeeaa001648/javascript
/*
amie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

Task
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n){
    let half = Math.floor(n/2) //This is the half-way point of the diamond (in a zero index object)
    let stars = "*"
    let diamond = []
  
    for(let i = 0; i < n; i++){
        //The half variable initialized above is used to keep track of how many spaces we will need. While we areless than the half way mark, we will decrement the variable, and while we are over the half mark we will increment the variable.
      if(i < Math.floor(n/2)){ //While the loop is less than the half way mark, place variable half number of spaces, stars and the new line. After pushing the into the diamond array, add two stars to the stars string, then decrement half variable by 1.
        const str = " ".repeat(half) + stars + "\n"
        diamond.push(str)
        stars += "**"
        half--
      }
      else if (i === Math.floor(n/2)){ //This is the halfway mark. Push whatever the current stars string is with the new line syntax into the array. Afterwards, slice the stars string, removing 2 stars and increment the half variable by 1.
        const str = stars + "\n"
        diamond.push(str)
        stars = stars.slice(0, -2)
        half++
      }
      else{ //This is over half way done. Add half number of spaces, the stars string, and the new line syntax to the array. Then remove 2 stars from the stars string using slice, and increment the half variable by 1.
        const str = " ".repeat(half) + stars + "\n"
        diamond.push(str)
        stars = stars.slice(0, -2)
        half++
      }
    }

    
    return n < 1 || n%2 === 0 ? null : diamond.join("")
  }