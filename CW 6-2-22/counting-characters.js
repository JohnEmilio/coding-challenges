// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript
/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {  
    let letters = {}
    for(const letter of string){
      if(letters[letter]){
        letters[letter] +=1
      }else letters[letter] = 1
    }
     return letters;
}