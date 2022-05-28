// https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str){
    if(str == ''){
      return ''
    }else if(str.includes('-')){
      let newStr = str.split('-').map(el => el.slice(0,1).toUpperCase() + el.slice(1,el.length)).join('')
      if(str[0] == newStr[0]){
        return newStr
      }return newStr.charAt(0).toLowerCase()+newStr.slice(1,newStr.length)
    }else if(str.includes('_')){
      let newStr = str.split('_').map(el => el.slice(0,1).toUpperCase() + el.slice(1,el.length)).join('')
          if(str[0] == newStr[0]){
        return newStr
      }return newStr.charAt(0).toLowerCase()+newStr.slice(1,newStr.length)
    }
  }