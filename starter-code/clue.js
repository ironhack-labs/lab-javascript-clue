var supects =
  [
    {firstName: "Jacob",
    lastName:  "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"},

    {firstName: "Doctor",
    lastName: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: 26,
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"},

    {firstName: "Victor",
    lastName: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"},
  {firstName: "Kasandra",
    lastName: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past",
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: "Actor"},
  {firstName: "Eleanor",
    lastName: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"},
{


  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"}
]

var rooms =
  ["Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
]



var rope = { name: "rope", weight: 10}
var knife = { name: "knife", weight: 8}
var candlestick = {name: "candlestick", whileight: 2}
var dumbbell ={ name: "dumbbell", weight: 30}
var poison = { name: "poison", weight: 2}
var axe ={ name: "axe", weight: 15}
var bat = {name: "bat", weight: 13}
var trophy = {name: "trophy", weight: 25}
var pistol = {name: "pistol", weight: 20}

var weapons = [
  rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol
];

function random_selector(array) {
  var randomNumber = Math.random();
  var mult = randomNumber * array.length;
  var round = Math.floor(mult);

  var card = array[round];
  console.log(card);

}

random_selector(weapons);

function random_selecton_three() {
  random_selector(supects);
  random_selector(weapons);
  random_selector(rooms);
}

function pick_mistery() {

}

function reveal_mistery(mistery) {

}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
