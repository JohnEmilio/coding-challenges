// https://www.codewars.com/kata/527a6e602a7db3456e000a2b/javascript
/*
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

Object.prototype.hash = function(string) {
    let objProps = string.split('.') //Get each property of the obj and put into an array so we can check to see if it exists in the object.
    let obj = this
    for(let i = 0; obj && i < objProps.length; i++){
      obj = obj[objProps[i]] //Looping through the object to see if the obj has the properties listed in the array. If properties are in the object, at the end, the variable obj will eventually equal the value given to the property. If the property doesn't exist, obj will be equal to undefined
    }
     return obj
  }