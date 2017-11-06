/***
Balanced Parenthesis:
Given a string, return true if it contains balanced parenthesis ().

INPUT
string:
"(x + y) - (4)"

OUTPUT
true

INPUT
"(50)("

OUTPUT
false
***/

const balancedParenthesis = (str) => {
  let count = 0;
  const array = str.split(" ");
  for(let i = 0; i < array.length; i++) {
    if(array[i] === "(") {
      count++;
    }
    if(array[i] === ")") {
      count--;
    }
  }

  if(count > 0) {
    return false;
  }
  return true;
}

balancedParenthesis("(x + y) - (4)");