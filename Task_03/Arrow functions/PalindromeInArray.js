const arr = ["racecar", "hello", "level", "world", "deified"];

const isPalindrome = (word) => {
  const temp = word.toLowerCase();
  const reversed = temp.split("").reverse().join("");
  return temp === reversed;
};

const palindromes = arr.filter((word) => isPalindrome(word));

console.log(palindromes);
