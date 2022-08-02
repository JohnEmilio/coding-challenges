// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/javascript
/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list){
    let res = []
    
    for(let i = 0; i < list.length; i++){
      let temp = []
      while((list[i]-1 == list[i-1]) || (list[i]+1 == list[i+1])){ //This checks to ensure the current list[i] is still inside of a consective integer group, and will push the current number into our temp array
        temp.push(list[i])
        if(list[i]+1 != list[i+1]){  //If the next number in the list is not consecutive we will break out of the while loop and then examine the temp array.
          break;
        }
        i++
      }
      if(temp.length > 2){
        res.push(`${temp[0]}-${temp[temp.length-1]}`) //If the temp array contains at least 3 consecutive numbers, we will push the first and last num from the temp array into our result array, join those numbers to a string seperated by a dash. Then we make sure the temp array is empty for the next iteration of the for loop
        temp = []
      }
      else {
        if(temp.length){ //If the temp array is less than 3 elements and greater than 0, we will just push those two elements into our result array and make the temp array empty
         res.push(temp[0], temp[1])
          temp = []
        }
        else{
         res.push(list[i]) //Otherwise we just push the current list[i] since it is not in the temp array and the while loop never ran on this interation.
        }
      }
    }
     return res.join(',')
   }