/***
  Only output the numbers that occur an even amount of times.
  input: [3,2,2,3,3,1,4,4]
  output: 2, 2, 4, 4
***/

const evenCount = (array, obj = {}) => array.map(num => {
  obj[num] = obj[num]+1 || 1
  return num
  }).reduce((a, b) => {
    if(obj[b] % 2 === 0) a.push(b)
    return a
  },[])


evenCount([3,2,2,3,3,1,4,4]);