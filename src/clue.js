// ITERATION 1

// Suspects Array
// Miss Scarlett(the second "T" was dropped in North American versions after 1963 and added back in 2016).She is represented by a red token.
// Rev Green("Mr. Green" in North America).He is represented by a green token.
// Colonel Mustard.He is represented by a yellow token.
// Professor Plum.He is represented by a purple token.
//   Mrs.Peacock.She is represented by a blue token.
//     Mrs.White.She is represented by a white token.
const suspectsArray = [{
  firstName: 'Miss',
  lastName: 'Scarlett',
  occupation: 'Entrepreneur',
  age: '',
  description: '',
  image: '',
  color:

}];

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
const roomsArray = [];

// Weapons Array
// Candlestick
// Dagger(Knife in some North American editions)
// Lead Pipe(called lead piping in earlier UK editions; the early tokens were made out of actual lead and therefore posed a risk of lead poisoning)
// Revolver(first depicted in the UK as a Dreyse M1907 semi - automatic pistol, [14] and in North America as a Colt M1911 pistol.)
// Rope
// Wrench(depicted as a monkey wrench in North American editions; and an open - ended spanner in some traditional UK versions)

const weaponsArray = [];


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
