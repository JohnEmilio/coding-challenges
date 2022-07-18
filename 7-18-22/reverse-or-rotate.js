// https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991/javascript
/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

function revrot(str, sz) {
    if(!sz || !str || str.length < sz){ //Set up to check for edge cases that would return an empty string
      return ""
    }
    
    let arr = [], result = []
    let sliced
    
    while(str.length >= sz){ //This gets all the available substrings from the original str that are length sz, as per the directions, and pushes them into an array for use
      sliced = str.slice(0, sz)
      arr.push(sliced)
      str = str.slice(sz)
    }
    
    arr = arr.map(el => el.split("").map(el => Number(el))) //Change each substring into an array of digits so we can check if the sum of all the digits cubed is divisible by 2
    
    arr.forEach((el, ind) => {
      if (el.reduce((a,b) => a + b**3, 0) % 2 ==0) { //This checks that sum/cubed/divisible parameter set by the question
        result.push(el.reverse().join("").split(",").join("")) //If true we will reverse the array of digits, join the digits into an string, split thme to remove the comma, then rejoin them, and push the substring into the result array
      }
      else {
         el = el.slice(1) + el[0] //Otherwise we will rotate the substring by 1 to the left, then push that result into the result array.
        result.push(el.split(",").join(""))
      }
    })
  
    return result.join("") //Join all the substrings from the result array into one string.
  
  }