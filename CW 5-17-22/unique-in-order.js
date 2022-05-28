// https://www.codewars.com/kata/54e6533c92449cc251001667/javascript
/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder=function(iterable){
    // P - either strings or arrays, integers or letters, upper and lower case, 
    // R - An array from the original argument where each element does not have the same value next to it
    // E - 'AAAABBBCCDAABBB' => ['A','B','C','D','A','B'] ; [1,2,2,3,3] => [1,2,3]
    // P - Take the iterable parameter find if it is a string or array and make everything an array, then filter through the array to see if the next element is equal to the current element. If the next element is not equal then it is passed onto the filtered array
    if(typeof iterable == 'string'){
        iterable = iterable.split('')
    }
    return iterable.filter((el, ind) => el != iterable[ind+1])
}