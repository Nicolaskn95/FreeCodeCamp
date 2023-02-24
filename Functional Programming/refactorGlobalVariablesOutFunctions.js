// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {

const bookRelease = [...bookList]
  bookRelease.push(bookName);
  return bookRelease;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  const bookRelease = [...bookList]
  const book_index = bookRelease.indexOf(bookName);
  if (book_index >= 0) {

    bookRelease.splice(book_index, 1);
    return bookRelease;

    // Change code above this line
    }
}

// console.log(add(bookList, "A Brief History of Time"))
console.log(remove(bookList, "On The Electrodynamics of Moving Bodies"))