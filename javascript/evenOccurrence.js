/***
Even Occurrence

Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.

INPUT: [ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]
OUTPUT: 2

INPUT: [ "cat", "dog", "dig", "cat" ]
"cat"

***/

const evenOccurrence = (array) => {
  const container = {};
  for(let i = 0; i < array.length; i++) {
    container[array[i]] = container[array[i]] + 1 || 1;
  }

  for(let j = 0; j < array.length; j++) {
    if(container[array[j]] % 2 === 0) {
      return array[j];
    }
  }
  return null;
}

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]);