// https://www.codewars.com/kata/529b418d533b76924600085d/javascript
/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/

function toUnderscore(string) {
    let res = ''
    if (typeof string === 'number') return string.toString()
    for (let i = 0; i < string.length; i++) {
        if (i != 0 && string[i] === string[i].toUpperCase() && !string[i].match(/\d/)) {
            res = res + '_' + string[i]
        }
        else res = res + string[i]
    }
    return res.toLowerCase()
}