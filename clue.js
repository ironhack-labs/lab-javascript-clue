var gameClue = {

  rooms: ['dining room', 'conservatory', 'kitchen', 'study', 'library', 'billiard room', 'lounge',
           'ball room', 'hall', 'spa', 'living room', 'observatory', 'theater', 'guest house', 'patio'],
 characters: [
   {firstName: 'Jacob', lastName: 'Green', color: 'green'},
   {firstName: 'Doctor', lastName: 'Orchid', color: 'white'},
   {firstName: 'Victor', lastName: 'Plum', color: 'purple'},
   {firstName: 'Kassandra', lastName: 'Scarlet', color: 'red'},
   {firstName: 'Eleanor', lastName: 'Peacock', color: 'blue'},
   {firstName: 'Jack', lastName: 'Mustard', color: 'yellow'}
 ],
 weapons: [
   {type: 'rope', weight: 'light', hurts: 7},
   {type: 'knife', weight: 'light', hurts: 10},
   {type: 'candle stick', weight: 'medium', hurts: 4},
   {type: 'dumbell', weight: 'heavy', hurts: 4},
   {type: 'poison', weight: 'light', hurts: 8},
   {type: 'axe', weight: 'heavy', hurts: 10},
   {type: 'bat', weight: 'medium', hurts: 5},
   {type: 'trophy', weight: 'light', hurts: 7},
   {type: 'pistol', weight: 'light', hurts: 10},
 ]
};

function getRandomElement () {
  var randomCharacter = Math.floor((Math.random() * gameClue.characters.length) + 0);
  var randomRoom = Math.floor((Math.random() * gameClue.rooms.length) + 0);
  var randomWeapon = Math.floor((Math.random() * gameClue.weapons.length) + 0);
  var result = "character: " + gameClue.characters[randomCharacter].lastName + " " + gameClue.characters[randomCharacter].firstName + "\nroom: " + gameClue.rooms[randomRoom] + "\nweapon: " + gameClue.weapons[randomWeapon].type;
return result;
}

var virtualEnvelope = getRandomElement();

function revealDaMystery () {
console.log(virtualEnvelope);
}

revealDaMystery();
