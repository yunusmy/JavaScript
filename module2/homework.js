/***
 * 1

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const free = 445;
if (free > 500) {
  console.log("burger more than 500 tk: free coke")
  
} else {
  console.log('coke:30tk')
}

// 2

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 10;
let height = 26;

let bmi = (weight / ((height)**2))

if (bmi < 18.5) {
  console.log('You are underweight');
} else if (bmi >= 18.5 && bmi <= 24.5) {
  console.log('you are normal.');
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log('you are overweight.');
} else {
  console.log('you are obese');
}



// 3
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let marks = 80;

if (marks >= 90 && marks <= 100) {
  console.log('A');
} else if (marks >= 80 && marks <= 89) {
  console.log('B');
} else if (marks >= 70 && marks <= 79) {
  console.log('C');
} else if (marks >= 60 && marks <= 69) {
  console.log('D');
} else if (marks >= 0 && marks <= 59) {
  console.log('F');
} else {
  console.log('Invalid number');
}

//4. nested
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const score = 70;
if (score > 80) {
  console.log("Go for a lunch");
} else {
  if (score < 80 && score >= 60) {
    console.log('good luck next time');
    
  } else if (score<60 && score>=40) {
    console.log("message unseen.")   
  } else {
    console.log('sleep and act sad');
  }
}


// 5. ternary

/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 50;
let num2 = 29;

let result = (num1 > num2) ? (num1 * 2) : (num1 + num2);

console.log(result);


// 6.

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 34;
const yunus = "student";
const ticketPrice = 800;

if (age < 10) {
  console.log('free');
} else if (yunus == "student") {
  const discount = ticketPrice * 50 / 100;
  const payAmount = ticketPrice - discount;
  console.log(payAmount);
} else if (age >= 60) {
  const discount = ticketPrice * 15 / 100;
  const payAmount = ticketPrice - discount;
  console.log(payAmount);
} else {
  console.log('Regular ticket')
}