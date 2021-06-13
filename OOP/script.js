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
for (let prop in user) {
    console.log(user[prop])
}