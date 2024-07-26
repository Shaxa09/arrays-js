let people = ["Alex", "Shaxa", "Danya", "Asad", "Jony", "Davlat", "Elizabeth"];

let maxLen = 0;
people.filter(name => {
  if (name.length > maxLen) {
    maxLen = name.length;
  }
});

let longestNames = people.filter(name => name.length === maxLen);

console.log(longestNames);
