// https://www.codewars.com/kata/5842df8ccbd22792a4000245/javascript
/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!

*/


function expandedForm(num) {
    let str = String(num)
    let zero = '0'
    let numStr = []
    for(let i = 0; i < str.length;i++){
      if(str[i] != 0){
        numStr.push(str[i] + '0'.repeat(str.slice(i).length-1))
      }
    }
    return numStr.join(' + ')
  }