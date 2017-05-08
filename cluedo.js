var characters = [

{ mrGreen: {
  firstname: "Jacob",
  lastname: "Green",
  Occupation: "Guard at the greenmile",
  Age: 14,
  Description: "He has a lot of connections and is always willing to help people out" ,
  Images: "None",
  Color: "White" }
},
{ DoctorOrchid: {
  Firstname: "Doctor",
  Lastname: "Orchid",
  Occupation: "Gardener",
  Age: 31,
  Description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning" ,
  Images: "None",
  Color: "White" }
},
{ VictorPlum: {
  Firstname: "Victor",
  Lastname: "Plum",
  Occupation: "Gamer",
  Age: 40,
  Description: "He is a billionaire video game designer who is embracing his new popularity" ,
  Images: "None",
  Color: "purple"}
},
{
  KasandraScarlet: {
  Firstname: "Kasandra",
  Lastname: "Scarlet",
  Occupation: "Knight",
  Age: 31,
  Description: "he is an A-list movie star whose past haunts her" ,
  Images: "None",
  Color: "red" }
  },
 {
  EleanorPeacock: {
  Firstname: "Eleanor",
  Lastname: "Peacock",
  Occupation: "Witch",
  Age: 120,
  Description: "She is from a wealthy family and uses her status and money to earn popularity" ,
  Images: "None",
  Color: "blue" }
  },
{
  JackMustard: {
  Firstname: "Jack",
  Lastname: "Mustard",
  Occupation: "Animal trainer",
  Age: 31,
  Description: "He is a former football player who tries to get by on his former glory" ,
  Images: "None",
  Color: "yellow"
} } ];

var wapons = [
{
Rope: {
Weight: 100,
Color: "blue",
Damage: 200 }
} ,
{
Knife: {
Weight: 60,
Color: "white",
Damage: 80 }
} ,
{
Candlestick: {
Weight: 300,
Color: "black",
Damage: 1000}
} ,
{
Dumbbell: {
Weight: 300,
Color: "orange",
Damage: 700}
} ,
{
Poison: {
Weight: 9,
Color: "pink",
Damage: 800}
} ,
{
Axe: {
Weight: 5,
Color: "red",
Damage: 1}
} ,
{
Bat: {
Weight: 100,
Color: "blue",
Damage: 200}
} ,
{
Trophy: {
Weight: 500,
Color: "pink",
Damage: 500}
} ,
{
Pistol: {
Weight: 400,
Color: "green",
Damage: 500}
}
];

var houseRooms = [
"Dining room",
"Conservatory",
"Kitchen",
"Study",
"Library",
"Billiard room",
"Lounge",
"Ballroom",
"Hall",
"A spa",
"Living room",
"Observatory",
"Theater",
"Guest house",
"A patio"
];


//Create a method to randomly select one element from a card stack.
function randomCard (cards) {
  return cards[Math.floor(Math.random()*cards.length)];
}

var character = randomCard(characters);


//Create another function that calls the method above once for each card stack.
var wapon = randomCard(wapons);
var houseRoom = randomCard(houseRooms);

//Place the “Case File Confidential” in a virtual envelope. 😉
var caseFileConfidential = {
  Character: character,
  Wapon: wapon,
  Houseroom: houseRoom
};

//Create a method to reveal the mistery.
console.log(caseFileConfidential);
