/***
Array Zip Sum :
Given two arrays of negative/positive integers, return a new array such that 
each element at index n is the sum of the two elements from the other 
arrays at their index n’s.

INPUT
xs:
[ 10, 20, 30 ]
ys:
[ 1, 2, 3 ]

OUTPUT
[ 11, 22, 33 ]
***/

const arrayZipSum = (first, second) => {
  let results = [];

  let newLength = Math.min(first, second);
  for(let i = 0; i < newLength.length; i++) {
    results.push(first[i], second[i])
  }
  return results;
}

arrayZipSum([10,20,30], [1,2,3]);
