/*** 
  Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? 
  Find all unique triplets in the array which gives the sum of zero.

  For example, given array S = [-1, 0, 1, 2, -1, -4],

  A solution set is:
  [
    [-1, 0, 1],
    [-1, -1, 2]
  ]
***/

const threeSum = (nums) => {
  let results = []
  let combinations = []
  
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      for(let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k]
        if(sum === 0) {
          combinations.push([nums[i]])
          combinations.push([nums[j]])
          combinations.push([nums[k]])
          results.push(combinations)
          combinations = []
        }
      }
    }
    
  }

  return results;
}

// A faster solution: 
/***
const threeSums = (nums) => {
  var rtn = [];
  if (nums.length < 3) {
    return rtn;
  }
  nums = nums.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      return rtn;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (var j = i + 1, k = nums.length - 1; j < k;) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        rtn.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] == nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  return rtn;
}
***/