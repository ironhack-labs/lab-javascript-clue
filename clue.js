var suspects;

var rooms;

var weapons;


suspects= ["Mr. Green", "Doctor Orchid", "Mr. Plum", "Miss Scarlet", "Mrs. Peacock", "Colonel Mustard"];
// suspects = [
//     {firstName:"Jacob", lastName:"Green", color:"green"},
//     {firstName:"Doctor", lastName:"Orchid", color:"white"},
//     {firstName:"Victor", lastName:"Plum", color:"purple"},
//     {firstName:"Kasandra", lastName:"Scarlet", color:"red"},
//     {firstName:"Eleanor", lastName:"Peacock", color:"blue"},
//     {firstName:"Jack", lastName:"Mustard", color:"yellow"}
// ];

weapons = [ "rope", "knife", "candlestick", "dumbbell", "poison", "axe", "bat", "trophy", "pistol"];

rooms = ["diningRoom", "conservatory", "kitchen", "study", "library", "billiardRoom","lounge",
    "ballroom", "hall", "spa", "livingRoom", "observatory", "theater", "guestHouse", "patio"];


var murderer;

var roomOfMurder;

var weaponOfMurder;


function drawCards(){
    murderer= suspects[Math.floor(Math.random() * 6)];
    roomOfMurder= rooms[Math.floor(Math.random() * rooms.length)];
    weaponOfMurder= weapons[Math.floor(Math.random() * weapons.length)];
    return murderer, roomOfMurder, weaponOfMurder;
}

function revealSolution(){
    console.log("The victim was killed by " +murderer+ " with a " +weaponOfMurder+ " in the " +roomOfMurder);
}

drawCards();
revealSolution();



// GAME characters
// Jacob Green: his color is green. He has a lot of connections and is always willing to help people out -- for a price.
//
// Doctor Orchid: her color is white. She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?).
//
// Victor Plum: his color is purple. He is a billionaire video game designer who is embracing his new popularity.
//
// Kasandra Scarlet: her color is red. She is an A-list movie star whose past haunts her.
//
// Eleanor Peacock: her color is blue. She is from a wealthy family and uses her status and money to earn popularity.
//
// Jack Mustard: his color is yellow. He is a former football player who tries to get by on his former glory.
