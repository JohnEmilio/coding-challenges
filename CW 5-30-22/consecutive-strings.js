// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript 
/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

Note
consecutive strings : follow one after another without an interruption
*/
function longestConsec(s, k) {
    if(s.length == 0 || k <= 0 || k > s.length){return ''} //Set parameters to instantly return answer is parameters not met
    let newArr = []; //Initialize a new empty array we will use for comparison later
    for(let i = 0; i < s.length; i++){
      newArr.push(s.slice(i, i+k)) //Grab all the elements from i through k on each iteration of the loop so we can find the longest concatenated strings
    }
    let l = newArr.map(el => el.map(el => el.length).reduce((a,b) => a+b)) //Using the array of arrays with the words i through k, we can reduce them down to find the total length of the strings together. Afterwards we will use his number to find the index of those strings after which we can join them together making the largest string possible including k number of strings.
    return newArr[l.indexOf(Math.max(...l))].join('')
  }