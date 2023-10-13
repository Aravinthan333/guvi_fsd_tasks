// Anonymous Function
console.log('\nAnonymous Function Output : ')

const a1 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const findPrimes = function(arr) {
  const isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  };

  const primeNumbers = arr.filter(num => isPrime(num));

  return primeNumbers;
};

const result = findPrimes(a1);
console.log(result);


// -----------------------------------------------------------------------------------------------------------------------------------

// IIFE
console.log('\nIIFE Output : ')

const a2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

(function(arr) {
  const isPrime = function(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
  };

  const primeNumbers = arr.filter(num => isPrime(num));

  console.log(primeNumbers);
})(a2);
