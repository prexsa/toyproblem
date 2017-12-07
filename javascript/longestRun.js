/***
Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns 
an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

INPUT: "abbbcc"
OUTPUT: [ 1, 3 ]

INPUT: "mississippi"
OUTPUT: [ 2, 3 ]

INPUT: abccccccc"
OUTPUT: [ 2, 8 ]
***/

const longestRun = string => {
  let current = [0,0];
  let longest = [0,0];

  for(let i = 1; i < string.length; i++) {
    if(string[i-1] === string[i]) {
      current[1] = i;
      if((current[1] - current[0]) > (longest[1] - longest[0])) {
        longest = current;
      }
    } else {
      current = [i,i];
    }
  }
  return longest;
}