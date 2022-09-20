// https://www.codewars.com/kata/54d496788776e49e6b00052f/javascript
/*
Given an array of positive or negative integers

 I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

Notes:

It can happen that a sum is 0 if some numbers are negative!
Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.
*/

function findPrimes(arr) {
    let max = 0
    let primes = []
    if (arr.every(el => el > 0)) {
        max = Math.max(...arr)
    }
    else {
        max = Math.max(...arr.map(el => Math.abs(el)))
    }

    for (let i = 2; i <= max; i++) {
        let prime = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false
                break;
            }
        }
        if (prime) {
            primes.push(i)
        }
    }
    return primes
}

function sumOfDivided(lst) {
    let primes = findPrimes(lst)
    let res = {}

    for (let i = 0; i < lst.length; i++) {
        for (let j = 2; j <= Math.abs(lst[i]); j++) {
            if (lst[i] % j == 0 && primes.includes(j)) {
                if (res[j]) {
                    res[j] += lst[i]
                }
                else {
                    res[j] = lst[i]
                }
            }
        }
    }
    return Object.keys(res).map(key => [Number(key), res[key]])
}