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

// 5)Write a recursive function to find the sum of all elements in an array.

const sumOfArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  let temp = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return temp + sumOfArray(arr);
};

console.log("Sum of array is:", sumOfArray([2, 3, 4, 7, 4, -3]));

// 6)Create a recursive function to count the occurrences of a given element in an array.

const countOfOccuranceInArray = (count, element, array) => {
  if (array.length === 0) {
    return;
  }
  let temp = array[array.length - 1];
  if (temp === element) count[0]++;
  array.length = array.length - 1;
  return countOfOccuranceInArray(count, element, array);
};

const callingFunction = () => {
  let count = [0];
  const array = [3, 4, 2, 45, 6, 7, 2, 2];
  const element = 2;
  countOfOccuranceInArray(count, element, array);
  console.log("Occurance of the element is:", count[0]);
};
callingFunction();

// 7)Implement a recursive function to compute the power of a number.

const powerOfNumber = (base, exponent, result) => {
  if (exponent === 0) {
    return;
  }
  result[0] = result[0] * base;
  exponent > 0
    ? powerOfNumber(base, exponent - 1, result)
    : powerOfNumber(base, exponent + 1, result);
};

const callingFunction2 = () => {
  const result = [1];
  const base = 3;
  const exponent = -4;
  powerOfNumber(base, exponent, result);
  if (exponent >= 0) {
    console.log("Power of the number is:", result[0]);
  } else {
    console.log("Power of the number is:", 1 / result[0]);
  }
};
callingFunction2();

// Write a recursive function to check if a given string is a palindrome.

const isPalindrom = (start, end, str, result) => {
  if (start > end) {
    return;
  }
  if (str[start] != str[end]) {
    result[0] = 0;
    return;
  }
  isPalindrom(start + 1, end - 1, str, result);
};

const callingFunction3 = () => {
  const result = [1];
  const str = "madam";
  isPalindrom(0, str.length - 1, str, result);

  if (result[0] === 1) {
    console.log("Yes, It is palindrom");
  } else {
    console.log("This string is not palindrom");
  }
};
callingFunction3();
