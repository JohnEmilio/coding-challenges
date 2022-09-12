// codewars.com/kata/555624b601231dc7a400017a/javascript
/*
In this kata you have to correctly return who is the "survivor", ie: the last element of a Josephus permutation.

Basically you have to assume that n people are put into a circle and that they are eliminated in steps of k elements, like this:

josephus_survivor(7,3) => means 7 people in a circle;
one every 3 is eliminated until one remains
[1,2,3,4,5,6,7] - initial sequence
[1,2,4,5,6,7] => 3 is counted out
[1,2,4,5,7] => 6 is counted out
[1,4,5,7] => 2 is counted out
[1,4,5] => 7 is counted out
[1,4] => 5 is counted out
[4] => 1 counted out, 4 is the last element - the survivor!
The above link about the "base" kata description will give you a more thorough insight about the origin of this kind of permutation, but basically that's all that there is to know to solve this kata.

Notes and tips: using the solution to the other kata to check your function may be helpful, but as much larger numbers will be used, using an array/list to compute the number of the survivor may be too slow; you may assume that both n and k will always be >=1.
*/

function josephusSurvivor(n, k) {
    if (n == 1 || k == 1) return n

    let arr = Array.from(new Array(n), (el, ind) => el = ind + 1) // Initialize an array from 1 to n

    let i = k - 1 // Declare variable i which will be the index of the element we will remove each iteration of the loop
    while (arr.length > 1) {
        while (i > arr.length - 1) { // If i is greater than the last index, we will reduce i by the length of the array, replicating a looping behavior to remove elements.
            i = i - arr.length
        }
        arr.splice(i, 1) // remove the element at index i
        i += k - 1 // at the end of each iteration we will increment i by k-1 since we are counting by index not array length
    }
    return arr[0] 
}