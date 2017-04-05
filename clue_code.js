var card_stacks = { 

	characters: [
		{ 0: {name: "Jacob", lastName:"Green" , occupation:"Gardener" , age:45 , description:"Helpful" } },
		{ 1: {name:"Doctor", lastName:"Orchid" , occupation:"Biologist" , age:28 , description:"Smart" } },
		{ 2: {name:"Victor", lastName:"Plume" , occupation:"Designer" , age:40 , description:"Billionaire" } },
		{ 3: {name: "Kasandra", lastName:"Scarlet" , occupation:"Actress" , age:35 , description:"Scared" } },
		{ 4: {name: "Eleanor", lastName:"Peacock" , occupation:"Retired" , age:65 , description:"Opportunist" } },
		{ 5: {name: "Jack", lastName:"Mustard" , occupation:"SportsMan" , age:32 , description:"Sporty" } }
	],

	weapons: [
		{ 0: {name:"Rope", weight:"1kg", color:"brown", damage:30 } },
		{ 1: {name:"Knife", weight:"0.5kg", color:"grey" , damage:60 } },
		{ 2: {name:"Candlestick", weight:"2kg", color:"gold" , damage:40 } },
		{ 3: {name:"Dumbbell", weight:"3kg", color:"metalic" , damage:45 } },
		{ 4: {name:"Poison", weight:"0.1kg", color:"red" , damage:75 } },
		{ 5: {name:"Axe", weight:"5kg", color:"black" , damage:80 } },
		{ 6: {name:"Bat", weight:"2.5kg", color:"brown" , damage:50 } },
		{ 7: {name:"Trophy", weight:"1.3kg", color:"silver" , damage:25 } },
		{ 8: {name:"Pistol", weight:"1kg", color:"blue" , damage:90 } }
	],

	rooms: ["Dining room", "Conservatory", "Kitchen", "Study", "Library", 
	"Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room",
	"Observatory", "Theater", "Guest house", "A patio"],
		
}


function randRooms(){
  var randArray = Math.floor(Math.random() * (card_stacks.rooms.length - 0) + 0);
  return card_stacks.rooms[randArray];
}

function randChar(){
  var randArray = Math.floor(Math.random() * (card_stacks.characters.length - 0) + 0);
  return card_stacks.characters[randArray];
}

function randWeap(){
  var randArray = Math.floor(Math.random() * (card_stacks.weapons.length - 0) + 0);
  return card_stacks.weapons[randArray];
}

function reveal(){
  var NameKey = Object.keys(randChar()),
      weaponskey = Object.keys(randWeap());
      
return "the killer is in the "+ randRooms() + " his name is " + card_stacks.characters[NameKey[0]][NameKey].name + " he killed with the weapon " +  card_stacks.weapons[weaponskey[0]][weaponskey].name;

}

reveal();