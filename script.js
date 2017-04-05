var characters = [
  {
  first_name: "Jacob",
  last_name: "Green",
  occupation: "hitman",
  color: "green",
  age: 40,
  descriptions: "He has a lot of connections and is always willing to help people out -- for a price."
},{
  first_name: "Jayden",
  last_name: "Orchild",
  occupation: "doctor",
  color: "white",
  age: 32,
  descriptions: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"
},{
  first_name: "Victor",
  last_name: "Plum",
  occupation: "video game designer",
  color: "purple",
  age: 35,
  descriptions: "He is a billionaire video game designer who is embracing his new popularity."
},{
  first_name: "Kasandra",
  last_name: "Scarlet",
  occupation: "actress",
  color: "red",
  age: 38,
  descriptions: "She is an A-list movie star whose past haunts her."
},{
  first_name: "Eleanor",
  last_name: "Peacock",
  occupation: "unoccupied",
  color: "blue",
  age: 27,
  descriptions: "She is from a wealthy family and uses her status and money to earn popularity."
},{
  first_name: "Jack",
  last_name: "Mustard",
  occupation: "football player",
  color: "yellow",
  age: 42,
  descriptions: "He is a former football player who tries to get by on his former glory."
}];

var weapons = [{
  name: "Rope",
  weight: "Light",
  color: "brown",
  damage: "average"
},{
  name: "Knife",
  weight: "Light",
  color: "gray",
  damage: "high"
},{
  name: "Candlestick",
  weight: "Light",
  color: "yellow",
  damage: "low"
},{
  name: "Dumbbell",
  weight: "Heavy",
  color: "black",
  damage: "average"
},{
  name: "Poison",
  weight: "Light",
  color: "green",
  damage: "high"
},{
  name: "Axe",
  weight: "Medium",
  color: "grey",
  damage: "high"
},{
  name: "Bat",
  weight: "Medium",
  color: "brown",
  damage: "average"
},{
  name: "Trophy",
  weight: "Heavy",
  color: "gold",
  damage: "low"
},{
  name: "Pistol",
  weight: "Medium",
  color: "silver",
  damage: "high"
}];

var houseRooms = [
{ name: "Dining room" },
{ name: "Conservatory" },
{ name: "Kitchen" },
{ name: "Study" },
{ name: "Library" },
{ name: "Billiard room" },
{ name: "Lounge" },
{ name: "Ballroom" },
{ name: "Hall" },
{ name: "A spa" },
{ name: "Living room" },
{ name: "Observatory" },
{ name: "Theater" },
{ name: "Guest house" },
{ name: "A patio" }];

var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

var mistery = function(array){
  var random = randomNumber(0, array.length);

  return array[random];
};

var newGame = [];
newGame.push(mistery(characters));
newGame.push(mistery(weapons));
newGame.push(mistery(houseRooms));

console.log(newGame);
