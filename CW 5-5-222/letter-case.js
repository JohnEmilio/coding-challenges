// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/javascript
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

More examples in test cases. Good luck!

*/

function solve(s){
    let upperChars = s.split('').filter(x => x === x.toUpperCase()).length // Turns the string into two arrays and filters the array, one with all the uppercase letters and one with the lower case letters, then finds the length of each array.
    let lowerChars = s.split('').filter(x => x === x.toLowerCase()).length
    return s.length === lowerChars ? s : upperChars > s.length/2 ? s.toUpperCase() : s.toLowerCase() //If the number of lower charcters is the same as the orignal string length, return the original string, else if the number of upper letters is greater than half the string, return the string toUpperCase(), otherwise return the string toLowerCase()
}