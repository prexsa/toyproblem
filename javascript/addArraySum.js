// input: [1, 2, 3, 4]
// output: [9, 8, 7, 6]

const addArraySum = (array) => {
  let results = [];
  const double = array.map(value => value * 2);
  for(let i = 0; i < array.length; i++) {
    results.push(array[i] + double[(array.length - 1) - i]);
  }
  return results;
}

addArraySum([1,2,3,4]);