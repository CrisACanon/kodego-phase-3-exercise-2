// Problem1 - Count Occurrence of a Character in a String

function countOccurrence(str, targetChar) {
  return str.map((word) => word.split(targetChar).length - 1);

  /*
Create a function that takes two strings as arguments and 
returns the number of times ("l" character) string.
*/
}

const ans = countOccurrence(["Hello", "World"], "l");
console.log(ans);
