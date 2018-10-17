// Characters

var suspects = {
	mrGreen: {
		first_name:   "Jacob",
		last_name:    "Green",
		color:        "green",
		description:  "He has a lot of connections",
		age:          45,
		image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
		occupation:   "Entrepreneur"
	},

	drOrchid: {
		first_name:   "Doctor",
		last_name:    "Orchid",
		color:        "white",
		description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
		age:          26,
		image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
		ocupation:   "Scientist"
	},

	profPlum: {
		first_name:   "Victor",
		last_name:    "Plum",
		color:        "purple",
		description:  "Billionare video game designer",
		age:          22,
		image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
		occupation:   "Designer"
	},

	missScarlet: {
		first_name:   "Kasandra",
		last_name:    "Scarlet",
		color:        "red",
		description:  "She is an A-list movie star with a dark past",
		age:          31,
		image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
		occupation:   "Actor"
	},

	mrsPeacock: {
		first_name:   "Eleanor",
		last_name:    "Peacock",
		color:        "blue",
		description:  "She is from a wealthy family and uses her status and money to earn popularity",
		age:          36,
		image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
		occupation:   "Socialité"
		},

	mrMustard: {
		first_name:   "Jack",
		last_name:    "Mustard",
		color:        "yellow",
		description:  "He is a former football player who tries to get by on his former glory",
		age:          62,
		image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
		occupation:   "Retired Football player"
	}	
};

// Weapons

var weapons = {
	rope: {
		name: "rope",
		weight: 10
	},

	knife: {
		name: "knife",
		weight: 2
	},

	dumbbell: {
		name: "dumbbell",
		weight: 30
	},

	poison: {
		name: "poison",
		weight: 2
	},

	axe: {
		name: "axe",
		weight: 15
	},

	bat: {
		name: "bat",
		weight: 13
	},

	trophy: {
		name: "trophy",
		weight: 25
	},

	pistol: {
		name: "pistol",
		weight: 20
	}
};

// Rooms

var rooms = {
  
	room1: "Dinning Room",

	room2: "Conservatory",

	room3: "Kitchen",

	room4: "Study",
	
	room5: "Library",

	room6: "Billiard Room",

	room7: "Lounge",
	
	room8: "Ballroom",
	
	room9: "Hall",

	room10: "Spa",

	room11: "Living Room",

	room12: "Observatory",

	room13: "Theater",

	room14: "Guest House",

	room15: "Patio"
};


// Characters Collection



var mrGreen = suspects.mrGreen;
var drOrchid = suspects.drOrchid;
var profPlum = suspects.profPlum; 
var missScarlet = suspects.missScarlet;
var mrsPeacock = suspects.mrsPeacock;
var mrMustard = suspects.mrMustard;


var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

// Rooms' Collection

var room1 = rooms.room1;
var room2 = rooms.room2;
var room3 = rooms.room3;
var room4 = rooms.room4;
var room5 = rooms.room5;
var room6 = rooms.room6;
var room7 = rooms.room7;
var room8 = rooms.room8;
var room9 = rooms.room9;
var room10 = rooms.room10;
var room11 = rooms.room11;
var room12 = rooms.room12;
var room13 = rooms.room13;
var room14 = rooms.room14;
var room15 = rooms.room15;

var roomsArray = [];
roomsArray.push(room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15);

// Weapons Collection

var rope = weapons.rope;
var knife = weapons.knife;
var dumbbell = weapons.dumbbell;
var poison = weapons.poison;
var axe = weapons.axe;
var bat = weapons.bat;
var trophy = weapons.trophy;
var pistol = weapons.pistol;

var weaponsArray = [];
weaponsArray.push(rope, knife, dumbbell, poison, axe, bat, trophy, pistol);

// creating the mistery

function randomSelector (array) {
	var random = Math.floor(Math.random() * (array.length));
	
	var pickedCard = array[random];
	return pickedCard;
};

function pickMistery () {
	var char = randomSelector(charactersArray);
	var weapon = randomSelector(weaponsArray);
	var room = randomSelector(roomsArray);

	var misteryEnvelope = [];
	misteryEnvelope.push(char, weapon, room);
	return misteryEnvelope;
};


function revealMistery (misteryEnvelope) {
	var misteryEnvelope = misteryEnvelope;
	var murdererName = misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name;
	var murderWeapon = misteryEnvelope[1].name;
	var murderRoom = misteryEnvelope[2];

	var description = murdererName + " killed Mr.Boddy using the " + murderWeapon + " in the " + murderRoom.name + "!!!!";
	return description;
};