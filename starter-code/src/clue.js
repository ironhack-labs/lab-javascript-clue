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


var DinningRoom = {name: "Dinning Room"};
var Conservatory = {name: "Conservatory"};
var Kitchen = {name: "Kitchen"};
var Study = {name: "Study"};
var Library = {name: "Library"};
var BilliardRoom = {name: "BilliardRoom"};
var Lounge = {name: "Lounge"};
var Ballroom = {name: "Ballroom"};
var Spa = {name: "Spa"};
var LivingRoom = {name: "LivingRoom "};
var Observatory= {name: "bservatory"};
var Theater = {name: "Theater"};
var GuestHouse= {name: "GuestHouse"};
var Patio ={name: "Patio"};
var Hall ={name: "Hall"};




//   ["DinningRoom",
//     "Conservatory",
//     "Kitchen",
//     "Study",
//     "Library",
//     "BilliardRoom",
//     "Lounge",
//     "Ballroom",
//     "Hall",
//     "Spa",
//     "LivingRoom",
//     "Observatory",
//     "Theater",
//     "GuestHouse",
//     "Patio"];

// Characters Collection

var charactersArray = [];
    charactersArray.push(MrGreen);
    charactersArray.push(DrOrchid);
    charactersArray.push(ProfPlum );
    charactersArray.push(MissScarlet );
    charactersArray.push(MrsPeacock);
    charactersArray.push(MrMustard);
    
    console.log(charactersArray);


// var randomSelector = charactersArray[Math.floor(Math.random() * myArray.length)];
// if(charactersArray === undefined || charactersArray.length == 0) {
//     return undefined
// }else{
//     return charactersArray[i]
// }
// Rooms' Collection
var roomsArray = [];
roomsArray.push(DinningRoom);
roomsArray.push(Conservatory);
roomsArray.push(Kitchen);
roomsArray.push(Study);
roomsArray.push(Library);
roomsArray.push(BilliardRoom);
roomsArray.push(Lounge);
roomsArray.push(Ballroom);
roomsArray.push(Hall);
roomsArray.push(Spa);
roomsArray.push(LivingRoom);
roomsArray.push(Observatory);
roomsArray.push(Patio);
roomsArray.push(GuestHouse);
roomsArray.push(Theater);


// Weapons Collection
var weaponsArray = [];
weaponsArray.push(Rope);
weaponsArray.push(Knife);
weaponsArray.push(Candlestick);
weaponsArray.push(Dumbbell);
weaponsArray.push(Poison);
weaponsArray.push(Axe);
weaponsArray.push(Bat);
weaponsArray.push(Trophy);
weaponsArray.push(Pistol);

//randomselection
function randomSelector(inputArray){
    if(inputArray.length == 0){
        return undefined;
    }else{
    var arrayIndex = Math.floor(Math.random()*inputArray.length);
    return inputArray[arrayIndex];
    }
}

//pick a random mistry

function pickMistery(){
    var stackArray = [];
    stackArray.push(randomSelector(charactersArray))
    stackArray.push(randomSelector(weaponsArray))
    stackArray.push(randomSelector(roomsArray))
    return stackArray;
}
misteryEnvelope = pickMistery();

//revealing mystery
function revealMistery(misteryEnvelope){
    return misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!"
    

}










