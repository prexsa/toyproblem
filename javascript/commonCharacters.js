/***
Write a function that accepts two strings as arguments, and returns only the characters
that are common to both strings.
Your function should return the common characters in the same order that they appear in
the first argument. Do not return duplicate characters and ignore whitespace in your returned string.
Example: commonCharacters('acexiv ou', 'aegiho buu')
Returns: 'aeiou'
***/

const commonCharacters = (str1, str2) => {
  return str1.split('').filter((val, pos) => {
    // ~ => performs a small algorithm on N, -(N + 1)
    return (~str2.indexOf(val) && val !== " " && str1.indexOf(val) === pos)
  }).join('');
}

commonCharacters('acexiv oua', 'aegiho buua')