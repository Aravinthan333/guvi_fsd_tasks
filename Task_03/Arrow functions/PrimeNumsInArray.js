const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = numbers.filter((number) => isPrime(number));

console.log(primeNumbers);
