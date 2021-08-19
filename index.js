/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// Log a separator
console.log("===============[TASK 1]===============");

// Create a 'Person' class
class Person {
  // Create the constructor function, taking in name and age
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  // Add methods to the Person prototype
  eat(food) {
    // If there are less than 10 foods in stomach...
    if (this.stomach.length < 10) {
      // ...allow the person to eat, adding food to stomach
      this.stomach.push(food);
      return `${this.name} ate a(n) ${food}.`;
    } else {
      // ...otherwise, prevent eating, returning a message, instead.
      return `${this.name} is full; they cannot eat the ${food}.`;
    }
  }
  poop() {
    // Reset the stomach array after pooping
    this.stomach = [];
    return `Woah... ⊙﹏⊙ | Contents of stomach now => ${this.stomach}`;
  }
  toString() {
    // Print out the name and age using template literals
    return `${this.name}, ${this.age}`;
  }
}

// Create a person object named julie
const julie = new Person("Julie", 25);

// Test if the toString() method works
console.log("[1]", julie.toString());

// Test if the eat() method works
console.log("[2]", julie.eat("sandwich"));
console.log("[3]", julie.eat("apple"));
console.log("[4]", julie.eat("cookie"));
console.log("[5] Food in stomach =>", julie.stomach);

// Test if the poop() method works
console.log("[6]", julie.poop());

/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// Log a separator
console.log("===============[TASK 2]===============");

// Create a 'Car' class
class Car {
  // Create the object constructor function, taking in model and MPG
  constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }
  // Add methods to the Car prototype
  fill(gallons) {
    // Add 'gallons' to the tank
    this.tank += gallons;
    // Return a success message
    return `${gallons} gallons were added to the ${this.model}'s tank!`;
  }
  drive(distance) {
    // Calculate and store the maximum possible travel distance
    const maxTravelDistance = this.tank * this.milesPerGallon;
    // If the desired travel distance can be reached...
    if (distance < maxTravelDistance) {
      // ...add miles to the odometer...
      this.odometer += distance;
      // ...remove gallons of fuel used from the tank...
      this.tank -= distance / this.milesPerGallon;
      // ...and return the distance traveled and fuel remaining.
      return `I traveled ${distance} miles! Fuel left: ${this.tank} gallon(s).`;
    } else {
      // ...otherwise, go as far as you can...
      this.odometer += maxTravelDistance;
      // ...set the tank to empty...
      this.tank = 0;
      // ...and return a failure to reach destination message.
      return `I ran out of fuel at ${maxTravelDistance} miles!`;
    }
  }
}

// Create a new car object, and print it to the console
const mustang = new Car("Mustang", 25);
console.log("[1] Instance of Car =>", mustang);

// Test if the tank can be filled
console.log("[2]", mustang.fill(4));

// Test if the car can drive a traversable distance
console.log("[3]", mustang.drive(75));

// Test if the car cannot drive past the amount allowed by its tank
console.log("[4]", mustang.drive(100));

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/

// Log a separator
console.log("===============[TASK 3]===============");

// Create a 'Lambdasian' class
class Lambdasian {
  // Create a object constructor, taking in attributes as an object
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  // Add methods to the Lambdasian's prototype
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// Create a Lambdasian named Bilbo, and log the new object
const bilbo = new Lambdasian({
  name: "Bilbo",
  age: 111,
  location: "The Shire",
});
console.log("[1]", bilbo);

// Test if the Lambdasian may introduce himself
console.log("[2]", bilbo.speak());

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/

class Instructor {}
/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student {}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager {}
/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

//End of Challenge
/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo() {
  return "bar";
}

module.exports = {
  foo,
  Person,
  Car,
  Lambdasian,
  Instructor,
  Student,
  ProjectManager,
};
