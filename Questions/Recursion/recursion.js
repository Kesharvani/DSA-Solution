// Note-How to run this file---> Move to the working directory for example- cd Questions/Recursion and then run the current file "node recursion.js"

// 1) Write a recursive function to calculate the factorial of a non-negative integer.

const fact = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};

console.log(fact(4));
