// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/javascript
/*
Happy Holidays fellow Code Warriors!

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?
Sort the Gift Code

Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

Examples (Input -- => Output):
    "abcdef"                      -- => "abcdef"
    "pqksuvy"                     -- => "kpqsuvy"
    "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
*/

function sortGiftCode(code){
    return code.split('').sort().join('');
    //Use the string method .split() to take each character from the string and place it into seperate elements in an array. Then use the array method .sort() which will, by design, sort the letters alphabetically. Finally use the array method .join() to convert the array to a string joining all the elements of the array.
  }