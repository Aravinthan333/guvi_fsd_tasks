const stringArray = ["hello world", "javascript is awesome", "openai is great"];

const titleCaseArray = stringArray.map((str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
});

console.log(titleCaseArray);
