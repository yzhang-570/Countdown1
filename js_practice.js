/* Beginner Challenge */

const bookList = [
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ulysses", author: "James Joyce" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "Moby Dick", author: "Herman Melville" },
];

/* Do all of these using proper ES6 syntax
Using the following array of objects,
*/

// (1) Write an arrow function that adds a new entry to bookList
const addBook = (newTitle, newAuthor) => {
  // your code here
  bookList.push({title: newTitle, author: newAuthor});
};
addBook("Heaven Official's Blessings", "Mo Xiang Tong Xiu")
console.log(bookList);

// (2) Write an arrow function that removes a specific book from the bookList
const removeBook = (removeTitle, removeAuthor) => {
  // your code here

  // ***alt: use filter - doesn't that technically return a new list; yes, which is ok
  const removeIndex = bookList.findIndex(book => (book.title === removeTitle && book.author === removeAuthor));
  bookList.splice(removeIndex, 1)
};
removeBook("Moby Dick", "Herman Melville")
removeBook("The Great Gatsby", "F. Scott Fitzgerald")
console.log(bookList);

// (3) Write an arrow function that prints all book titles using .forEach()
const printBooks = () => {
  // your code here
  bookList.forEach(book => console.log(book.title));
};
printBooks();


/* Intermediate Challenge */

// (4) Write a one-line arrow function that takes in a number and returns
// whether the number is positive or negative using a ternary operator

// 0 counts as positive
const numberSign = (n) => n >= 0 ? "Positive":"Negative";//  remove null type and add your code here
console.log(numberSign(5));
console.log(numberSign(0));
console.log(numberSign(-5)); //negative

/* (5) Write a switch statement for a 'day' variable that prints something
based off of what day of the week it is */

let day = "Saturday";

switch(day){
  case "Monday":
    console.log("It's moo Monday");
    break;
  case "Tuesday":
    console.log("It's tehee Tuesday");
    break;
  case "Wednesday":
    console.log("It's weee Wednesday");
    break;
  case "Thursday":
    console.log("It's thrilling Thursday");
    break;
  case "Friday":
    console.log("It's frying Friday");
    break;
  case "Saturday":
    console.log("It's sunny Saturday");
    break;
  case "Sunday":
    console.log("It's so Sunday");
    break;
  default:
    console.log("The day you entered is not a valid day of the week");
}

/* (6) Write an arrow function that takes in a number and returns the sum
of every number from 1 up to that number */

// includes n
const sumUp = (n) => {
  // your code here
  sum = 0;
  for(i = 0; i <= n; i++) {
    sum += i;
  }
  return sum
};
console.log(sumUp(5)); //15
console.log(sumUp(2)); //3


/* Harder Challenge */

// (7) Convert Celsius to Fahrenheit and return clothing advice

const temperature = (celsius) => {
  // your code here
  const farenheit = celsius * 1.8 + 32;
  if (farenheit > 80) {
    return "Dress warm";
  }
  else {
    return "Wear fewer layers";
  }
};
console.log(temperature(40)); //Wear fewer layers
console.log(temperature(18)); //Dress warm


/* (8) Print the amount of truthy values in an array using .forEach() */

const truthy = (arr) => {
  // your code here
  numTruthy = 0;
  arr.forEach(val => {
    if (val) numTruthy += 1;
  })
  return numTruthy;
};
console.log(truthy([0, '', "", undefined, NaN, null, false, 2, {}])) //2


/* (9) Using map(), return an array of objects that contain:
   - fullName
   - averageGrade */
  //  Q: does this mean letter grade of each student (?) or a single object with... 1 full name and the avg grade of all?

const attendance = [
  { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 }, //A
  { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 }, //C
  { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },   //A
  { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },//D
  { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 }, //C
  { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },  //A
  { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },  //A
];

const gpaToLetter = (gpa) => {
  if (gpa >= 3.7) return "A";
  if (gpa >= 3.0) return "B";
  if (gpa >= 2.0) return "C";
  if (gpa >= 1.0) return "D";
  return "F";
};

const newArr = attendance.map(student => ({
  // your code here
  "fullName": 'Name: ${student.firstName} ${student.lastName}',
  "averageGrade": gpaToLetter(student.gpa)
}));

console.log(newArr)


/* Hardest Challenge (Don't do this without completing harder challenges) */

/* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */

// assuming num < 1,000,000. Pattern holds with higher numbers but just requires more checks
// does not support leading zeros
const numberToWordsLength = (num) => {
  const words = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four",
    5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine",
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen",
    14: "fourteen", 15: "fifteen", 16: "sixteen",
    17: "seventeen", 18: "eighteen", 19: "nineteen",
    20: "twenty"
  };

  return words[num].length;
};

// constraints: 0 <= num <= 20
const allPathsLeadToFour = (num) => {
  // your code here
  path = [num]

  var currentLength = num;
  while(currentLength !== 4) {
    currentLength = numberToWordsLength(currentLength);
    path.push(currentLength);
  }
  return path
};

console.log(allPathsLeadToFour(11));