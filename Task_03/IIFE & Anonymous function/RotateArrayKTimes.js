// Anonymous Function
console.log("\nAnonymous Function Output : ");

const array = [1, 2, 3, 4, 5];
const k = 2;

const rotateArray = function (arr, k) {
  const n = arr.length;
  k = k % n;
  const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
  return rotatedArray;
};

const result = rotateArray(array, k);
console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log("\nIIFE Output : ");

const a = [1, 2, 3, 4, 5];
const k1 = 2;

(function (arr, k) {
  const n = arr.length;
  k = k % n;
  const rotatedArray = [...arr.slice(k), ...arr.slice(0, k)];
  console.log(rotatedArray);
})(a, k1);
