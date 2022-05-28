// https://www.codewars.com/kata/523f5d21c841566fde000009/javascript
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
    //Using the array method .filter() we can filter all the elements in array 'a' and if any of the elements are in array 'b', they are removed, leaving us only the elements in array'a' that are not in array 'b'
  }