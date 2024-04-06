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

// 4) Implement binary search using recursion on a sorted array.

const binarySearch = (arr, val, start, mid, end) => {
  if (start > end) {
    return -1;
  }
  mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    return arr.indexOf(val);
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, start, mid, mid - 1);
  } else {
    return binarySearch(arr, val, mid + 1, mid, end);
  }
};
const arr = [2, 4, 5, 7, 9];
let start = 0;
let end = arr.length - 1;
let mid = Math.floor((start + end) / 2);
const data = binarySearch(arr, 9, start, mid, end);
console.log("data", data);
