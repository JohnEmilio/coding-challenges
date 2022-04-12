// https://www.codewars.com/kata/555eded1ad94b00403000071/javascript
/*
Task:

Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:

    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return 0.00

    You will only be given Natural Numbers as arguments.

Examples:(Input --> Output)

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function SeriesSum(n){
    let sum = 0
    for(let i = 0; i < n; i++){
      sum += 1 /(1 + i * 3) //Each iteration i will increase the denominator and add the resulting fraction to the sum total which accumulates.
    }
    return sum.toFixed(2) // Returns the accumulated sum total and sets it to a fixed decimal point, which in this case is the hundreths
}