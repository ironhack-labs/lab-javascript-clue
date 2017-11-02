var characters = [

{
    firstName: "Jacob",
    lastName:  "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur",
  },

 {
    firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist",
  },

{
    firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer",
  },

 {
    firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor",
  },

 {
    firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité",
  },

 {
    firstName: "Jack",
    lastName: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: 62,
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
  },
];

var weapons = [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbell", weight: 30},
    {name: "poison", weigh: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20},
  ];

var rooms = ['Dinning Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];



function random_selector(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function pick_mistery() {
  cardMistery.character = random_selector(characters);
  cardMistery.weapon = random_selector(weapons);
  cardMistery.room = random_selector(rooms);
  return "Mistery is in the envelope, write reveal_mistery(mistery_envelope) to know all about the murdered";
}

function reveal_mistery(mistery) {
  return "The murder was in " + cardMistery.room + " with a " + cardMistery.weapon.name + " by " + cardMistery.character.firstName + cardMistery.character.lastName;
}

var cardMistery = {};
var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
