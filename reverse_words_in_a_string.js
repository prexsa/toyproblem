// Given a string, you need to reverse the order of characters in each word within 
// a sentence while still preserving whitespace and initial word order.

// Example
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

var reverseWords = function(s) {
    let words = s.split(" ");
    var results = [];
    words.forEach(w => {
        let newStr = '';
        for(let i = w.length - 1; i >= 0; i--) {
          newStr += w[i];
        }
        results.push(newStr);
    })
    return results.join(" ");
};