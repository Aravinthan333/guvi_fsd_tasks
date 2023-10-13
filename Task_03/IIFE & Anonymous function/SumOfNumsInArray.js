// Anonymous Function
console.log("\nAnonymous Function Output : ");

const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfNumbers = function (ar) {
  let s = 0;
  for (let n of ar) {
    s += n;
  }
  return s;
};

const result = sumOfNumbers(a1);
console.log(result);

// -------------------------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log("\nIIFE Output : ");

const a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum);
})(a2);
