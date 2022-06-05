//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/javascript

/*
Scenario

Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Task

Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
Notes

    Array size is at least 1.
    All numbers will be positive.
    Input >> Output Examples

rowWeights([13, 27, 49])  ==>  return (62, 27)

Explanation:

    The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

    rowWeights([50, 60, 70, 80])  ==>  return (120, 140)

Explanation:

    The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

    rowWeights([80])  ==>  return (80, 0)

Explanation:

    The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.
*/

function rowWeights(array){
    let teamOne = 0
    let teamTwo = 0
    array.forEach((el, ind) => ind%2==0 ? teamOne += el : teamTwo += el) //Since ind 0 will be on team one, we can use the condition of ind%2==0 since 0%2==0 is true. Then for each element we can add the corresponding weight onto that team
    return [teamOne, teamTwo] // Return an array comapring teamOne and teamTwo
  }