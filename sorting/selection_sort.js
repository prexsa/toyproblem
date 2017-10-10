// Time Complexity
// Best - O(n^2)
// Average - O(n^2)
// Worst - 0(n^2)

// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const selectionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j]  < arr[min]) {
        min = j;
      }
    }
    if(i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}
