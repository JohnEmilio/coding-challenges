// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
/*Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)*/ 
/*
    "ATTGC" --> "TAACG"
    "GTAT" --> "CATA" 
    dnaStrand []        `shouldBe` []
    dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
    dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
    dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
*/

// find the element of the original DNA strand
// If strand = A new strand should = T
// If strand = C new stand should = G

function DNAStrand(dna){
    let alpha = 'A'
    let charlie = 'C'
    let tango = 'T'
    let golf = 'G'
    let newArr = dna.split('')
    for( let i = 0; i < newArr.length; i++){
      if(newArr[i] === alpha){
        newArr[i] = tango
      }else if(newArr[i] === tango){
        newArr[i] = alpha
      }else if(newArr[i] === charlie){
        newArr[i] = golf
      }else if(newArr[i] === golf){
        newArr[i] = charlie
      }
      }
      return newArr.join('')
  }