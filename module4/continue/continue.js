/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/


for (let i = 1; i < 40; i++){
  if (i % 2 !== 1) {
    continue;
  }
  console.log(i);
}





console.log('yunus')

/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
let n = 55;
while (n <= 85) {
   n++;
  if (n % 5 !== 0) {
    continue;
  }
  console.log(n);
 
}
