/***
Character Frequency
Write a function that takes as its input a string and returns an array of arrays as shown 
below sorted in descending order by frequency and then by ascending order by character.

INPUT: "aaabbc"

OUTPUT: [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

INPUT: "mississippi"

OUTPUT: [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
***/

const characterFrequency = (str) => {
  let results = {};
  var sorted = [];

  for(let i = 0; i < str.length; i++) {
    results[str.charAt(i)] = results[str.charAt(i)] + 1 || 1;
  }

  for(let key in results) {
    sorted.push([key, results[key]]);
  }

  sorted.sort((a,b) => {
    if(a[1] !== b[1]) {
      return b[1] - a[1];
    }
  });
  return sorted;
}

characterFrequency("mississippi");