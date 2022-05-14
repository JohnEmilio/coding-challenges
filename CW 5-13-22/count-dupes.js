function duplicateCount(text){
    //   P string, indistinctive letter case, numbers, must match
    //   R number of similar characters or numbers from string (ignore letter case)
    //   E "aabBcde" => 2 ('a' and 'b' both have multiple occurences); "Indivisibility" => 1 ('i' is only with multiple occurences)
    //   P Take the string, and see if a character(letter or number) matches any other character in the string. If they do match increase count by 1
      let lower = text.toLowerCase() //take stirng and make all characters lowercase
      let total = 0
      let newArr = []
      
      lower.split('').forEach(char =>{
        if(!newArr.includes(char) && (lower.split(char).length - 1) > 1){ //If newArr does not have the character and if you split the string into an array at the character, and its longer that 1 element, that means that the character matches another character in the string. Increase the total by one and add the character to the newArr so that it will not be searched for again.
          newArr.push(char)
          total++
        }
      })
      return total
    }