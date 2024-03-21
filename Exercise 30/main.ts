// creating a array
let userNames = ["sufyan", "sudais", "ali", "manahil", "hifza", "Admin"];

// using forEach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
     console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, Thank you for logging in again.`)
    }
})