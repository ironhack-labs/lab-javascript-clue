/*

---- Characters ----

  Mr Green
  first name: Jacob
  last name:  Green
  color: green
  description: He has a lot of connections
  age: 45
  image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
  occupation: Entrepreneur

  Dr Orchid
  first name: Doctor
  last name: Orchid
  color: white
  description: PhD in plant toxicology. Adopted daughter of Mr. Boddy
  age: 26
  image: http://www.radiotimes.com/uploads/images/Original/111967.jpg
  occupation: Scientist

  Prof Plum
  first name: Victor
  last name: Plum
  color: purple
  description: Billionare video game designer
  age: 22
  image: https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
  occupation: Designer

  Miss Scarlet
  first name: Kasandra
  last name: Scarlet
  color: red
  description: She is an A-list movie star with a dark past,
  age: 31,
  image: https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
  occupation: Actor

 Mrs Peacock
  first name: Eleanor
  last name: Peacock
  color: blue
  description: She is from a wealthy family and uses her status and money to earn popularity
  age: 36
  image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
  occupation: Socialité

 Mr Mustard
  first name: Jack
  last name: Mustard
  color: yellow
  description: He is a former football player who tries to get by on his former glory
  age: 62
  image: https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
  occupation: Retired Football player

---- Weapons ----

Rope - Weight: 10
Knife - Weight: 8
Candlestick - Weight: 2
Dumbbell - Weight: 30
Poison - Weight: 2
Axe - Weight: 15
Bat - Weight: 13
Trophy - Weight: 25
Pistol - Weight: 20


---- Rooms ----
Dinning Room
Conservatory
Kitchen
Study
Library
Billiard Room
Lounge
Ballroom
Hall
Spa
Living Room
Observatory
Theater
Guest House
Patio

*/

var characters = [
  {firstName: 'Jacob', lastName: 'Green', color: 'green', description: 'He has a lot of connections.', age: 45, image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg', occupation: 'Entrepreneur' },
  {firstName: 'Doctor', lastName: 'Orchid', color: 'white', description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy.', age: 26, image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg', occupation: 'Scientist'},
  {firstName: 'Victor', lastName: 'Plum', color: 'purple', description: 'Billionare video game designer.', age: 22, image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg', occupation: 'Designer'},
  {firstName: 'Kasandra', lastName: 'Scarlet', color: 'red', description: 'She is an A-list movie star with a dark past.', age: 31, image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg', occupation: 'Actor'},
  {firstName: 'Eleanor', lastName: 'Peacock', color: 'blue', description: 'She is from a wealthy family and uses her status and money to earn popularity.', age: 36, image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg', occupation: 'Socialité'},
  {firstName: 'Jack', lastName: 'Mustard', color: 'yellow', description: 'He is a former football player who tries to get by on his former glory.', age: 62, image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg', occupation: 'Retired Football Player'}
];

  var weapons = [
    {type: 'Rope', weight: 10},
    {type: 'Knife', weight: 8},
    {type: 'Candlestick', weight: 2},
    {type: 'Dumbbell', weight: 30},
    {type: 'Poison', weight: 2},
    {type: 'Axe', weight: 15},
    {type: 'Bat', weight: 13},
    {type: 'Trophy', weight: 25},
    {type: 'Pistol', weight: 20}
];

var rooms = [
  {roomName: 'Dinning Room'},
  {roomName: 'Conservatory'},
  {roomName: 'Kitchen'},
  {roomName: 'Study'},
  {roomName: 'Library'},
  {roomName: 'Billiard Room'},
  {roomName: 'Lounge'},
  {roomName: 'Ballroom'},
  {roomName: 'Hall'},
  {roomName: 'Spa'},
  {roomName: 'Living Room'},
  {roomName: 'Observatory'},
  {roomName: 'Theater'},
  {roomName: 'Guest House'},
  {roomName: 'Patio'}
];


function random_selector(array) {
  for (var i = 0; i < 1; i++) {
      var random = Math.floor(Math.random() * characters.length);
      console.log(characters[random]);

    for ( i = 0; i < 1; i++) {
      random = Math.floor(Math.random() * weapons.length);
      console.log(weapons[random]);
  }

  for ( i = 0; i < 1; i++) {
      random = Math.floor(Math.random() * rooms.length);
      console.log(rooms[random]);
  }
  }
}

function pick_mistery() {

}

function reveal_mystery(mystery) {

}

var mystery_envelope = pick_mystery();
reveal_mystery(mystery_envelope);
