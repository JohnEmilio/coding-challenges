// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/javascript
/*
Build Tower

Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
    let newArr = [] //Initialize an array, and both strings
    let str = '*'
    let space = ' '
    for(let i = 0; i < nFloors; i++){
      newArr.push(space.repeat(nFloors - i - 1) + str + space.repeat(nFloors - i - 1)) // Loop through array pushing the strings with the spaces (if is meets the critera in the repeat), and pushing the '*' string
      str += '**'
    }
    return newArr
  }