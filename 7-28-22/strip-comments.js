// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/javascript
/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
    let arr = input.split("\n")
    
    for(let i = 0; i < markers.length; i++){
      for(let j = 0; j < arr.length; j++){
        if(arr[j].includes(markers[i])){
          arr[j] = arr[j].slice(0, arr[j].indexOf(markers[i])).trim()
        }
      }
    }
    return arr.join("\n")
  };