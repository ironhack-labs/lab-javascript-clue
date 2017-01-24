var suspect = ["Jacob Green", "Doctor Orchid", "Victor Plum", "Kasandra Scarlet", "Eleanor Peacock", "Jack Mustard"];
var weapon = ["Rope", "Knife", "Candlestick", "Dumbbell", "Poison", "Axe", "Bat", "Trophy", "Pistol"];
var room = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billard Room", "Hall", "A spa", "Living Room", "Observatory", "Theater", "Guest House", "A patio"];

var randomSuspect = suspect[Math.floor(Math.random() * suspect.length)];
var randomWeapon = weapon[Math.floor(Math.random() * weapon.length)];
var randomRoom = room[Math.floor(Math.random() * room.length)];

var murder = [];
murder.push(randomSuspect);
murder.push(randomWeapon);
murder.push(randomRoom);

console.log("If you want to know who, how and where the victim was murdered just type 'murder' in the console");
