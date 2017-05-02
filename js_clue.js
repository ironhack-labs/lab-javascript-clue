// CLUE: At the beginning of the game, players shuffle each one of the card stacks
// to create a combination of suspect, weapon and room. This will be the mystery to solve.

// Suspects
var mrGreen = {
	firstName: "Jacob",
	lastName: "Green",
	color: "green",
	occupation: undefined,
	age: undefined,
	description: undefined
};

var msOrchid = {
	firstName: "Doctor",
	lastName: "Orchid",
	color: "white",
	occupation: "plant toxicologist",
	age: undefined,
	description: undefined
};

var mrPlum = {
	firstName: "Victor",
	lastName: "Plum",
	color: "purple",
	occupation: "video game designer",
	age: undefined,
	description: undefined
};

var msScarlet = {
	firstName: "Kasandra",
	lastName: "Scarlet",
	color: "red",
	occupation: "movie star",
	age: undefined,
	description: undefined
};

var msPeacock = {
	firstName: "Eleanor",
	lastName: "Peacock",
	color: "blue",
	occupation: undefined,
	age: undefined,
	description: undefined
};

var mrMustard = {
	firstName: "Jack",
	lastName: "Mustard",
	color: "yellow",
	occupation: "former football player",
	age: undefined,
	description: undefined
};


// Weapons
var rope = {
	name: "rope",
	weight: undefined,
	color: undefined,
	damage: 2
};

var knife = {
	name: "knife",
	weight: undefined,
	color: undefined,
	damage: 4
};

var candlestick = {
	name: "candlestick",
	weight: undefined,
	color: undefined,
	damage: 0
};

var dumbell = {
	name: "dumbell",
	weight: undefined,
	color: undefined,
	damage: 1
};

var poison = {
	name: "poison",
	weight: undefined,
	color: undefined,
	damage: 5
};

var axe = {
	name: "axe",
	weight: undefined,
	color: undefined,
	damage: 5
};

var bat = {
	name: "bat",
	weight: undefined,
	color: undefined,
	damage: 3
};

var trophy = {
	name: "trophy",
	weight: undefined,
	color: undefined,
	damage: 2
};

var pistol = {
	name: "pistol",
	weight: undefined,
	color: undefined,
	damage: 5
};


// Rooms

var diningRoom = {
	name: "dining room",
	floor: "ground"
};

var conservatory = {
	name: "conservatory",
	floor: "ground"
};

var kitchen = {
	name: "kitchen",
	floor: "ground"
};

var study = {
	name: "study",
	floor: "ground"
};

var library = {
	name: "library",
	floor: "first"
};

var billiardRoom = {
	name: "billiard room",
	floor: "first"
};

var lounge = {
	name: "lounge",
	floor: "ground"
};

var ballroom = {
	name: "ballroom",
	floor: "first"
};

var hall = {
	name: "hall",
	floor: "ground"
};

var spa = {
	name: "spa",
	floor: "first"
};

var livingRoom = {
	name: "living room",
	floor: "ground"
};

var observatory = {
	name: "observatory",
	floor: "first"
};

var theater = {
	name: "theater",
	floor: "first"
};

var guestHouse = {
	name: "guest house",
	floor: "ground"
};

var patio = {
	name: "patio",
	floor: "ground"
};


// Collections
var suspects = [ mrGreen, msOrchid, mrPlum, msScarlet, msPeacock, mrMustard ];
var weapons = [ rope, knife, candlestick, dumbell, poison, axe, bat, trophy, pistol ];
var rooms = [ diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge,
  ballroom, hall, spa, livingRoom, observatory, theater, guestHouse, patio ];


// Card stacks
var cardStacks = [ suspects, weapons, rooms ];


// Create a method to randomly select one element from a card stack
function selectRandom( array ) {
	return array[ Math.floor( Math.random() * array.length ) ];
}


// Create another function that calls the method above once for each card stack.
function startStacks( array ) {
	caseFileConfidential = [];
	array.forEach( function ( stack, key ) {
		caseFileConfidential[ key ] = selectRandom( stack );
	} );
	return caseFileConfidential;
}


// Place the “Case File Confidential” in a virtual envelope.
var virtualEnvelope = startStacks( cardStacks );


// Create a method to reveal the mystery.
function revealMistery( array ) {
	console.log( "Mr. Boddy was killed by " + array[ 0 ].firstName + " " + array[ 0 ].lastName +
		" with the weapon " + array[ 1 ].name + " in the " + array[ 2 ].name );
}

revealMistery( virtualEnvelope );
