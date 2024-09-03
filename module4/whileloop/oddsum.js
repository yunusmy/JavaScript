/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


let i = 81;
let sum = 0;
while (i <= 100) {
  
  if (i % 2!== 0) {
    sum += i;
 }
  i++;
}
console.log(sum);