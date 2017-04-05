//Instructions https://github.com/ironhack-labs/lab-javascript-clue
//Iteration 1 - Creating the cards
//Clue has three different types of cards: suspects, rooms, and weapons. These three types of cards are always separated. Use data structures to model and create these cards.
//Create one data structure for each of the people, weapons and rooms described above. For example:
//var mrGreen = {
  // Properties
//};
//var rope = {
  // Properties
//}

var cards = [
  //Suspects
  [ 
    {firstName: 'Jacob', lastName: 'Green', color: 'green' , occupation: 'businessman' , description: 'helps people out for a price'},
    { firstName: 'Doctor', lastName: 'Orchid', color: 'white', occupation: 'doctor ', description: ' daughter of Mr. Boddy' },
    { firstName: 'Victor', lastName: 'Plum', color: 'purple', occupation: 'video game designer', description: ' billionaire who embraces new popularity' },
    { firstName: 'Kassandra', lastName: 'Scarlet', color: 'red', occupation: 'A-list movie star', description: 'haunted by past' },
    { firstName: 'Eleanor', lastName: 'Peacock', color: 'blue', occupation: 'popularity seeker', description: 'from wealthy family seeks popularity using status and money'},
    { firstName: 'Jack', lastName: 'Mustard', color: 'yellow', occupation: 'former football player', description: 'tries to get by on his former glory'}
     ],
  //Available Weapons
  [
     { weapon: 'Rope', weaponPower: 2 },
     { weapon: 'Knife', weaponPower: 6 },
     { weapon: 'Candlestick', weaponPower: 1 },
    { weapon: 'Dumbbell', weaponPower: 3 },
    { weapon: 'Poison', weaponPower: 9 },
    { weapon: 'Axe', weaponPower: 7 },
    { weapon: 'Bat', weaponPower: 5 },
    { weapon: 'Trophy', weaponPower: 4 },
    { weapon: 'Pistol', weaponPower: 8 },

         ],
  //House Rooms
  ["Dining Room", "Conservatory", "Kitchen", "Study", "Library",
       "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room",
       "Observatory", "Theater", "Guest house", "A patio"]
     ];
     

     //Need to Test
console.log(cards);
console.log(" ");

     //Instructions. Iteration 2 - Creating and revealing the mystery
//At the beginning of the game, players shuffle each one of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.

//1. Create a method to randomly select one element from a card stack - working!

function randomCard () {
  var cards = ['Suspects', 'Available Weapons', 'House Rooms'];

  var randomCard = Math.random();            // Random decimal [0.0 - 1.0)
  randomCard = randomCard * cards.length; // Random decimal [0.0 - 6.0)
  randomCard = Math.floor(randomCard);     // Random integer [0   - 5]

  return cards[randomCard];
}

var myCard = randomCard();
console.log(myCard);


//2.Create another function that calls the method above once for each card stack- working!

function randomCard(cards) {
  console.log('This is a random card ' + cards + '!');
}

randomCard('Suspects');
// card = Suspects
// function will alert: "This is a random card Suspects!"

randomCard('Available Weapons');
// card = Available Weapons
// function will alert: "This is a random card Available Weapons!"

randomCard('House Rooms');
// card = House Rooms
// function will alert: "This is a random card House Rooms!"

//3.Place the “Case File Confidential” in a virtual envelope. - I didnt understand this question :( what is virtual envelope? 


//4.Create a method to reveal the mystery. - Can I use console log method?  I didnt understand this question :(
///
console.log(cards[0]);
//Suspects
console.log(cards[1]);
//Weapons
console.log(cards[2]);

