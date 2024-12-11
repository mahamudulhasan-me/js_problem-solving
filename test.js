const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 22, gender: "female" },
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 27, gender: "male" },
  { name: "James", age: 37, gender: "others" },
];

const findFemalePerson = (arr) => {
  return arr.filter((person) => person.gender === "female");
};

console.log(findFemalePerson(people));
