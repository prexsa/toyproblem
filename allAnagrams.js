const expect = require('expect');
// All Anagrams
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array.
// At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// INPUT
// string: "abc"

// OUTPUT
// [ "abc", "acb", "bac", "bca", "cab", "cba" ]

const allAnagrams = (str) => {
  let results = [];
  const recurse = (combo, letters) => {
    if(combo.length === str.length) {
      results.push(combo);
    }
    
    for(let i = 0; i < letters.length; i++) {
      recurse(combo + letters[i], letters.slice(0, i) + letters.slice(i+1) )
    }
  }
  recurse('', str);
  return results;
}

allAnagrams('abc');



// Testing
const testAnagrams = () => {
  expect(
    allAnagrams('abc')
  ).toEqual([ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]);
};

testAnagrams();