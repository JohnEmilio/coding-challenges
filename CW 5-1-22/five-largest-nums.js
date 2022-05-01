// https://www.codewars.com/kata/51675d17e0c1bed195000001/javascript
/*
In the following 6 digit number:

283910

91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890

67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

Adapted from ProjectEuler.net
*/

function solution(digits){
    let greatestFive = 0
    
    for(let i = 0; i < digits.length;i++){
      let fiveNext = digits.slice(i,i+5) //This will start at index 0 to index 5, increment the beginning and ending index by 1 each iteration, searching for the largest 5 consecutive numbers.
      if(Number(fiveNext) > greatestFive){ //This compares the current five numbers from the argument to the next five numbers.
        greatestFive = Number(fiveNext) //If the next five numbers are larger than the current five, it will set 'greatestFive' equal to the largest so it can be compared to the next five numbers in the next iteration.
      }
    }
    return greatestFive
  }