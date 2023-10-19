const obj = {
  fName: "First",
  lName: "Last",
  "d-o-b": "10-19-1995",
  role: "Manager",
  expInYrs: 2,
  isPromote: true,
  vehicles: ["car", "bike", "cycle"],
  address: {
    blockNo: "13B",
    street: "Vivekanandar street",
    nearBy: "Dubai main road",
    Locality: "Dubai Kurukusandhu",
    country: "Dubai",
  },
  Contact: "98xxxxxxx8",
  isMarried: false,
};

// for loop
console.log("\n");
console.log("-------------  FOR LOOP  -------------");
for (i = 0; i < Object.keys(obj).length; i++) {
  console.log(Object.keys(obj)[i], ":", Object.values(obj)[i]);
}
console.log("\n");

// for-of loop
console.log("-------------  FOR-OF LOOP  -------------");

for (const key of Object.keys(obj)) {
  console.log(key, ":", obj[key]);
}
console.log("\n");

// for-in loop
console.log("-------------  FOR-IN LOOP  -------------");

for (const keys in obj) {
  console.log(keys, ":", obj[keys]);
}
console.log("\n");

// for-each loop
console.log("-------------  FOR-EACH LOOP  -------------");
Object.keys(obj).forEach((key1) => {
  console.log(key1, ":", obj[key1]);
});
