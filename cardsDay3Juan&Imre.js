var characters = [
  {firstName : 'Jacob',
  lastName : 'Green',
  color: 'green',
  occupation: '',
  age: 40,
  description: 'cooperative'
  },
  
  {firstName : 'Doctor',
  lastName : 'Orchid',
  color: 'white',
  occupation: 'biologist',
  age: 27,
  description: 'homicidal'
  },
  
  {firstName : 'Victor',
  lastName : 'Plum',
  color: 'purple',
  occupation: 'video game designer',
  age: '',
  description: 'popular'
  },
  
  {firstName : 'Kasandra',
  lastName : 'Scarlet',
  color: 'red',
  occupation: 'A-list movie star',
  age: 26,
  description: ''
  },
  
  {firstName : 'Eleanor',
  lastName : 'Peacock',
  color: 'blue',
  occupation: '',
  age: '',
  description: ''
  },
  
  {firstName : 'Jack',
  lastName : 'Mustard',
  color: 'yellow',
  occupation: 'former football player',
  age: 56,
  description: ''
  }
  ]
  
var weapons=[{weapon:'rope',color: 'brown',weight: 4,hurts: 4},{weapon:'knife',color: 'silver',weight: 2,hurts: 8},{weapon:'candleStick',color: 'white',weight: 3,hurts: 2},{weapon:'dumbbell',color: 'black',weight: 10,hurts: 9},{weapon:'poison',color: 'red',weight: 1,hurts: 10},{weapon:'axe',color: 'silver',weight: 8,hurts: 9},{weapon:'bat',color: 'brown',weight: 6,hurts: 6},{weapon:'trophy',color: 'gold',weight: 10,hurts: 1},{weapon:'pistol',color: 'black',weight: 3,hurts: 10}]

var rooms = [ "Dining room", "Conservatory", "Kitchen", "Study", "Billiard room", "Lounge", "Ballroom", "Hall", "spa", "Living room", "Observatory", "Theater", "Guest house", "patio"]

 function randomElement(array) {
 return array[Math.floor(Math.random()*array.length)];
}

var randomCard = randomElement;
randomElement(characters);


function getThreeCards(stack1, stack2, stack3) {
  return [randomElement(stack1), randomElement(stack2), randomElement(stack3)]
}

var envelope = getThreeCards(characters, weapons, rooms);

console.log(envelope);

/*function chooseRandomCards() {
  var confidentialEnvelope = [];
  var randomCharacter = randomCard(characters);
  confidentialEnvelope.push(randomCharacter);
  var randomRoom = randomCard(rooms);
  confidentialEnvelope.push(rooms);
  var randomWeapon = randomCard(weapons);
  return confidentialEnvelope;
  
}

chooseRandomCards();*/