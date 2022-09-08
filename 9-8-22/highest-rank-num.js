// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/javascript
/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/


function highestRank(arr) {
    let count = {}

    for (const num of arr) { // Get all integers from the array and create a key-value pair for the count object to see how many times an integer occurs in the array
        if (count[num]) {
            count[num]++
        }
        else count[num] = 1
    }
    
    // For each entry in the count object, sort them with the greatest number of occurences at the top of the returned array.  ( creates an array of arrays like [[key, value], [key, value]])
    let sorted = Object.entries(count).sort((a, b) => b[1] - a[1])
        // Filter the sorted array to find any integers that have the same number of occurences as the most highest occuring integer (the first index in the array)
        .filter((el, ind, arr) => el[1] === arr[0][1])
        // Sort the filtered array of integers that all have the same occurence by finding which integer is the largest (sorted largest to smallest)
        .sort((a, b) => b[0] - a[0])
    return Number(sorted[0][0]) // Returns the first array's element, which is the largest integer with the highest number of occurences from the input array.
}