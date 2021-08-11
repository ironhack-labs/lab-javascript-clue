// ITERATION 1

// Suspects Array
let mrGreen = {
	firstName: 'Jacob',
	lastName: 'Green',
	occupation: 'Entrepreneur',
	age: 45,
	description: 'He has a lot of connections',
	image: 'https://i.imgur.com/qoEcCH3.png',
	color: 'green'
};

let drOrchid = {
	firstName: 'Doctor',
	lastName: 'Orchid',
	occupation: 'Scientist',
	age: 26,
	description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
	image: 'https://i.imgur.com/udUFegD.png',
	color: 'white'
};

let profPlum = {
	firstName: 'Victor',
	lastName: 'Plum',
	occupation: 'Designer',
	age: 22,
	description: 'Billionare video game designer',
	image: 'https://i.imgur.com/v0KH0vw.png',
	color: 'purple'
};

let missScarlet = {
	firstName: 'Kasandra',
	lastName: 'Scarlet',
	occupation: 'Actor',
	age: 31,
	description: 'She is an A-list movie star with a dark past',
	image: 'https://i.imgur.com/IUUs0M4.png',
	color: 'red'
};

let mrsPeacock = {
	firstName: 'Eleanor',
	lastName: 'Peacock',
	occupation: 'Socialité',
	age: 36,
	description: 'She is from a wealthy family and uses her status and money to earn popularity',
	image: 'https://i.imgur.com/fCYZ02I.png',
	color: 'blue'
}; //

let mrMustard = {
	firstName: 'Jack',
	lastName: 'Mustard',
	occupation: 'Retired Football player',
	age: 62,
	description: 'He is a former football player who tries to get by on his former glory',
	image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
	color: 'yellow'
};

const suspectsArray = [ mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard ];

// Rooms Array

const roomsArray = [];

// Weapons Array

const weaponsArray = [];

// ITERATION 2

function selectRandom() {}

function pickMystery() {}

// ITERATION 3

function revealMystery() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = {
		suspectsArray,
		roomsArray,
		weaponsArray,
		pickMystery,
		revealMystery,
		selectRandom
	};
}
