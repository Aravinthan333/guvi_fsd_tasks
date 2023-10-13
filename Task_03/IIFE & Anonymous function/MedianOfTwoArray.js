// Anonymous Function
console.log("\nAnonymous Function Output : ");

const a1 = [1, 3, 5, 7];
const a2 = [2, 4, 6, 8];

const findMedian = function (arr1, arr2) {
  const mergedArray = [...arr1, ...arr2];
  mergedArray.sort((a, b) => a - b);

  const length = mergedArray.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
};

const median = findMedian(a1, a2);
console.log(median);

// -----------------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log("\nIIFE Output : ");

const arr3 = [1, 3, 5, 7];
const arr4 = [2, 4, 6, 8];

(function (array1, array2) {
  const mergedArray = [...array1, ...array2];
  mergedArray.sort((a, b) => a - b);

  const length = mergedArray.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    console.log((mergedArray[middle - 1] + mergedArray[middle]) / 2);
  } else {
    console.log(mergedArray[middle]);
  }
})(arr3, arr4);
