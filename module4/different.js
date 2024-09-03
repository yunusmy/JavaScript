//  odd number

for (let i = 0; i < 20; i++){
  if (i%2 === 1) {
    console.log(i)
  }
}

// give me the list numbers between 1 to 30 divisible by 5

for (let i = 1; i <= 30; i++){
  if (i % 5 === 0) {
    console.log(i)
  }
}



for (let i = 1; i <= 150; i++){
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i)
  }
}


//

for (let i = 1; i <= 300; i++){
  if (i % 3 === 0 || i % 5 === 0) {
    console.log(i);
  }
}



// sum

let total = 0;
for (let i = 1; i <= 20; i++){
  if (i % 3 === 0) {
    console.log(i);
    total = total + 1;

    console.log('total',total);

  }
}

console.log('Total of the number',total)