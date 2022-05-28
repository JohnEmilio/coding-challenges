// https://www.codewars.com/kata/550554fd08b86f84fe000a58/javascript
/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: r must be without duplicates.
*/


function inArray(array1,array2){
    return array1.filter(el => array2.find(ele => ele.includes(el))).sort() //Filter array1 to find the substrings that appear in array2 so we can return the filtered and sorted array
  }
  