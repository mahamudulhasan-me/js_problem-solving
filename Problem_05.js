// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

const updatePersonAge = (arr, name, newAge) => {
  const person = arr.find((p) => p.name === name);
  if (person) person.age = newAge;
  return arr;
};

console.log(updatePersonAge(people, "Bob", 35));
// Output: [{Alice 25}, {Bob 35}, {Charlie 22}]
