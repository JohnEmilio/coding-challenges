// https://www.codewars.com/kata/56bd9e4b0d0b64eaf5000819/javascript
/*
Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

The combine function should be a good citizen, so should not mutate the input objects.

*/

function combine() {
    let combined = {}
    let num = arguments.length
    for(let i = 0; i < num; i++){
      Object.keys(arguments[i]).forEach(prop =>{
        if(!combined.hasOwnProperty(prop)){ //Using hasOwnProperty method, we will check if our combined object has that property in it, if not we will initialize that property and set it to the value of the current argument object's property and value.
          combined[prop] = arguments[i][prop]
        }
        else { //If our combined object has that property, we will add the value of the property from the argument array to the value of our combined array (which already has a previous value from the other argument array.)
          combined[prop] += arguments[i][prop]
        }
      })
    }
    return combined //Return our combined object which has all the properties and values from the argument objects. If the argument objects had the same properties, we have just added the values together.
  }