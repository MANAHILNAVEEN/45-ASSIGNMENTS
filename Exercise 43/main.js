"use strict";
let magicianName = ["manahil", "hifza", "mahnoor"];
function make_great(magicianName) {
    let greatMagicians = [];
    magicianName.forEach(magicianName => {
        greatMagicians.push(`${magicianName} the great`);
    });
    return greatMagicians;
}
let greatMagicians = make_great(magicianName.slice());
console.log(`original magicians: ${magicianName}`);
make_great(magicianName);
console.log(`great magicians: ${greatMagicians}`);
make_great(greatMagicians);
