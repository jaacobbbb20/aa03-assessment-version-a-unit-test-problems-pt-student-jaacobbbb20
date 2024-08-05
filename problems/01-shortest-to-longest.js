/***********************************************************************
Write a recursive function called `shortestToLongest` which takes
an array of lowercase strings and returns them sorted from shortest
to longest.

Strings of equal length should be sorted alphabetically.

(Hint: str1 < str2 will return true if str1 comes before str2
alphabetically)

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the shortest string in the `strings` array to the end of `sorted`.

Do NOT use JavaScript's built-in .sort() method to solve this problem.


// Examples:

// Sorts strings from shortest to longest
let strings1 = ["abc", "de", "", "f", "ghijk", "lmno"]
shortestToLongest(strings1);
// ['', 'f', 'de', 'abc', 'lmno', 'ghijk']


// Accepts a pre-sorted default parameter
let strings2 = ["pomegranate", "persimmon", "peach"];
let sorted = ["pea", "pear"];
shortestToLongest(strings2, sorted);
// ['pea', 'pear', 'peach', 'persimmon', 'pomegranate']


// Sorts strings of the same length alphabetically
let strings3 = ["dog", "cat", "elephant", "ant", "pig", "emu"];
shortestToLongest(strings3);
// ['ant', 'cat', 'dog', 'emu', 'pig', 'elephant']

***********************************************************************/

function shortestToLongest(strings, sorted = []) {
  // Your code here
  if (strings.length === 0) {
    return sorted;
  }
  // 1. Find the shortest string in the `strings` array
  let shortest = strings.reduce((a, b) => a.length < b.length || (a.length === b.length && a < b) ? a : b);
  // 2. Remove the shortest string from the `strings` array
  let newStrings = strings.filter(str => str !== shortest);
  // 3. Push the shortest string to the back of the `sorted` array
  sorted.push(shortest);
  // 4. Recurse until the `strings` array is empty (base case)
  return shortestToLongest(newStrings, sorted);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = shortestToLongest;
} catch {
  module.exports = null;
}
