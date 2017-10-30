const flattenArray = (array) => {
  if(!Array.isArray(array)) { return [arr]; }

  let results = [];
  for(let i = 0; i < array.length; i++) {
    results = results.concat(flattenArray(array[i]));
  }
  return results;
}