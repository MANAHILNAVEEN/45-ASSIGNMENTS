"use strict";
function makeAlbum(artist, tittle) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum("manahil", "moonlight");
console.log(album);
album = makeAlbum("hifza", "sunshine");
console.log(album);
album = makeAlbum("mahnoor", "sea waves");
console.log(album);
