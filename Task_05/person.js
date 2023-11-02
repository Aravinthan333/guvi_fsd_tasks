class Person {
  constructor(firstName, lastName, age, gender, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }

  details() {
    return `Name: ${this.firstName + " " + this.lastName}, Age: ${
      this.age
    }, Gender: ${this.gender}, Email: ${this.email}`;
  }
}
const person1 = new Person("John", "Doe", 30, "Male", "john.doe@example.com");

console.log(person1.details());
