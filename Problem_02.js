// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const getBookTitles = (arr) => {
  return arr.map((book) => book.title);
};

console.log(getBookTitles(books)); // Output: ['The Great Gatsby', '1984', 'To Kill a Mockingbird']
