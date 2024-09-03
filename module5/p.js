let person = {
  name: 'Md: yunus sheikh',
  age: 29,
  gender: 'Male',
  displayName: function () {
    console.log(this.name);
  }

};

// Deleting property
/*
delete person.age;
console.log(person.age);// outputs: undefined
*/

//  dot notation
// person.displayName(); //outputs: age 29

// square bracket notation 
person["displayName"]();//outputs: age 29