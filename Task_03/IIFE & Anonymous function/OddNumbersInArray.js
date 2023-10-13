// Anonymous Function
console.log('\nAnonymous Function Output : ')
const n1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printOddNumbers = function(arr) {
  for (let b of arr) {
    if (b % 2 !== 0) {
      console.log(b);
    }
  }
};
printOddNumbers(n1);

//----------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log('\nIIFE Output : ')
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

(function(arr) {
  for (i = 0; i <n.length; i++) {
    if (n[i] % 2 !== 0) {
      console.log(n[i])
    }
}})(n)