"use strict";
// 1. write a function to check the length of user input as their name
function checkNameLength(name1) {
    return name1.length;
}
let name1 = "Reshma";
console.log(checkNameLength(name1));
// 2. write a function to compare the number user insert to the number 3 then display the suitable message
function compareNumber(userInput) {
    if (userInput > 3) {
        return "Given number is greater than 3";
    }
    else if (userInput < 3) {
        return "Given number is less than 3";
    }
    else {
        return "Given number is equal to 3";
    }
}
let userInput = 4;
console.log(compareNumber(userInput));
const users = [
    { name: "andrea", age: 4 },
    { name: "hanna", age: 9 },
];
function checkUserAge(users) {
    return users.filter((user) => user.age > 3);
}
console.log(checkUserAge(users));
// 3. write a function that take users array as a parameter then check if user has age greater than 3
// 4. write a function takes 2 parameters : users array and userInput to check if the userInput is matched with the user name
function matchUserName(users, userInput) {
    return users.filter((user) => user.name === userInput);
}
console.log(matchUserName(users, "andrea"));
//  2 ways
// searchName(users, "alex"); => alex is not in the users array
// searchName(users, "andrea"); => andrea is in the users array
