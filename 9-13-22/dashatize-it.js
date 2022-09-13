// https://www.codewars.com/kata/58223370aef9fc03fd000071/javascript
/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/

function dashatize(num) {
    if (!Number(num) && num != 0) return 'NaN'
    num = Math.abs(num)

    num = num.toString().split('').map((el, ind, arr) => {
        if (el % 2 != 0 && arr.length > 1) {
            if (ind == 0) {
                return `${el}-`
            }
            else if (ind == arr.length - 1) {
                return `-${el}`
            }
            else if (el != '0') {
                return `-${el}-`
            }
        }
        else {
            return el
        }
    })
    return num.join('').replace(/(--)/g, '-')
}