/* 4 > 3 && 10 < 12
Will give a true value.
4 > 3 && 10 > 12   False
4 > 3 || 10 < 12   True
4 > 3 || 10 > 12   True
!(4 > 3)      False
!(4 < 3)
True
!(false)
True
!(4 > 3 && 10 < 12)
False
!(4 > 3 && 10 > 12)
True
!(4 === '4')
True
There is no 'on' in both dragon and python
False, there is "on".*/

let value1 = 4 > 3 && 10 < 12;
console.log(value1);

let value2 = 4 > 3 && 10 > 12;
console.log(value2);

let value3 = 4 > 3 || 10 < 12;
console.log(value3);

let value4 = 4 > 3 || 10 > 12;
console.log(value4);
let value5 = !(4 > 3);
console.log(value5);
let value6 = !(4 < 3);
console.log(value6);
let value7 = !false;
console.log(value7);
let value8 = !(4 > 3 && 10 < 12);
console.log(value8);
let value9 = !(4 > 3 && 10 > 12);
console.log(value9);
let value10 = !(4 === "4");
console.log(value10);

let words = "dragon";
console.log(words.includes("on"));
let words2 = "python";
console.log(words2.includes("on"));

// LEVEL 2
//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("enter the base of the triangle");
let height = prompt("enter the height of the triangle");
let area = 0.5 * base * height;
console.log(area);
//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = prompt("enter the radius of the circle");
const pi = 3.14;
let area2 = pi * radius * radius;
console.log(area2);
// Calculate the slope, x-intercept and y-intercept of y = 2x -2

// Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let y1 = 2;
let y2 = 10;
let x1 = 2;
let x2 = 6;
let slopem = (y2 - y1) / (x2 - x1);
console.log(slopem);
//If the length of your name is greater than 7 say, your name is long else say your name is short.
let namee = prompt("enter your first name");
namee.length > 7
  ? console.log("Your Name is long")
  : console.log("Your Name is short");
//Compare your first name length and your family name length and you should get this output.
let namee2 = prompt("enter your last name");
namee.length > namee2.length
  ? console.log(
      "Your FirstName, " +
        namee +
        " is longer than your family name, " +
        namee2 +
        "."
    )
  : console.log("Your Name is short");
//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
let ageDiff = myAge - yourAge;
console.log("I am " + ageDiff + " older than you");
//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let age = prompt("Enter your age");
const diff = 100 - age;
// console.log(now.getSeconds());
//Create a human readable time format using the Date time object
//YYYY-MM-DD HH:mm
const now = new Date();
console.log(now.getFullYear());
let month = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
let indexMonth = now.getMonth();
let currentMonth = month[indexMonth];
console.log(currentMonth);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());

console.log(
  now.getFullYear() +
    "-" +
    currentMonth +
    "-" +
    now.getDate() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes()
);
//DD-MM-YYYY HH:mm
console.log(
  now.getDate() +
    "-" +
    currentMonth +
    "-" +
    now.getFullYear() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes()
);
//DD/MM/YYYY HH:mm
console.log(
  now.getDate() +
    "/" +
    currentMonth +
    "/" +
    now.getFullYear() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes()
);

//LEVEL 3

 let indexHour = now.getHours();
 let currentHour = month[indexHour]

 let indexMinute = now.getMinutes();
 let currentMinute = month[indexMinute]

  indexMinute.length > 2 || indexHour.length > 2
 ? console.log(now.getFullYear() + "-" + currentMonth + "-" + now.getDate() + " " + currentHour + ":" + currentMinute)
 : console.log(
  now.getFullYear() +
    "-" +
    currentMonth +
    "-" +
    now.getDate() +
    " " +
    now.getHours() +
    ":" +
    now.getMinutes()
);
