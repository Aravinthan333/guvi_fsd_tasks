const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = (arr) => {
  for (let number of arr) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
};

oddNumbers(numbers);
