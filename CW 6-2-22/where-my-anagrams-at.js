// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/javascript
/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

Note for Go
For Go: Empty string slice is expected when there are no anagrams found.

*/

function anagrams(word, words) {
    //   P - a string and an array of strings, one string in the array may or may not match each letter from the string given.
    //   R - return an array any words from the array of strings that are anagrams to the string supplied
    //   E - 'abba', ['aabb', 'abcd', 'bbaa', 'dada'] =>  ['aabb', 'bbaa']; 'laser', ['lazing', 'lazy',  'lacer'] => []
    //   P -  Sort the word and sort each word in the array, then compare the each element in the array to the word to see if they match
      
      word = word.split('').sort().join('')  //An anagram is a word that matches another word letter for letter. The letters don't have to be in the same order, but it has to be the same length word with the same letters. Thus we sort the string and sort each string element of the array, the nwe compare the elements to the string to see if they match.
      let words2 = words.map((el, ind) => el.split('').sort().join(''))
      return words.filter((el, ind, arr) => words2[ind] == word) //Since we initialized the sorted string elements into another array, we can just filter the original array since the indexes are the same, only the letters have been rearranged in the sorted array. If the match the string element is kept if not it is filtered.
}
      