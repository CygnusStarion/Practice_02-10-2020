const me = {
  name: "Joshua James Gray",
  dob: "11-05-1975",
  family: {
    brother: "Wesley",
    sister: "Madria",
    mother: "Pamela",
    father: "Ralph (deceased)",
    uncle: "Charles",
    aunt: "Emmylou",
    fiance: "Mary (deceased)"
  }
};

console.log(me.family.fiance);

// create a new key value pair
me.age = 44;

me.name = "Cygnus Starion";

// References the key 'name' inside of OBJECT me.
console.log(me.name);

// References all keys within OBJECT me.
console.log(me);

const keyThatINeed = "family";

// Use BRACKET NOTATION to access a key that is REFERENCED by a VARIABLE
console.log(me["family"]);

console.log(`Bracket notation with variable: ${me[keyThatINeed]}`);
console.log(`Bracket notation with variable: ${me["keyThatINeed"]}`);
console.log("Bracket notation with variable: ", me.family[keyThatINeed]);

console.log(22 % 23);
console.log(22 * 23);
console.log(22 + 23);
console.log(22 - 23);
console.log(42 / 2);

// Relational or COMPARISON OPERATORS always yield BOOLEANS
console.log(1 === 2);
console.log(1 < 2);

// To check if 2 things are considered to equal...

// Single = is assignment
// triple === is comparison

console.log(2 !== 3); // true

const x = 2;

// EXPRESSION is anything that evaluates to a value
// STATEMENTS combine EXPRESSIONS with keywords and other syntax

if (x === 3) {
  // {}s establish SCOPE of the code.
  console.log("x is 3!");
} else {
  console.log("x is not 3!");
}

const age = 44;

if (age >= 25) {
  console.log("Renting a car is affordable");
} else if (age >= 18) {
  console.log("Renting a car is expensive!");
} else {
  // All other ages
  console.log("You are not old enough to rent a car");
}

// TODO: REwrite this to check if age is less than 18
// If so, log
