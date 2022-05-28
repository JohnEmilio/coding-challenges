// https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript
/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


*/

function isValidWalk(walk) {
    let sum1 = 0
    let sum2 = 0
    walk.filter(el => el == 'n' ? sum1++ : el == 's' ? sum1-- : el == 'e' ? sum2++ : sum2--)
    //To return to the starting location, whatever the amount of times walked in one direction must equal the amount of times walked in the opposite direction. Thus we filter through the array to see if there are equal amounts of 'n' and 's', and equal amount of 'e' vs 'w'. 'n' and 's' will be logged to sum1 and 'e' and 'w' will be logged to sum2.
   if(walk.length == 10 && (sum1 == 0 && sum2 == 0)){
       return true
    }return false
  }