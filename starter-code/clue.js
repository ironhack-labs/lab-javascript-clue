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

//function random_selector(array) {

//}

//function pick_mistery() {

//}

//function reveal_mistery(mistery) {

//}

//var mistery_envelope = pick_mistery();
//reveal_mistery(mistery_envelope);

var myHouse = [

  suspects = [{firstName: "Jacob", lastName: "Green", color:"Green", description: 'He has a lot of connections', age: 45, occupation: 'Entrepreneur',},

  {firstName: 'Doctor', lastName: 'Orchid', color: "White", description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy', age: 26, occupation: "Scientist",},

  {firstName: 'Victor', lastName: 'Plum', color: "purple", description: "Billionaire video game designer", age: 22, occupation: 'designer',},

  {firstName: "Kasandra", lastName: 'Scarlet', color: 'Red', description: 'She is an A-list movie star with a dark past', age: 31, occupation: 'Actor',},

  {firstName: "Eleanor", lastName: 'Peacock', color: 'Blue', description: 'She is from a wealthy family and uses her status and money to earn popularity', age: 36, occupation: 'Socialité',},

  {firstName: 'Jack', lastName: 'Mustard', color: 'yellow', description: 'He is a former football player who tries to get by on his former glory', age: 63, occupation: 'Retired footballer',}
  ],

   weapons = [
  {type: 'Rope', Weight: 10},
  {type: 'Knife', Weight: 8},
  {type: 'Candlestick', Weight: 2},
  {type: 'Dumbbell', Weight: 30},
  {type: 'Poison', Weight: 2},
  {type: 'Axe', Weight: 15},
  {type: 'Bat', Weight: 13},
  {type: 'Trophy', Weight: 25},
  {type: 'Pistol', Weight: 20},
 ],

  rooms = [
   {place: 'Dinning Room'},
   {place: 'Conservatory'},
   {place: 'Kitchen'},
   {place: 'Study'},
   {place: 'Library'},
   {place: 'Billiard Room'},
   {place: 'Lounge'},
   {place: 'Ballroom'},
   {place: 'Hall'},
   {place: 'Spa'},
   {place: 'Living Room'},
   {place: 'Observatory'},
   {place: 'Theater'},
   {place: 'Guest House'},
   {place: 'Patio'},
   ],
   ];

   var envelope = [];
 function random_selector(array) {
 var random = array[Math.floor(Math.random() * array.length)];
 return random;
 }
 function pickMystery(){
 for (var i = 0; i < myHouse.length; i++) {
   var newArray = stackSel(myHouse[i]);
   envelope.push(newArray);
 }
 }
 function stackSel(array){
   var random = array[Math.floor(Math.random() * array.length)];
 return random;
 }

 function reveal_mistery(mistery) {
   pickMystery();
   return envelope;
 }
 reveal_mistery();
