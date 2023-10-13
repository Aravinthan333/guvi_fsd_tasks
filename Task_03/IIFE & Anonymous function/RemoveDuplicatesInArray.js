// Anonymous Function
console.log("\nAnonymous Function Output : ");

const arr1 = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const removeDuplicates = function (arr) {
  let uniqueArr = [];
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
};

const result = removeDuplicates(arr1);
console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log("\nIIFE Output : ");

const arr2 = [1, 2, 3, 2, 3];
(function (arr) {
  let uniqueArr = [];
  for (let i of arr) {
    if (uniqueArr.indexOf(i) === -1) {
      uniqueArr.push(i);
    }
  }
  console.log(uniqueArr);
})(arr2);
