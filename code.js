var suspects = {
    Green : {
      name: 'Jacob',
      lastName: 'Green',
      occupation: undefined,
      age: undefined,
      description: undefined
    },
    White : {
      name: 'Doctor',
      lastName : 'Orchid',
      age : undefined,
      occupation : 'biologist',
      description : 'privately educated in Switzerland'
    },
    Purple : {
      name : 'Victor',
      lastName : 'Plum',
      age : undefined,
      occupation : 'video game designer',
      description : 'famous billionaire'
    },
    Red : {
      name : 'Kasandra',
      lastName : 'Scarlet',
      age : undefined,
      occupation : 'actress',
      description : 'hunted by her past',
    },
    Blue : {
      name : 'Eleanor',
      lastName : 'Peacock',
      age : undefined,
      occupation : undefined,
      description : 'from a wealthy family'
    },
    Yellow : {
      name : 'Jack',
      lastName : 'Mustard',
      age : undefined,
      occupation : 'former footbal player',
      description : 'tries to get by with his former glory'
    }
  };

var rooms = ['dining room', 'conservatory', 'kitcher', 'study', 'library', 'billiard room',
  'lounge', 'ballroom', 'hall','spa','living room','observatory', 'theater', 'guest house',
   'patio'];

var weapons = ['rope', 'knife', 'candlestick', 'dumbbell', 'poison', 'axe', 'bat',
  'trophy', 'pistol'];


function shuffle (stack) {
  if (stack === suspects){
    var list = Object.keys(stack);
    var number1 = (Math.floor (Math.random() * list.length));
    return list[number1];
  }
  else {
    var number2 = (Math.floor (Math.random() * stack.length));
    return stack[number2];
  }
}
