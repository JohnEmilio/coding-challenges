// https://www.codewars.com/kata/59df2f8f08c6cec835000012/javascript
/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.
*/

function meeting(s) {
    let result = ""
    let arr = s.toUpperCase() //Turn the entire string to uppercase
                .split(";") //split the entire string at the ";" place which is used to seperate each person
                .map(name => name.split(":").reverse().join(", ")) //with each element being a person and their names seperated by a ":", split each name again creating a subarray or firstName, lastName. Then reverse that array so that is is lastName, firstName, then join the names together to make a person string.
                .sort() //Afterwards sort the array of people's names which will sort by last name then first name if necessary
    
    arr.forEach(name => result += `(${name})`) //Lastly, add each name to our result string, where each name is encased in parentheses
    
    return result
  }