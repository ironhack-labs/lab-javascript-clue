// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor
lst_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

  var MrGreen = {
    first_name: "Jacob",
    last_name: "Green",
    color: "green",
    description: "He has a lot of connections",
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: "Entrepreneur"
  };
  var DrOrchid = {
    first_name: "Doctor",
    last_name: "Orchid",
    color: "white",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age: "26",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    occupation: "Scientist"
  };
  var ProfPlum = {
    first_name: "Victor",
    last_name: "Plum",
    color: "purple",
    description: "Billionare video game designer",
    age: "22",
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: "Designer"
  };
  var MissScarlet = {
    first_name: "Kasandra",
    last_name: "Scarlet",
    color: "red",
    description: "She is an A-list movie star with a dark past,",
    age: "31",
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,",
    occupation: "Actor"
  };
  var MrsPeacock = {
    first_name: "Eleanor",
    last_name: "Peacock",
    color: "blue",
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    age: "36",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: "Socialité"
  };
  var MrMustard = {
    first_name: "Jack",
    last_name: "Mustard",
    color: "yellow",
    description: "He is a former football player who tries to get by on his former glory",
    age: "62",
    image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation: "Retired Football player",
  };
  
  var Rope = { name: "rope", weight: 10 };
  var Knife = { name: "knife", weight: 8 };
  var Candlestick = { name: "Candlestick", weight: 2 };
  var Dumbbell = { name: "Dumbbell", weight: 30 };
  var Poison = { name: "Poison", weight: 2 };
  var Axe = { name: "axe", weight: 15 };
  var Bat = { name: "bat", weight: 13 };
  var Trophy = { name: "trophy", weight: 25 };
  var Pistol = { name: "pistol", weight: 20 };
  
  
  var roomsArray =
    ["DinningRoom",
      "Conservatory",
      "Kitchen",
      "Study",
      "Library",
      "BilliardRoom",
      "Lounge",
      "Ballroom",
      "Hall",
      "Spa",
      "LivingRoom",
      "Observatory",
      "Theater",
      "GuestHouse",
      "Patio"];
//three different types of cards: suspects, rooms, and weapons
//game's characters (poss. killers), available weapons and house rooms



// Characters Collection
var charactersArray = [MrGreen, DrOrchid, ProfPlum, MissScarlet, MrsPeacock, MrMustard, ];

// Rooms' Collection
var roomsArray = ["DinningRoom",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "BilliardRoom",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "LivingRoom",
    "Observatory",
    "Theater",
    "GuestHouse",
    "Patio"];
// Weapons Collection
var weaponsArray = [Rope, Knife, Candlestick, Dumbbell, Poison, Axe, Bat, Trophy, Pistol];

/*var randomSelector = function(arr){}*/
function randomSelector(myArray) {
    var size = myArray.length;
    var randomIndex = Math.floor(Math.random()*size);
    return myArray[randomIndex];
}

function pickMistery() {
    //var MisteryEnvelope = "";
    var result = [];
    result.push(randomSelector(charactersArray));
    result.push(randomSelector(weaponsArray));
    result.push(randomSelector(roomsArray));
    return result;
}

var MisteryEnvelope = pickMistery();

function revealMistery(MisteryEnvelope) {
    console.log("this is my array", MisteryEnvelope)
    return (MisteryEnvelope[0].first_name + " " + MisteryEnvelope[0].last_name + " killed Mr.Boddy using the " + MisteryEnvelope[1].name + " in the " + MisteryEnvelope[2].name +  "!!!!");
}

// don't understand why the last term >> MisteryEnvelope[2].name +  "!!!!"); << MUST be .name??
