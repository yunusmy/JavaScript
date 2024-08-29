const salary = 3000;
const isBCS = true;
const height = 61;
const hasCar = false;

if (salary > 2000 && height > 66) {
  console.log('su-----------patra');

} else {
  console.log('onno patro khuji');
}


if (salary > 2000 || height > 72) {
  console.log('eso baba kobul');
} else {
  console.log('vaag tui mokbul')
}

// more and more condition

if (salary > 2000 && height > 66 && isBCS==true) {
  console.log('su-----------patra');

} else {
  console.log('onno patro khuji');
}
//--------------COMPLEX CONDITION-----------------


if (salary > 2000 && hasCar == true || isBCS == true) {
  console.log('tomar 14 gosti  raji')
}
if (salary > 2000 || hasCar == true && isBCS == true) {
  console.log('tomar 14 gosti  raji')
}