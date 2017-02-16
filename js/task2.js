// If we list all the natural numbers below 10 that are 
// multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var total = 0;

// First we defined a variable total. 
// Total is asign the value 0.

for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
}

// We created a for loop. The for loop has mutliple 
// responsibilities.
//    - First, in the for loop we created a var i 
//      with the value of 0. 
//    - Next we make a boolean operator to determine if
//      the variable i is less than 1000.
//    - If i is less than 1000, keep adding the variable 
//      i to itself. 
// Inside the body of the for loop we use an if statement.
//    - We use an if statement to determine if the value of
//      i is % by 3 or 5. 
//    - We added the || (double pipe) to check if the first
//      or second statement is true. The || stands for OR.
//    - If the statement is true, we add the statement
//      to the total variable.
// 
// The total sum of all the multiples of 3 or 5 below 1000
// is 233168.