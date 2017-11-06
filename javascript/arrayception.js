/***
Arrayception -
Given an array of arbitrarily nested arrays, return n, 
where n is the deepest level that contains a non-array value.

INPUT: [ [ 5 ], [ [ ] ] ]
OUTPUT : 2

INPUT : [ [ 10, 20 ], [ [ 30, [ 40 ] ] ] ]
OUTPUT : 4
***/


const arrayception = (array) => {
  // counter to record depth
  // iterate 
    // check if child is an array
    // if true, iterate the child array
    // if depth is greater than count
      // set count to depth
  // return counter

  let count = 0;
  const recurse = (arr, depth) => {
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        recurse(arr[i], depth+1);
      }else if(depth > count) {
        count = depth;
      }
    }
  }

  recurse(array, 1);
  return count;
}