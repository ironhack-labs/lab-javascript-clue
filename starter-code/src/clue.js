// Characters

// Characters Collection
var charactersArray = [
	{ 
		mrGreen : {
		first_name:   "Jacob",
		last_name:    "Green",
		color:        "green",
		description:  "He has a lot of connections",
		age:          45,
		image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
		occupation:   "Entrepreneur"
		} 
	},
	{
		drOrchid: {
			first_name:   "Doctor",
			last_name:    "Orchid",
			color:        "white",
			description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
			age:          26,
			image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
			occupation:   "Scientist",
		}
	}, 
	{
		profPlum: {
			first_name:   "Victor",
			last_name:    "Plum",
			color:        "purple",
			description:  "Billionare video game designer",
			age:          22,
			image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
			occupation:   "Designer",
		}
	}, 
	{
		missScarlet: {
			first_name:   "Kasandra",
			last_name:    "Scarlet",
			color:        "red",
			description:  "She is an A-list movie star with a dark past",
			age:          31,
			image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
			occupation:   "Actor",
		}
	}, {
		mrsPeacock: {
			first_name:   "Eleanor",
			last_name:    "Peacock",
			color:        "blue",
			description:  "She is from a wealthy family and uses her status and money to earn popularity",
			age:          36,
			image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
			occupation:   "Socialité",
		}
	}, {
		mrMustard: {
			first_name:   "Jack",
			last_name:    "Mustard",
			color:        "yellow",
			description:  "He is a former football player who tries to get by on his former glory",
			age:          62,
			image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
			occupation:   "Retired Football player",
		}
	}
];

// Weapons Collection
var weaponsArray = [
	{ name: "rope" ,weight: 10 },
	{ name: "candlestick", weight: 2 },
	{ name: "dumbbell", weight: 30 },
	{ name: "poison", weight: 2 },
	{ name: "axe", weight: 15 },
	{ name: "bat", weight: 13 },
	{ name: "trophy", weight: 25 },
	{ name: "pistol", weight: 20 }
];

// Rooms' Collection
var roomsArray = [
	{ name: "Dinning Room" },
	{ name: "Conservatory" },
	{ name: "Kitchen" },
	{ name: "Study" },
	{ name: "Library" },
	{ name: "Billiard Room" },
	{ name: "Lounge" },
	{ name: "Ballroom" },
	{ name: "Hall" },
	{ name: "Spa" },
	{ name: "Living Room" },
	{ name: "Observatory" },
	{ name: "Theater" },
	{ name: "Guest House" },
	{ name: "Patio" }
];

function randomSelector (arr) {
	var randomE = Math.floor(Math.random() * (arr.length));
	return arr[randomE];
}

randomSelector(roomsArray);


var misteryEnvelope = [];
var cards = [charactersArray, weaponsArray, roomsArray];


function pickMistery (){
	var misteryEnvelope = [];
	if (cards.length != 0){
		for(var i=0; i < cards.length; i++){
			misteryEnvelope.push(randomSelector(cards[i]));
		}
		return misteryEnvelope;
	}
}

function revealMistery(misteryEnvelope) {
	if (misteryEnvelope.length != 0) {

		var murderer = Object.values(misteryEnvelope[0]);
		var weapon = misteryEnvelope[1];
		var room = misteryEnvelope[2];

		var nameMurderer = murderer[0];
		var surnameMurderer = murderer[1];
		var weaponMurderer = weapon.name;
		var roomMurderer = room.name;
	
		var reaviling = nameMurderer + ' ' + surnameMurderer + ' killed Mr.Boddy using the ' + weaponMurderer + ' in the ' + roomMurderer + '!!!!';
		return reaviling;
	}
}

