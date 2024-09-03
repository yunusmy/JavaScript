console.log('go');

const subjects = ['ban', 'eng', 'phy', 'math'];


// object

const bottle = {

  brand: 'apple',
  price: 45,
  color: 'white',
  isClean:false,
}


const subject = {
  
  name: 'biology',
  teacher: 'yunus',
  exanDate: '30 Feb',

}

const person = {
  name: 'md yunus sheikh',
  age: 29,
  profession: 'developer',
  salary: 25000,
  married: true, 
  'fav places': ['a','b','c']
}

// dot notation

console.log(person.name);
const income = person.salary;

console.log(income);


// bracket notation
//

console.log(person['age']);

const boyos = person['age'];
console.log(boyos);

console.log(person['fav places']);
