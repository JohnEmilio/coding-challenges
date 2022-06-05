// https://www.codewars.com/kata/59377c53e66267c8f6000027/javascript
/*
Introduction

There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

The other letters don't have power and are only victims.
Example

alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/

function alphabetWar(fight){
    let rightSide = []
    let leftSide = []
    let rightSum = 0
    let leftSum = 0
    for(let i = 0; i < fight.length; i++){
      let char = fight[i]
      if(char == 'w' || char == 'p' || char == 'b' || char == 's'){ //Checks each letter from parameter fight to see if they match the conditional statements. If they do match the conditional statements, the letter will be placed into its respective side, which is an array.
        leftSide.push(char)
      }else if( char == 'm' || char == 'q' || char == 'd' || char == 'z'){
        rightSide.push(char)
      }
    }
        for(let j = 0; j < fight.length; j++){
        if(rightSide[j] == 'm'){ //Loops through each side's array and add's the running total for each side based on the conditional statements. 
          rightSum +=4
        }else if(rightSide[j] == 'q'){
          rightSum += 3
        }else if(rightSide[j] == 'd'){
          rightSum += 2
        }else if(rightSide[j] == 'z'){
          rightSum += 1
        }
        if(leftSide[j] == 'w'){
          leftSum +=4
        }else if(leftSide[j] == 'p'){
          leftSum += 3
        }else if(leftSide[j] == 'b'){
          leftSum += 2
        }else if(leftSide[j] == 's'){
          leftSum += 1
        }
      }
     return rightSum > leftSum ? "Right side wins!" : rightSum < leftSum ? "Left side wins!" : "Let's fight again!"
  }