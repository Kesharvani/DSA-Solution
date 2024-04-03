// Note-How to run this file---> Move to the working directory for example- cd Questions/Recursion and then run the current file "node recursion.js"

// 1) Write a recursive function to calculate the factorial of a non-negative integer.

const fact = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};

console.log("Factorial is:", fact(4));

// 2)Implement a recursive function to generate the nth Fibonacci number.

const fibo = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};
console.log("Fibonacci:", fibo(5));

// 3)Write a recursive function to reverse a string.

const reverseString = (str, reversed = "") => {
  if (!str) {
    return reversed;
  }
  return reverseString(str.slice(0, -1), reversed + str.slice(-1));
};
const newString = reverseString("abcdef");

console.log("Reversed String:", newString);
