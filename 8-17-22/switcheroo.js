// https://www.codewars.com/kata/57f759bb664021a30300007d/javascript
/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
*/

function switcheroo(x) {
    let ltrs = { 'a': 'b', 'b': 'a' }
    let res = ''
    for (let ltr of x) {
        if (ltrs[ltr]) res = res + ltrs[ltr]
        else res = res + ltr
    }
    return res
}