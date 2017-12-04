/***
Integer Reverse
Given a positive integer n, return its digits reversed.
DO NOT CONVERT n INTO A STRING OR ARRAY. Only use integers and math in your solution.

INPUT: 1234
OUTPUT: 4321
***/

const integerReverse = (n) => {
  let reverse = 0;
  while(n !== 0) {
    reverse = (reverse * 10) + (n % 10);
    n = parseInt(n / 10);
  }
  return reverse;
}

integerReverse(1234);
