// Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(1900)); // Output: false
console.log(isLeapYear(2000)); // Output: true
