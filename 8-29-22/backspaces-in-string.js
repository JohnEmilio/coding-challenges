// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/javascript

/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

function cleanString(s) {
    let numOfBackspaces = s.match(/#/g) || []
    while (numOfBackspaces.length > 0) {
        s = s.replace(/(\d#)|([a-z]#)|(.#)|^#/i, '')
        numOfBackspaces = numOfBackspaces.slice(0, -1)
    }
    return s
}