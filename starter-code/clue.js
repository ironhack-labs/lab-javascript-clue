//---- Characters ----
var jacobgreen ={
  firstName: "Jacob",
  lastName:  "Green",
  color: "green",
  description: "He has a lot of connections",
  age: "45",
  image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation: 'Entrepreneur'
};

var doctor = {  firstName: 'Doctor',
  lastName: 'Orchid',
  color: 'white',
  description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age: 26,
  image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  occupation: 'Scientist'
};

var victor = {firstName: 'Victor',
  lastName: 'Plum',
  color: 'purple',
  description: 'Billionare video game designer',
  age: '22',
  image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation: 'Designer'};

var kasandra = {
  firstName: 'Kasandra',
  lastName: 'Scarlet',
  color: 'red',
  description: 'She is an A-list movie star with a dark past',
  age: '31',
  image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation: 'Actor'
};

var Eleanor = {
  firstName: 'Eleanor',
  lastName: 'Peacock',
  color: 'blue',
  description: 'She is from a wealthy family and uses her status and money to earn popularity',
  age: '36',
  image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation: 'Socialité'
};

var Jack = {
  firstName: 'Jack',
  lastName: 'Mustard',
  color: 'yellow',
  description: 'He is a former football player who tries to get by on his former glory',
  age: '62',
  image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation: 'Retired Football player'
};

var cards = [jacobgreen,
doctor, victor, kasandra, Eleanor, Jack];

//---- Weapons ----
var weapons = [
  {
    name: 'rope',
    weight: 10,
    damage: 3
  },
    {
      name: 'knife',
      weight: 8,
      damage: 8
    },
      {
        name: 'Candlestick',
        weight: 2,
        damage: 3
      },{
      name: 'knife',
      weight: 8,
      damage: 6
    },
        {
          name: 'Dumbbell',
          weight: 30,
          damage: 5
        },
          {
            name: 'Poison',
            weight: 2,
            damage: 10
          },
          {
            name: 'Axe',
            weight: 15,
            damage: 10
          },
          {
            name: 'Bat',
            weight: 13,
            damage: 6
          },
          {
            name: 'Trophy',
            weight: 25,
            damage: 8
          },
          {
            name: 'Pistol',
            weight: 20,
            damage: 10000000
          }
];


var rooms = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theatre', 'Guest House', 'Patio'];

var mystery = {};
function shuffle(deck) {
  var number = Math.floor(Math.random() * deck.length);
  var random = deck[number];
  return random;
}

var card = shuffle(cards);
var weapon = shuffle(weapons);
var room = shuffle(rooms);

console.log(card.firstName + ', ' + weapon.name + ', ' + room);
