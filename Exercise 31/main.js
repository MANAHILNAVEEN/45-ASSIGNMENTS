"use strict";
let userNames = ["sufyan", "sudais", "ali", "Admin", "hifza"];
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some user!");
}
else {
    // using forEach loop on array
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser}, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${oneUser}, Thank you for logging in again.`);
        }
    });
}