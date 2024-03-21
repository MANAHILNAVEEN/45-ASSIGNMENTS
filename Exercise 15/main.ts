let guestList = ["hifza", "sufyan", "sudais", "ali"];;
let cantCome = guestList[0];
console.log(cantCome, "can not come due to her job");
guestList.splice(0, 1, "manahil");
guestList.forEach(guest => console.log(`Asalam o Alikum  ${guest}, we are inviting you for a dinner with us.`));