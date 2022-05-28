// https://www.codewars.com/kata/57f222ce69e09c3630000212/javascript
/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

function well(x){
    x = x.filter(el => el === 'good') //Return a new array of only strings of 'good'
    return x.length > 2 ? 'I smell a series!' : x.length > 0 ? 'Publish!' : 'Fail!'
  }