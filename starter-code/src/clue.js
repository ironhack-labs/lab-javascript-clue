

var mrGreen = { first_name: "Jacob", last_name: "Green", color: "green",
description: "He has a lot of connections", age: 45, image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
occupation: "Entrepreneur"};

var drOrchid = {frst_name:"Doctor",lst_name: "Orchid",color:"white",
description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age: 26, image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation: "Scientist"};


var profPlum = {first_name: "Victor",last_name: "Plum",color:"purple",
description: "Billionare video game designer",age:22,
image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation: "Designer"};


var missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"};

var mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité"};

var mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player"};

// Weapons


var rope = {weight: 10};
var knife = {weight: 8};
var candlestick  = {weight: 2};
var dumbbell = {weight: 30};
var poison = {weight: 2};
var axe = {weight: 15};
var bat = {weight: 13};
var trophy = {weight: 25};
var pistol = {weight: 20};

// Rooms
var  DinningRoom = {};
var  Conservatory = {};
var  Kitchen = {};
var  Study = {};
var  Library = {};
var  BilliardRoom = {};
var  Lounge = {};
var  Ballroom = {};
var  Hall = {};
var  Spa = {};
var  LivingRoom = {};
var  Observatory = {};
var  Theater = {};
var  GuestHouse = {};
var  Patio = {};


// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);

// Rooms' Collection
var roomsArray = [];

roomsArray.push(DinningRoom);
roomsArray.push(Conservatory);
roomsArray.push(Kitchen);
roomsArray.push(Study);
roomsArray.push(Library);
roomsArray.push(BilliardRoom);
roomsArray.push(Lounge);
roomsArray.push(Ballroom);
roomsArray.push(Hall);
roomsArray.push(Spa);
roomsArray.push(LivingRoom);
roomsArray.push(Observatory);
roomsArray.push(Theater);
roomsArray.push(GuestHouse);
roomsArray.push(Patio);




// Weapons Collection
var weaponsArray = [];

weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);


// Characters
/*Create a method randomSelector to randomly select one element 
from a card stack. The method should receive 
an array as an argument, and return randomly o
ne of the elements of the array.*/

function randomSelector(array) {

	if (array.lenght === 0){
		return false;
	}

	let rand = array[Math.floor(Math.random()*array.length)];


	return rand;


}

/*We need to create a pickMistery method that 
will call randomSelector for each card stack, 
and return an array with the 3 picked cards, a 
character, a weapon and a room. Our mystery 
should be stored on a misteryEnvelope variable.*/


function pickMistery(){

    var misteryEnvelope = [];

	let character = randomSelector(charactersArray);
	let weapon = randomSelector(weaponsArray);
	let room = randomSelector(roomsArray);


	misteryEnvelope.push(character);
	misteryEnvelope.push(weapon);
	misteryEnvelope.push(room);

	return misteryEnvelope;
}

/*Finally, we need to reveal the mystery. 
Create a revealMistery method, that will receive 
our misteryEnvelope array as an argument and 
return the revealed mystery like this: 
<FIRST NAME> <LAST NAME> killed Mr.Boddy using the 
<WEAPON> in the <PLACE>!!!!*/

function revealMistery(misteryEnvelope){


var hello = "";

var hello = (misteryEnvelope[0].first_name + " " + 
	misteryEnvelope[0].last_name +
	 " killed Mr.Boddy using the " + 
	 misteryEnvelope[1].name + " in the " + 
	 misteryEnvelope[2].name +"!!!!");


return hello;
}













