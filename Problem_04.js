// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2020 },
];

const sortByYear = (arr) => {
  return arr.sort((a, b) => a.year - b.year);
};

console.log(sortByYear(cars));
// Output: [{Honda 2015}, {Toyota 2018}, {Ford 2020}]
