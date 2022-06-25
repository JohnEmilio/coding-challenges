// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/javascript
/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

function parse( data ){
    let result = [],
        num = 0
    data = data.split('').forEach(el =>{
     switch(el){
          case 'i':
            num++
            break;
          case 'd':
            num--
            break;
          case 's':
            num *=num
            break;
          case 'o':
            result.push(num)
            break;
      }
   })
    return result
  }