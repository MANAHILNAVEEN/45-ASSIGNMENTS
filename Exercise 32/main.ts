// array of current users
let current_users = ["manahil", "hifza", "mahnoor", "fajr", "rumana"]
// array of new user
let new_users = ["sufyan", "sudais", "ali", "Manahil", "hifza"]

// loop through new_users to check for usernames availibility

new_users.forEach(new_one_user => {

    // making a condition for username already exist and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // print different message using if-else statement
    if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})