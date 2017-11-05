/***
  Biggest Array Sum: 
  Takes in an array as an argument. Goal is to find the biggest sum the array can have by
  just adding two consecutive numbers and return it.
   input: biggestArraySum([2,5,5,1])
   output: 10
***/

const biggestArraySum = (array) => {
  const sorted = array.sort();
  const length = array.length;
  return array[length-1] + array[length-2];
}

biggestArraySum([2,5,5,1]);
