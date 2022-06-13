// https://www.codewars.com/kata/586305e8916e244b66001a93/javascript
/*
Mirror - Mirror

Can you mirror the properties on an object?

Given an object with properties with no value

abc: -
arara: -
xyz: -

Return a new object that have the properties with its mirrored key!

abc: cba
arara: arara
xyz: zyx

"You cannot change the original object, because if you did that the reflection would change."

*/

const mirror = obj => {
    let newObj = {} //Initialize a new empty object to put items into later
    Object.keys(obj).forEach( el => newObj[el] = el.split('').reverse().join('')) //For each property in the original object, we will add that property to the new object and have its value equal to the property name but reverse. We use the split method to split the word into characters and into an array, then use the reverse method to reverse their order, and then join to join them back into one string.
    return newObj
  };