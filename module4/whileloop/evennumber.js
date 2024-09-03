/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let number = 78;
let sum = 0;
while (number <= 98) {
  if (number % 2 == 0) {
  
    sum += number;
  }
  number++
}
 console.log(`sum: ${sum}`);