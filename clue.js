var characters =[
{
  color: 'green',
  firstName: 'Jacob',
  lastName: 'Green',
  title: 'Mr.',
  sex: 'male',
  description: 'He has a lot of connections and is always willing to help people out -- for a price.'
},
{
  color: 'white',
  firstName: 'Doctor',
  lastName: 'Orchid',
  title: 'Dr.',
  sex: 'female',
  description: 'She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning.'
},
{
  color: 'purple',
  firstName: 'Victor',
  lastName: 'Plum',
  title: 'Mr.',
  sex: 'male',
  description: 'He is a billionaire video game designer who is embracing his new popularity.'
},
{
  color: 'red',
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  title: 'Ms.',
  sex: 'female',
  description: 'She is an A-list movie star whose past haunts her.'
},
{
  color: 'blue',
  firstName: 'Eleanor',
  lastName: 'Peakock',
  title: 'Ms.',
  sex: 'female',
  description: 'She is from a wealthy family and uses her status and money to earn popularity.'
},
{
  color: 'yellow',
  firstName: 'Jack',
  lastName: 'Mustard',
  title: 'Mr.',
  sex: 'male',
  description: 'He is a former football player who tries to get by on his former glory.'
}];

//console.log(characters);


//Weapons
var weapons = [
{
  name: 'rope',
  weight: 'light',
  material: 'fiber'
},
{
  name: 'knife',
  weight: 'light',
  material: 'metal'
},
{
  name: 'candle stick',
  weight: 'light',
  material: 'metal'
},
{
  name: 'dumbbell',
  weight: 'heavy',
  material: 'metal'
},
{
  name: 'poison',
  weight: 'light',
  material: 'liquid'
},
{
  name: 'axe',
  weight: 'heavy',
  material: 'metal'
},
{
  name: 'bat',
  weight: 'heavy',
  material: 'wood'
},
{
  name: 'trophy',
  weight: 'heavy',
  material: 'metal'
},
{
  name: 'pistol',
  weight: 'light',
  material: 'metal'
}
];

//console.log(weapons);

//Rooms
var rooms = [
{
  name: 'dining room',
  location: 'inside'
},
{
  name: 'conservatory',
  location: 'inside'
},
{
  name: 'kitchen',
  location: 'inside'
},
{
  name: 'study',
  location: 'inside'
},
{
  name: 'library',
  location: 'inside'
},
{
  name: 'billiard room',
  location: 'inside'
},
{
  name: 'lounge',
  location: 'inside'
},
{
  name: 'ballroom',
  location: 'inside'
},
{
  name: 'hall',
  location: 'inside'
},
{
  name: 'spa',
  location: 'outside'
},
{
  name: 'living room',
  location: 'inside'
},
{
  name: 'observatory',
  location: 'outside'
},
{
  name: 'theater',
  location: 'inside'
},
{
  name: 'guest house',
  location: 'outside'
},
{
  name: 'patio',
  location: 'outside'
}
];
//console.log(rooms);

function selectRandomCard(numberOfCards) {
  return function (deckOfCards) {
    return deckOfCards[Math.floor((Math.random() * numberOfCards) + 1)-1];
  };
};

//--Alterate ways of selecting the random card--
//var selectPerson = selectRandomCard(6);
//var selectWeapon = selectRandomCard(9);
//var selectRoom = selectRandomCard(15);

//function selectPerson (deck) {
//  selectRandomCard(deck)
//}

function createMystery()
{
  var envelope = {
    name: 'Case File Confidential',
    character: selectRandomCard(6)(characters),
    room: selectRandomCard(15)(rooms),
    weapon: selectRandomCard(9)(weapons)
  }
  return envelope;
};

function revealMystery() {
  var envelope = createMystery();
  console.log("It was " + envelope.character.title + " " + envelope.character.lastName + " in the " + envelope.room.name + " with the " + envelope.weapon.name);
};

revealMystery();
