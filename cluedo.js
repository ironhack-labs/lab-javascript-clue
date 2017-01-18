var suspectCards =  [
 {firstName:"Jacob", lastName:"Green",age:"61", occupation:"Mayor", color:"Green", attribute1:"Has connections.", attribute2: "Is willing to help for a price." },

 {firstName:"Doctor", lastName:"Orchid",age:"50", occupation:"Doctor", color:"White", attribute1:"Is the adopted daughter of Mr.Bobby(biologist with PhD in plant toxicology).", attribute2: "Was expelled from private school in Switzerland due to near fatal poisoning incidident with daffodils." },

 {firstName:"Victor", lastName:"Plum",age:"25", occupation:"Video game designer", color:"Purple", attribute1:"Billionaire", attribute2: "Enjoying new popularity." },

 {firstName:"Kasandra", lastName:"Scarlet",age:"45", occupation:"Movie star", color:"Red", attribute1:"A-list movie star.", attribute2: "Her past haunts her." },

 {firstName:"Eleanor", lastName:"Peacock",age:"23", occupation:"None", color:"Blue", attribute1:"From wealthy family.", attribute2: "Uses wealth and status to gain popularity" },

 {firstName:"Jack", lastName:"Mustard",age:"42", occupation:"Retired athlete", color:"Yellow", attribute1:"Former football player.", attribute2: "Tries to get by on former glory." }
 ]


var weaponCards =  [
 {weapon:"Rope"},
 {weapon:"Knife", type:"Kithen"},
 {weapon:"Candlestick", material:"Metal", weight:"4kg"},
 {weapon:"Dumbbell"},
 {weapon:"Poison"},
 {weapon:"Axe", weight:"3kg"},
 {weapon:"Bat", material:"Metal"},
 {weapon:"Trophy", material:"plastic"},
 {weapon:"Pistol"}
 ]


var roomCards =  [
 {mansionRoom: "Dining room"},
 {mansionRoom: "Conservatory"},
 {mansionRoom: "Kitchen"},
 {mansionRoom: "Study"},
 {mansionRoom: "Library"},
 {mansionRoom: "Ballroom"},
 {mansionRoom: "Hall"},
 {mansionRoom: "Spa"},
 {mansionRoom: "Living room"},
 {mansionRoom: "Observatory"},
 {mansionRoom: "Theater"},
 {mansionRoom: "Guest house"},
 {mansionRoom: "Patio"},
 ]


function randomCardpicker(array) {
var randomCard = Math.random();
randomCard = randomCard * array.length;
randomCard = Math.floor(randomCard);

return array[randomCard]
}
console.log(randomCardpicker(roomCards));

var mystery = [];
var suspect = (randomCardpicker(suspectCards));
mystery.push(suspect);
var weapon = (randomCardpicker(weaponCards));
mystery.push(weapon);
var room = (randomCardpicker(roomCards));
mystery.push(room);

// console.log(mystery);

function mysteryRevealed() {
console.log("The murderer is: " + suspect.firstName + ". The murder weapon used was: " + weapon.weapon + "! Lastly, the room in the mansion where the events struck was the " + room.mansionRoom +"!")
}

mysteryRevealed();
