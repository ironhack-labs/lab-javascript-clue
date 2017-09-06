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
    {name:"Mrgreen", color:"Green"},
    {name:"Mrorchid", color:"white"},
    {name:"MrVictorPlum", color:"Purple"},
    {name:"MissScarlet", color:"Red"},
    {name:"MissPeacock", color:"blue"},
    {name:"Mrmustard", color:"Yellow"},

];

var weapons = [
    {name:"Rope"},
    {name:"Knife"},
    {name:"Candlestick"},
    {name:"Dumbbell"},
    {name:"Poison"},
    {name:"Axe"},
    {name:"Bat"},
    {name:"Trophy"},
    {name:"Pistol"},

];

var rooms = [
    {name:"Dining room"},
    {name:"Conservatory"},
    {name:"Kitchen"},
    {name:"Study"},
    {name:"Library"},
    {name:"Billiard room"},
    {name:"Lounge"},
    {name:"Ballroom"},
    {name:"Lounge"},
    {name:"Hall"},
    {name:"A spa"},
    {name:"Living"},
    {name:"Observatory"},
    {name:"Theater"},
    {name:"Guest house"},
    {name:"A patio"},



];

function random_selector(array) {
var randomIndex = parseInt(Math.random()*array.length);
  return array[randomIndex];
}


function pick_mistery() {
var mystery = {
  murderer: random_selector(characters),
  crime: random_selector(weapons),
  place:random_selector(rooms),
}
return mystery;
}
console.log(pick_mistery());

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
