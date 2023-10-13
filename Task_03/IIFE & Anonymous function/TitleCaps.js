// Anonymous Function
console.log('\nAnonymous Function Output : ')
const a1 = ["apple", "banana", "cherry", "date"];

const convertToTitleCase = function(arr) {
  const t1 = arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });

  return t1;
};

const res1 = convertToTitleCase(a1);
console.log(res1);

// --------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log('\nIIFE Output : ')
const a2 = ["apple", "banana", "cherry", "date"];

(function(arr) {
  const t2 = arr.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });

  console.log(t2);
})(a2);


