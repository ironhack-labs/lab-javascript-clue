var cards = [];
var weapons=[];
var rooms=[];

//characters
var suspects = [{name: "Jacob Green", color: "green", description: "He has a lot of connections and is always willing to help people out -- for a price."},
                 {name: "Doctor Orchid", color: "white", description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."},
                 {name: "Victor Plum", color: "purple", description: "He is a billionaire video game designer who is embracing his new popularity."},
                 {name: "Kasandra Scarlet", color: "red", description: "She is an A-list movie star whose past haunts her."},
                 {name: "Eleanor Peacock", color: "blue", description: "She is from a wealthy family and uses her status and money to earn popularity."},
                 {name: "Jack Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory."}];
//Weapon type
var rope = {type: "Rope"};
var knife = {type: "Knife"};
var candlestick = {type: "Candlestick"};
var dumbbell = {type: "Dumbbell"};
var poison = {type: "Poison"};
var axe = {type: "Axe"};
var bat = {type: "Bat"};
var trophy = {type: "Trophy"};
var pistol = {type: "Pistol"};

weapons.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);

//rooms
var diningRoom = {location: "Dining Room"};
var conservatory = {location: "Conservatory"};
var kitchen = {location: "Kitchen"};
var study = {location: "Study"};
var library = {location: "Library"};
var billiardRoom = {location: "Billiard Room"};
var lounge = {location: "Lounge"};
var ballroom = {location:"Ballroom"};
var hall = {location:"Hall"};
var aSpa = {location: "A spa"};
var livingRoom = {location: "Living Room"};
var observatory = {location: "Observatory"};
var theater = {location: "Theater"};
var guestHouse = {location: "Guest House"};
var aPatio = {location: "A patio"};

rooms.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballroom, hall, aSpa, livingRoom, observatory, theater, guestHouse, aPatio);

//Pushing Arrays
cards.push(suspects, weapons, rooms);

//Functions
function randomCard(cardStack){
    return cardStack[Math.floor((Math.random(cardStack) *cardStack.length))];
}

cards.forEach(function(card){
  return console.log(randomCard(card));
});
