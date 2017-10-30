// Time Complexity
// Best - O(n)
// Average - O(n^2)
// Worst - 0(n^2)

// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const insertionSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[i];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

