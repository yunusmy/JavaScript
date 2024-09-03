/**
 * Loop through an object and print the key-value pairs with their types

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
 */


let myObject = {
  name: 'John Don',
  age: 25,
  city: 'EXample City',
  isStudent: true,
};


for (let key in myObject) {
  const value = myObject[key];
console.log(key, ' | ', value, typeof value );
}

