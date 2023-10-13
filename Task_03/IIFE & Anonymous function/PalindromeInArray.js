// Anonymous Function
console.log("\nAnonymous Function Output : ");

const a1 = ["radar", "hello", "level", "world", "deified"];

const findPalindromes = function (arr) {
  const isPalindrome = function (str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  const palindromeArray = arr.filter((str) => isPalindrome(str));

  return palindromeArray;
};

const result = findPalindromes(a1);
console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log("\nIIFE Output : ");

const a2 = ["racecar", "hello", "level", "world", "deified"];

(function (arr) {
  const isPalindrome = function (str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  const palindromeArray = arr.filter((str) => isPalindrome(str));

  console.log(palindromeArray);
})(a2);
