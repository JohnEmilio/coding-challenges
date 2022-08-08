// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/javascript
/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/


function tripledouble(num1, num2) {
    num1 = String(num1).split('')
    num2 = String(num2).split('')
    let ind = 0
    
    for(let i = 1; i < num1.length-1; i++){
      
      if(num1[i+1] == num1[i-1] && num1[i] == num1[i+1]){
        ind = num2.indexOf(num1[i])
        for(let j = ind; j < num2.length-1; j++){
          if(num2[j] == num2[j+1] && num1[i] == num2[j]){
            return 1
          }  
        }
      }
    }
    return 0
  }