// https://www.codewars.com/kata/57814d79a56c88e3e0000786/javascript
/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
    let odds = '', //Initialize variables odds and evens where we will put the corresponding character values
        evens = ''
    if(!text || n < 0){ //Check for edge cases
      return text
    }
    while(n > 0){
      text.split('').forEach((el, ind) =>{ //When the loop runs we will split the text variable and iterate through the array using forEach, adding each character to either odd or even based on its index number.
        if(ind % 2 == 0){
          evens += el
        }
        else odds += el
      })
      text = odds + evens //After iterating over the text array we will concatenate the odds with the evens assigning their concatenated value to the text variable for the next iteration(if determined by n). Afterwards we will reset the odds and evens variables to empty strings for the next iteration, if needed, and reduce n by 1. 
      odds = ''
      evens = ''
      n--
    }
    
    return text 
  }
  
  function decrypt(encryptedText, n) {
    let decrypting = ''
    
    while(n > 0){ //At the start of this loop we slice the encryptedText variable in half so that we can decrypt the string.
      let ending = encryptedText.slice((encryptedText.length)/2)
      let starting = encryptedText.slice(0,(encryptedText.length)/2)
      for(let i = 0; i < encryptedText.length; i++ ){ //Using a for loop inside the while loop will ensure we can decrpy the entire string during each iteration of the while loop.
          if(ending[i]){ //Check to see if ending[i] or starting[i] are undefined in the case of an odd-numbered encryptedText string where our ending and starting variable strings will have uneven lengths
            decrypting += ending[i] //During each iteration of the for loop, as long as the character is truthy, we will concatenate our decrpyted string with each character from ending and starting.
          }
          if(starting[i]){
            decrypting += starting[i]
          }
      }
      encryptedText = decrypting //Reassign encryptedText to the decrypted text for the next while loop iteration if it's need. Then reassign the decrypted variable to and empty string for the next iteration of the for loop, also decrement n.
      decrypting = ''
      n--
    }
    
    return n <= 0 ? encryptedText : decrypting
  }