/* 
// Creating object
let user = {
    firstName: 2,
    lastName: "Sapalaran",

    // adding function inside object
    setPassword: (user, password) => {
        user.password = password
    },

    // use string if the key name equires space
    "user Hobbies": [
        "Soccer", 
        "Basketball",
        "Swimming",
    ],

    getFullName: (user) => {
        return `${user.firstName} ${user.lastName}`
    }

}

//console.log(user);

// pass our user
//console.log(user.getFullName(user));

// if we want to access certain property (using a dot notation)
//console.log(user.firstName);

// Another way to access it is (using the bracket notation)
//console.log(user["lastName"]);
// for this its better to use (bracket notation) to access its property
//console.log(user["user Hobbies"]);

// How to check if a certain property exists
// if("firstName" in user){
//     console.log("First name exist");
// }

// if("randomName" in user){
//     console.log("Random name exist");
// }else {
//     console.log("Random name does not exist");
// }


// How to loop into an object

// using `in` will loop through the keys
// for (let prop in user) {
//     console.log(prop)
// }

// finds a key that a certain string as a  variable
// basically printing out the value of each keys
// for (let prop in user) {
//     console.log(user[prop])
// }

*/


// Creating Classes


// Note: this class is just a template not an object yet
class User {
    // Constructor method used to initialized the values
    constructor(firstName, lastName, userHobbies) {

        // `this` keyword specifies to this object
        // for `this` object we want the value (firstName, lastName, userHobbies)
        this.firstName = firstName;
        this.lastName = lastName;
        this.userHobbies = userHobbies;

    }

    // adding function in the class
    getFullName = () => {
        return `${this.firstName} ${this.lastName}`
    }
}



// Inheritance added
class AdminUser extends User {
    // add function for password
    setPassword = (password) => {
        this.password = password
    }
}

// Andrew is the User
let Andrew = new User("Andrew", "Sapalaran", ["Programming", "Lifting", "Walking with my dog"]);
console.log(Andrew)

// Jay is the AdminUser
let Jay = new AdminUser("Jay", "Smith", ["Working", "Sleeping"])
console.log(Jay);




/* 
// Now here we create the object 1
let Andrew = new User("Andrew", "Sapalaran", ["Programming", "Lifting", "Walking with my dog"]);

console.log(Andrew)
console.log(Andrew.getFullName())

// Creating 2nd object
let John = new User("John", "Smith", ["Soccer", "Basketball"]);

console.log(John)
console.log(John.getFullName())
*/