let person = {
  name: 'md yunus sheikh',
  age: 29,
  gender:'Male',
}

let user = person; //Assign person variable to a new variable

user.name = "yunus";
user.age = 24;
console.log(person.name); // prints :yunus
console.log(user.age); // prints: age 24