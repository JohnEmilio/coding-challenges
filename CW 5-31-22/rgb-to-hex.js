// https://www.codewars.com/kata/513e08acc600c94f01000001/javascript
/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

function rgb(r, g, b){
    function rgbToHex(a){ //Conversion functiont that will take the rgb values and convert them to a hexadecimal. Will also monitor for ranges less than of greater than the rgb values and convert them as necessary.
      a < 0 ? a=0 : a
      a > 255 ? a = 255 : a
      let hex = a.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    }
    return rgbToHex(r).toUpperCase() + rgbToHex(g).toUpperCase() + rgbToHex(b).toUpperCase()
  }