/***
input: "Always be committing to this repo"
output: 10
***/

const longCountString = string => string.split(' ').reduce((a,b) => a > b.length ? a : b.length, 0);