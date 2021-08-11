// ITERATION 1
// Suspects
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

// Suspects object
const suspectsArray = [ mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard ];

// Rooms
let diningRoom = { name: 'Dinning Room' };
let conservatory = { name: 'Conservatory' };
let kitchen = { name: 'Kitchen' };
let study = { name: 'Study' };
let library = { name: 'Library' };
let billiardRoom = { name: 'Billiard Room' };
let lounge = { name: 'Lounge' };
let ballroom = { name: 'Ballroom' };
let hall = { name: 'Hall' };
let spa = { name: 'Spa' };
let livingRoom = { name: 'Living Room' };
let observatory = { name: 'Observatory' };
let theater = { name: 'Theater' };
let guestHouse = { name: 'Guest House' };
let patio = { name: 'Patio' };

// Rooms object
const roomsArray = [
	diningRoom,
	conservatory,
	kitchen,
	study,
	library,
	billiardRoom,
	lounge,
	ballroom,
	hall,
	spa,
	livingRoom,
	observatory,
	theater,
	guestHouse,
	patio
];

// Weapons
let rope = {
	name: 'rope',
	weight: 10
};

let knife = {
	name: 'knife',
	weight: 8
};

let candlestick = {
	name: 'candlestick',
	weight: 2
};

let dumbbell = {
	name: 'dumbbell',
	weight: 30
};

let poison = {
	name: 'poison',
	weight: 2
};
let axe = {
	name: 'axe',
	weight: 15
};

let bat = {
	name: 'bat',
	weight: 13
};

let trophy = {
	name: 'trophy',
	weight: 25
};

let pistol = {
	name: 'pistol',
	weight: 20
};

// Weapons object collection
const weaponsArray = [ pistol, trophy, bat, axe, poison, dumbbell, candlestick, knife, rope ];

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
