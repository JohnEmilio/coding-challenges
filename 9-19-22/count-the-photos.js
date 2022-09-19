// https://www.codewars.com/kata/6319dba6d6e2160015a842ed/javascript
/*
In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
A camera takes a photo of a car if it moves to the direction of the camera.

Task
Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.


Examples
For ">>." -> 2 photos were taken
For ".>>" -> 0 photos were taken
For ">.<." -> 3 photos were taken
For ".><.>>.<<" -> 11 photos were taken
*/

function countPhotos(road) {
    let pics = 0
    let cams = 0
    let right = 0
    if (!road.match(/[.]/g)) return pics

    for (let i = 0; i < road.length; i++) {
        if (road[i] === '.') {
            pics += right
            cams += 1
        }
        else if (road[i] === '>') {
            right += 1
        }
        else if (road[i] === '<') {
            pics += cams
        }
    }
    return pics
}