// https://www.codewars.com/kata/581331293788bc1702001fa6/javascript
/*
100th Kata
You are given a message (text) that you choose to read in a mirror (weirdo). Return what you would see, complete with the mirror frame. Example:

'Hello World'

would give:


Words in your solution should be left-aligned.
*/


function mirror(text) {
    text = text.split(' ').map(el => el.split('').reverse().join('')) //Reverse each word in place
    let max = Math.max(...text.map(el => el.length)) //Find which word has the max length of the text string and set the integer value 
    let res = []
    text.forEach(word => res.push('* ' + word + ' '.repeat(max - word.length) + ' *\n')) // building our reversed words and concatenating them with stars for the mirrors frame and adding spaces depending on the length compared to the longest word
    res.push('*'.repeat(max + 4)) // Building the top and bottom of our mirror using the max variable (the length of the longest word) plus the extra spaces for the stars on the side and the space between the word and the star
    res.unshift('*'.repeat(max + 4) + '\n')
    return res.join('')
}