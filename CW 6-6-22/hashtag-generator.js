// https://www.codewars.com/kata/52449b062fb80683ec000024/javascript
/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/


function generateHashtag (str) {
    str = str.trim()
    let strArr = str.split('')
    let newStr = ''
    strArr.forEach((el,ind,arr) =>{
      if(ind == 0){
        newStr += el.toUpperCase()
      }
      else if(el !== ' ' && arr[ind-1] == ' ' && el != el.toUpperCase()){
         newStr += el.toUpperCase()
         }
      else if(el != ' '){
        newStr += el
      }
    })
    return newStr.length > 139 || str.length == 0 ? false : `#${newStr}`
  }