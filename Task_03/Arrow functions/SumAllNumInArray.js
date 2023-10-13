const array = [9, 8, 7, 6, 5];
add = (arr) => {
  let sum = 0;
  for (let e of arr) {
    sum += e;
  }
  return sum;
};
x = add(array);
console.log(x);
