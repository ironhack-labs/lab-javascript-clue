var charactersArray = [
mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur'
  },
docOrchid = {
    first_name: 'Doctor',
    last_name: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation: 'Scientist'
  },
profPlum = {
    first_name: 'Victor',
    last_name: 'Plum',
    color: 'purple',
    description: 'Billionare video game designer',
    age: 22,
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Designer'
  },
missScarlet = {
    first_name: 'Kasandra',
    last_name: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor'
  },
mrsPeacock = {
    first_name: 'Eleanor',
    last_name: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité'
  },
mrMustard = {
    first_name: 'Jack',
    last_name: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player'
  }
];
let weaponsArray = [
{name: 'rope',
    weight: 10
  },
{ name: 'knife',
    weight: 8
  },
{ name: 'candlestick',
    weight: 2
  },
{ name: 'dumbbell',
    weight: 3
  },
{ name: 'poison',
    weight: 2
  },
{ name: 'axe',
    weight: 1
  },
{ name: 'bat',
    weight: 1
  },
{ name: 'trophy',
    weight: 2
  },
{ name: 'pistol',
    weight: 2
  }
];
let roomsArray = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];


function randomSelector(arr) {
  let randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum]
};

let misteryEnvelope = []
function pickMistery() {
  let who = randomSelector(charactersArray);
  let where = randomSelector(roomsArray);
  let how = randomSelector(weaponsArray);
  misteryEnvelope.push(who, how, where,);
   return misteryEnvelope;
};

pickMistery()
function revealMistery(arr){
  console.log(arr[0].first_name, arr[0].last_name + " killed Mr. Boddy using the " + arr[1].name + ' in the '+ arr[2])
};
revealMistery(misteryEnvelope);
