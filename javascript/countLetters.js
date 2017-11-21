/***
Given a string 'AABBBCCCDDAAA', return the output = '2A3B3C2D3A'
***/

/*
create storage object
create a counter variable
create results string
iterate the string
 // if character exist, increase counter
 // else new character key

iterate storage object
concat value/key to results string

return results
*/


const countLetters = (str) => {
  let counter = 1;
  let results = '';
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) !== str.charAt(i + 1)) {
      results +=  counter + str.charAt(i);
      counter = 1;
    }else{
      counter++;
    }
  }
  return results;
}

countLetters('AABBBCCCDDAAA');
