/***
  Remove Duplicates. Takes in an array as an argument. Goal is to remove duplicates and
  return an array without the duplicates.
   input: removeDuplicates([2,2,3,5,5,10,1])
   output: [3,10,1]
   input: removeDuplicates([2,2,2,2,2,2,2,1])
   output: [1]
***/

const removeDupe = (array, obj = {}) => 
  input.map(val => {
    obj[val] = obj[val]+1 || 1;
    return val;
  }).filter(val => obj[val] == 1)