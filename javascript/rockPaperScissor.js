/***
Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities 
for that number of rounds.

INPUT: roundCount: 2
OUTPUT: [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]

INPUT: roundCount: 1
OUTPUT: [ "r", "p", "s" ]
***/

const rockPaperScissor = roundCount => {
  const plays = ['r', 'p', 's'];
  let results = [];

  if(roundCount) {
    const recurse = (rounds) => {
      // base case
      if(rounds.length === roundCount) {
        results.push(rounds);
        return;
      }

      for(let i = 0; i < plays.length; i++) {
        recurse(rounds + plays[i]);
      }
    }
    recurse('');
  }

  return results;
}
