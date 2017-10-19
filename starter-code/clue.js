function print( something ) {
  var message = console.log( something );
  return message;
}

function getRandomNumber(upper) {
  var num = Math.floor( Math.random() * upper );
  return num;
}



// Suspect - cards

    var card0 = {
      firstName: "Jacob",
      lastName: "Green",
      color: "green",
      occupation: "entrepreneur",
      age: 45,
      description: "He has a lot of connections and is always willing to help people out -- for a price."
    };

    var card1 = {
      firstName: "Doctor",
      lastName: "Orchid",
      color: "white",
      occupation: "scientist",
      age: 26,
      description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning."
    };

    var card2 = {
      firstName: "Victor",
      lastName: "Plum",
      color: "white",
      occupation: "designer",
      age: 22,
      description: "He is a billionaire video game designer who is embracing his new popularity."
    };

    var card3 = {
      firstName: "Kasandra",
      lastName: "Scarlet",
      color: "red",
      occupation: "actor",
      age: 31,
      description: "She is an A-list movie star whose past haunts her."
    };

    var card4 = {
      firstName: "Eleanor",
      lastName: "Peacock",
      color: "blue",
      occupation: "socialite",
      age: 36,
      description: "She is from a wealthy family and uses her status and money to earn popularity."
    };

    var card5 = {
      firstName: "Jack",
      lastName: "Mustard",
      color: "yellow",
      occupation: "retired football player",
      age: 62,
      description: "He is a former football player who tries to get by on his former glory."
    };



// Weapons

var availWeapon = [
  { weapon: "Rope", Weight: 10 },
  { weapon: "Knife", Weight: 8 },
  { weapon: "Candlestick", Weight: 2 },
  { weapon: "Dumbbell", Weight: 30 },
  { weapon: "Poison", Weight: 2 },
  { weapon: "Axe", Weight: 15 },
  { weapon: "Bat", Weight: 13 },
  { weapon: "Trophy", Weight: 25 },
  { weapon: "Pistol", Weight: 20 }
];

// Rooms 

var availRoom = [
  { room: "Dinning Room" },
  { room: "Kitchen" },
  { room: "Study" },
  { room: "Library" },
  { room: "Billiard Room" },
  { room: "Lounge" },
  { room: "Ballroom" },
  { room: "Hall" },
  { room: "Spa" },
  { room: "Living Room" },
  { room: "Observatory" },
  { room: "Theater" },
  { room: "Guest House" },
  { room: "Patio" }
];



// Block 1 - Card Profiles 
var cardProfiles = [ card0, card1, card2, card3, card4, card5 ];

function getRandomProfile() {
  var howMany = getRandomNumber( cardProfiles.length );
  return howMany;
}

  var mysteryProfile = cardProfiles[ getRandomProfile() ];


// Block 2 - Rooms
function getRandomRoom() {
  var howMany = getRandomNumber( availRoom.length );
  return howMany;
}

  var mysteryRoom = availRoom[ getRandomRoom() ];


// Block 3 - Weapons
function getRandomWeapon() {
  var howMany = getRandomNumber( availWeapon.length );
  return howMany;
}

  var mysteryWeapon = availWeapon[ getRandomWeapon() ];





// -------------------------
// Run Program 
// -------------------------
function mysteryEnvelope() {
    // var envelope = [mysteryProfile, mysteryRoom, mysteryWeapon];
    var envelope = {
      murderer: mysteryProfile,
      weapon: mysteryWeapon,
      room: mysteryRoom
    };
    
    print(envelope);
}

mysteryEnvelope();







