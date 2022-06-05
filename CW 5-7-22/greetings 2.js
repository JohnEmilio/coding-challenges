//https://www.codewars.com/kata/535474308bb336c9980006f2/javascript
/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

var greet = function(name) {
    name = name.toLowerCase() //Make any name parameters all lower case
    return `Hello ${name.slice(0,1).toUpperCase() + name.slice(1,name.length)}!`
    // Using the string method .slice() take the first character in the name and capitalize it using the string method .toUpperCase(). Next join the rest of the name using the .slice() method again passing in the character at 1 and ending with the last character.
  };