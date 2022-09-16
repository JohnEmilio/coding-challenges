// https://www.codewars.com/kata/5a905c2157c562994900009d/javascript
/*
Task
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

Input >> Output Examples

productArray ({12,20}) ==>  return {20,12}
Explanation:
The first element in prod [] array 20 is the product of all array's elements except the first element

The second element 12 is the product of all array's elements except the second element .

productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
The first element 10 is the product of all array's elements except the first element 1

The second element 2 is the product of all array's elements except the second element 5

The Third element 5 is the product of all array's elements except the Third element 2.
*/

function productArray(numbers) {
    return numbers.map((el, ind, arr) => {
        return arr.reduce((a, b) => a * b) / el
    })
}