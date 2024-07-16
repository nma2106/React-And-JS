// Constructor Method
// Singleton are created in this 

const mysymb = Symbol("Key1");

// Object.create

// Object Literals
const JsUser = {
    name: "Naman",
    age: "23",
    isLoggedIn: "false",
    [mysymb]: "myKey1",
    "full name": "Naman Aryan"
};

console.log(JsUser.age);
console.log(JsUser["full name"]);
console.log(JsUser[mysymb]);

// Update age
JsUser.age = "24";

// Freeze the object
Object.freeze(JsUser);

console.log(JsUser);

// Add greeting methods
JsUser.greeting = function() {
    console.log("Hello user");
};

console.log(JsUser.greeting());

JsUser.greetingTwo = function() {

    // HERE WE ARE USING BAPTICS INSTEAD OF STRINGS TO MANIPULATE IT 
    console.log(`This age is: ${this.age}`);
};

// Call the greetingTwo method
JsUser.greetingTwo();
