// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/javascript
/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

    F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

    F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.
Some Examples of Return:

(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 

*/

function productFib(prod){
    let n1 = 0, 
        n2 = 1, 
        highestNum = 0
    while(prod >= n3){ //Create a loop that will run while the highest fib number is less than or equal to the prod number argument. 

        highestNum = n1 + n2 //The lowest fib number and higher fib number will be added to find the next fib number, which will then be passed to n2 for the next iteration while n1 will be equal to the previous high number. 

        n1 = n2

        n2 = highestNum

        if(n1*n2 == prod){ //These statements will be checked at the end of each iteration to see if the the current fib numbers are equal to the prod number passed in the argument, if so they will return those two numbers and true, but if the current fib numbers are greater than the prod argument number, we will return those two numbers and false.
          return [n1, n2, true]
        }

        else if (n1*n2 > prod){
          return [n1, n2, false]
        }
        //Each iteration will compare the product of the current highest fibonnaci number with the next number in the sequence to find either the two fibonnaci numbers that, when multipied, equal the argument number, or the first two consecutive numbers whose product is greater than the argument number.
    }
  }