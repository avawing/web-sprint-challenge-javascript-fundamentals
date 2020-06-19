// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//The nested function can access the variable internal because it is within the scope of the primary function.
//Functions are like a hermit crab, it goes from the inside out, not the outside in.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  while(num > 0){
    return (num + summation(num -1))
  } 
} 

function summationWithCounter(num){
  let counter = 0;
  let summedNum = 0;
  while(counter < num){
    counter += 1;
    summedNum += counter;
  }
  return summedNum
}


