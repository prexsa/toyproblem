// Time Complexity
// Best - 0(n log(n))
// Average - 0(n log(n))
// Worst - 0(n^2)

// array to sort
const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

const quickSort = (array) => {
  if(array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const lesser = [];
  const greater = [];

  for(let i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    }else{
      greater.push(array[i]);
    }
  }

  return quickSort(lesser).concat(pivot, quickSort(greater));
}