// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/javascript
/*
Introduction
The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
Task
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
Good luck and enjoy!
*/

function wave(str){
    let arr = str.split('')
    let strArr = []
    arr.forEach(el => strArr.push(str)) //arr length will be equal to the length of str, we will push str into the strArr that many times so we can iterate through the arr creating the wave.
    strArr = strArr.map(el => el.split('')) //Each element is the parameter str, we will split the word creating an array of arrays
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i][i] != ' '){ //For each array in the array, if the element is not a whitespace, we will make that letter at index i upperCase
        strArr[i][i] = strArr[i][i].toUpperCase()
      }
    }
    return strArr.map(el => el.join('')).filter(el => el !== str) //After we will join all the arrays in the array to create an array of the str word with the wave. Nex twe have to filter out the elements that are equal to the str because those elements would have been created when the for loop was iterating over a whitespace character.
  }