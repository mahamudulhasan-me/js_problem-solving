// 1. Array Filtering and Mapping
// Task: Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Sayma", age: 25, gender: "female" },
  { name: "Mahmud", age: 30, gender: "male" },
  { name: "Hasan", age: 22, gender: "male" },
  { name: "Luna", age: 28, gender: "female" },
];

const filterAndMapNames = (arr) => {
  return arr
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(filterAndMapNames(people)); // Output: ['Sayma', 'Luna']
