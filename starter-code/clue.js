var mrGreen = {
  firstname: "Jacob", lastname: "Green", gender: "male", color: "green", occupation: "politician", age: "40", description: "slimey"};

var doctorOrchid = {
  firstname: "Doc", lastname: "Orchid", gender: "female", color: "white", occupation: "biologist", age: "45", description: "curious"};

var victorPlum = {
  firstname: "Victor", lastname: "Plum", gender: "male", color: "purple", occupation: "VideoGameDesigner", age: "25", description: "rich bastard"};

var kasandra = {
  firstname: "kasandra", lastname: "Scarlet", gender: "female", color: "red", occupation: "movieStar", age: "21", description: "hot and naive"};

var eleanor = {
  firstname: "Eleanor", lastname: "Peacock", gender: "female", color: "blue", occupation: "unemployed", age: "60", description: "lazy and bored and overprivileged"};

var jack = {
  firstname: "Jack", lastname: "Mustard", gender: "male", color: "yellow", occupation: "footballplayer", age: "35", description: "washed out and depressed"};


var rope = {
  name: "rope", weight: "200g", color: "brown", painrating: "5"};

var knife = {
  name: "rope", weight: "250g", color: "black", painrating: "7"};

var candlestick = {
  name: "rope", weight: "1000g", color: "gold", painrating: "6"};

var dumbbell = {
  name: "rope", weight: "5000g", color: "black", painrating: "8"};

var poison = {
  name: "rope", weight: "1g", color: "transparent", painrating: "4"};

var axe = {
  name: "rope", weight: "3000g", color: "silver", painrating: "10"};

var pistol = {
  name: "rope", weight: "400g", color: "silver", painrating: "1"};

var bat = {
  name: "rope", weight: "1000g", color: "brown", painrating: "7"};

var trophy = {
  name: "rope", weight: "200g", color: "gold", painrating: "6"};


var Room = ["diningRoom", "conservatory", "kitchen", "study", "library", "billardRoom", "lounge", "ballroom", "hall", "spa", "livingRoom", "observatory", "theater", "guestHouse", "patio"];

var characters = [mrGreen, doctorOrchid, victorPlum, kasandra, eleanor, jack];
var weapon = [rope, knife, candlestick, dumbbell, poison, axe, pistol, bat, trophy];

function randomElement(array){
  var randomNumber = Math.floor(Math.random()*array.length);
  return array[randomNumber];
}

randomElement(Room);

var masterArray = [Room, characters, weapon];

var CaseFileConfidential = [];

function masterSelector(){
  for (i=0; i < masterArray.length; i++){
    CaseFileConfidential.push(randomElement(masterArray[i]));
  }
  return CaseFileConfidential;
}

masterSelector();

var revealMystery = ("The murderer is " + CaseFileConfidential[1].firstname + " and he/she killed with a/an " + CaseFileConfidential[2].name + " in the " + CaseFileConfidential[0]);

console.log(revealMystery);
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

function random_selector(array) {

}

function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
