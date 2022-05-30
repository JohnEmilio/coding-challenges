// https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript
/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600) 
    let minutes = Math.floor((seconds - (hours*3600)) /60)
    let secs = Math.floor(seconds- (hours * 3600) - (minutes * 60))

    if(hours < 10){hours = '0'+hours}
    if(minutes < 10){minutes = '0'+minutes}
    if(secs < 10){secs = '0'+secs}

    return hours+':'+minutes+':'+secs
  }