/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
for (let i =1; i <= 200; i++) {
  console.log(i); 
  if (i >= 100) {
     break;
  }
  
}
console.log('yunus');
//
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let i = 1;
let sum = 0;

while (i <= 100) {
  sum += i;
  if (i >= 80) {
    break;
  }
  i++;
}
console.log(sum);

console.log("yunus");
