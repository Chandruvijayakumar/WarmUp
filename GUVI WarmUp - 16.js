/* Given two words, "isSameLength" returns whether the given words have the same length. */

function isSameLength(word1, word2) {
  ///Your code Starts here
  let str1 = word1;
  let str2 = word2;
  if (str1.length == str2.length) {
    return true;
  } else {
    return false;
  }
  ///Your code Ends here
}
/*
Lines For TestCase
isSameLength("GUVI", "GEEK");
isSameLength("GUVI", "ZEN");
isSameLength("Hello", "GUVI");
*/
