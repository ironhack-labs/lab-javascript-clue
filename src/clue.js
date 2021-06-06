// ITERATION 1

// Suspects Array
// Miss Scarlett().She is represented by a  token.
// Rev Green("Mr. Green" in North America).He is represented by a green token.
// Colonel Mustard.He is represented by a yellow token.
// Professor Plum.He is represented by a purple token.
//   Mrs.Peacock.She is represented by a blue token.
//     Mrs.White.She is represented by a white token.
// should have 6 suspects
const suspectsArray = [
  {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Entrepreneur',
    age: 22,
    description: 'The second "T" was dropped in North American versions after 1963 and added back in 2016',
    image: '',
    color: 'red'

  }, {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Entrepreneur',
    age: 22,
    description: '',
    image: '',
    color: ''

  }, {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Entrepreneur',
    age: 22,
    description: '',
    image: '',
    color: ''

  }, {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Entrepreneur',
    age: 22,
    description: '',
    image: '',
    color: ''

  }, {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Entrepreneur',
    age: 22,
    description: '',
    image: '',
    color: ''

  }, {
    firstName: 'Miss',
    lastName: 'Scarlett',
    occupation: 'Entrepreneur',
    age: 22,
    description: '',
    image: '',
    color: ''

  },
];

// Rooms Array
//	 †	   		Ballroom		   	‡ 	
// Kitchen	Conservatory
// Dining Room		Cellar
//   (with
// envelope) Billiard Room
// Library
// Hall
// Lounge	Study
// ‡	†
// should have 15 rooms
// should have a string in property "name"
const roomsArray = [
  {
    name:'Ballrom',
    
  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  }, {
    name: 'Ballrom',

  },
];

// Weapons Array
// Candlestick
// (Knife in some North American editions)
// (called lead piping in earlier UK editions; the early tokens were made out of actual lead and therefore posed a risk of lead )
// (first depicted in the UK as a Dreyse M1907 semi - automatic pistol, [14] and in North America as a .)
// 
// Wrench(depicted as a monkey wrench in North American editions; and an open - ended spanner in some traditional UK versions)
// should have a string in property "name"
// should have a string in property "name"
// should have a number in property "weight"
const weaponsArray = [
  {
    name: 'Candlestick',
weight:69,
  }, {
    name: 'Dagger',
weight:69,
  }, {
    name: 'Lead Pipe',
weight:69,
  }, {
    name: 'Knife',
weight:69,
  }, {
    name: 'Poisoning',
weight:69,
  }, {
    name: 'Rope',
weight:69,
  }, {
    name: 'Revolver',
weight:69,
  }, {
    name: 'Wrench',
weight:69,
  }, {
    name: 'Colt M1911 pistol',
    weight: 69,
  },
];


// ITERATION 2

function selectRandom() { }

function pickMystery() { }


// ITERATION 3

function revealMystery() { }



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
