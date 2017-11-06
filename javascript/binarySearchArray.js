/***
Binary Search Array
Given a SORTED array of integers, find the index of a target value using a binary search algorithm.
A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing 
the search interval in half. The initial interval includes the whole array. If the value of the 
target value is less than the middle value of the interval, then the next interval will be the lower 
half of the current interval. If the value of the target value is greater than the middle value, 
then the next interval will be the upper half. The search process repeats until the middle value is 
equal to the target value, or the search interval is empty.

Note:
Your function should return -1 for target values not in the array.

Parameters:

array (required) - an array.

target (required) - an integer value.

INPUT
array:
[ 5 ]
target:
4

OUTPUT
-1

INPUT
array:

target:
11

OUTPUT
0
***/

const binarySearchArray = (array, target) => {
  const min = 0;
  const max = array.length - 1;
  let found = -1;
  while(max >= min) {
    let middle = Math.floor((min + max) / 2);
    if(array[middle] === target) {
      found = middle;
      break;
    }

    if(array[middle] < target) {
      min = middle + 1;
    }else{
      max = middle - 1;
    }
  }
  return found;
}

binarySearchArray([ 11, 12, 13, 14, 15 ], 11)