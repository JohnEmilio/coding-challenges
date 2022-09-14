// https://www.codewars.com/kata/56f3a1e899b386da78000732/javascript
/*
Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
Each part will be in a string
Elements of a pair must be in the same order as in the original array.

Exp:
    a = ["az", "toto", "picaro", "zone", "kiwi"] -->
        [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
*/


function partlist(arr) {
    let res = []

    for (let i = 0; i < arr.length - 1; i++) {
        let curr = arr.slice(0, i + 1)
        res.push([curr.join(' '), arr.slice(i + 1).join(' ')])
    }

    return res
}