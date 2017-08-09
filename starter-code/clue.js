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

var Suspects = [
  {name:'Victor Plum', color: 'purple', attribute: 'billonaire'},
  {name:'Jacob Green', color: 'green', attribute: 'willing to help for pice'},
  {name:'Doctor Orchid', color: 'white', attribute: 'adopted'},
  {name:'Kasandra Scarlet', color: 'red', attribute: 'haunted past'},
  {name:'Eleanor Peacock', color: 'blue', attribute: 'wealthy family'},
  {name:'Jack Mustard', color: 'yellow', attribute: 'former football player'},
];

var Weapons = [
  {weapon: 'Rope' , Weight: 10},
  {weapon: 'Knife', Weight: 8},
  {weapon: 'Candlestick', Weight: 2},
  {weapon: 'Dumbbell', Weight: 30},
  {weapon: 'Poison', Weight: 2},
  {weapon: 'Axe', Weight: 15},
  {weapon: 'Bat', Weight: 13},
  {weapon: 'Trophy', Weight: 25},
  {weapon: 'Pistol', Weight: 20},
];

var Rooms = ['Dining Room', 'Conservatory', 'Kitchen', 'Study', 'Library',
'Billard Room', 'Lounge', 'Ballroom', 'Hall', 'A Spa', 'Living Room', 'Observatory',
'Theater', 'Guest House', 'A Patio'];




function random_selector(array) {
  return array[Math.floor(Math.random()*array.length)];
}




function pick_mistery() {
  var murderer = random_selector(Suspects);
  var weapon = random_selector(Weapons);
  var location = random_selector(Rooms);

  // random_selectors in here

var mystery = {
        name: murderer,
        Weapons: weapon,
        Rooms: location
    };

    // return a new object with the results of the random_selectors
    console.log(mystery);
    return mystery;

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
