"use strict";
// creating guest list array
let guestList = ["hifza", "sufyan", "sudais", "ali"];
// making variable for those guest who cant come
let cantCome = guestList[0];
// print the name of guest who cant come
console.log(cantCome, "is not coming due to her job");
// add or remove values from guest array
guestList.splice(0, 1, "fatima");
// message print for bigger table
console.log("Good News ! We have found a bigger table for dinner.");
// adding a new guest at starting index of guest array
guestList.unshift("rahima");
// adding a new guest at ending index of guest array
guestList.push("zain");
// get a middle index of our guest list array
let middleIndex = Math.floor(guestList.length / 2);
// adding a new guest to middle index of guest array
guestList.splice(middleIndex, 0, "mohammad");
// print message of updated list
console.log("Updated list of our guests");
// sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Asalam o Alikum ${oneguest}, would you like to have dinner with me`));