/*
Convert a decimal to a binary representation

INPUT: 10
OUTPUT: 1010

Use a stack implementation

*/


const baseConverter = (decimal, base) => {
  let remStack = new Stack(),
    rem,
    binaryStr = '',
    digits = '0123456789ABCDEF';

  while(decimal > 0) {
    rem = Math.floor(decimal % base);
    remStack.push(rem);
    decimal = Math.floor(decimal / base);
  }

  while(!remStack.isEmpty()) {
    binaryStr += digits[remStack.pop()]
  }

  return binaryStr;
}

baseConverter(10);