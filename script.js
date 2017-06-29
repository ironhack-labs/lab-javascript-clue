var people={
    jacobG: {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  occupation: "",
  age: 29},
    doctorO: {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  occupation: "toxicology",
  age: 45},
    victorP: {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  occupation: "video game designer",
  age: 33},
    kasandraS: {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  occupation: "movie star",
  age: 26},
    eleanorP: {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  occupation: "socialite",
  age: 22},
    jackM: {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  occupation: "athlete",
  age: 40},

};

var weapons = {
  rope: {
    name: "rope",
    damage: 3
  },
    pistol: {
    name: "pistol",
    damage: 20
  },
    trophy: {
    name: "trophy",
    damage: 6
  },
    bat: {
    name: "bat",
    damage: 9
  },
    axe: {
    name: "axe",
    damage: 15
  },
    poison: {
    name: "poison",
    damage: 30
  },
    dumbbell: {
    name: "dumbbell",
    damage: 12
  },
    candlestick: {
    name: "candlestick",
    damage: 1
  },
    knife: {
    name: "knife",
    damage: 13
  },
};

var rooms = ["dining room", "conservatory", "kitchen", "study", "library", "billiard room", "lounge", "ballroom", "hall", "spa", "living room", "observatory", "theater", "guest house", "patio"]
;


for(const key of Object.keys(people)){
    var name = people[key].firstName  + " " + people[key].lastName;
    people[key].name = name;

}


var pickedArray = function shuffle(deck){
  var random = Math.floor(Math.random() * deck.length);
  var selected = deck[random];
  return selected;
};

var pickedObject = function randomProperty (obj){
  var keys = Object.keys(obj);
  return obj[keys[keys.length * Math.random() <<0]].name;
}

var virtualEvelope = [pickedObject(weapons), pickedObject(people), pickedArray(rooms)]
function reveal (){
  return virtualEvelope;
};

reveal();
