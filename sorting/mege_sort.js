// Time Complexity
// Best - O(n log(n))
// Average - O(n log(n))
// Worst - O(n log(n))

// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const mergeSortTopDown = (arr) => {
  if(arr.length < 2) { return arr };

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

const mergeTopDown = (left, right) => {
  let array = [];

  while(left.length && right.length) {
    if(left[0] < right[0]) {
      array.push(left.shift());
    }else{
      array.push(right.shift());
    }
  }

  return array.concat(left.slice()).concat(right.slice());
}

