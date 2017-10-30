// Time Complexity
// Best - 0(n)
// Average - O(n^2)
// Worst - 0(n^2)

// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubbleSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      if(arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      }
    }
  }
  return arr;
}

