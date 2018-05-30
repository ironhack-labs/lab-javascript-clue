// Characters
var mrGreen = {

    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
    
    };
    
    var drOrchid = {
    frst_name:   "Doctor",
    lst_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
    
    };
    
    var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
    };
    
    
    var missScarlet ={
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
    
    };
    
    var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
    };
    
    
    var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
    };
    
    
    //Weapons
    
    var weapon1=  {name: "rope", weight: 10};
    var weapon2 = {name: "knife", weight: 8};
    var weapon3 = {name: "candlestick", weight: 2};
    var weapon4 = {name: "dumbbell", weight: 30};
    var weapon5 = {name: "poison",weight: 2};
    var weapon6 = {name: "bat", weight: 13};
    var weapon7 = {name: "axe", weight: 15};
    var weapon8 = {name: "trophy", weight: 25};
    var weapon9 = {name: "pistol", weight: 20};



    // Rooms
var room1 = {name : "Dinning Room"};
var room2 = {name : "Conservatory"};
var room3 = {name : "Kitchen"};
var room4 = {name : "Study"};
var room5 = {name : "Library"};
var room6 = {name : "Billiard Room"};
var room7 = {name : "Lounge"};
var room8 = {name : "Ballroom"};
var room9 = {name : "Hall"};
var room10 = {name: "Spa"};
var room11 = {name: "Living Room"};
var room12 = {name: "Observatory"};
var room13 = {name: "Theater"};
var room14 = {name: "Guest House"};
var name15 = {name: "Patio"};


// Characters Collection
var charactersArray = [];

charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);

// console.log(charactersArray);
// Rooms' Collection
var roomsArray = [];

roomsArray.push(weapon1);
roomsArray.push(weapon2);
roomsArray.push(weapon3);
roomsArray.push(weapon4);
roomsArray.push(weapon5);
roomsArray.push(weapon6);
roomsArray.push(weapon7);
roomsArray.push(weapon8);

//console.log(roomsArray);
// Weapons Collection
var weaponsArray = [];

weaponsArray.push(room1);
weaponsArray.push(room2);
weaponsArray.push(room3);
weaponsArray.push(room4);
weaponsArray.push(room5);
weaponsArray.push(room6);
weaponsArray.push(room7);
weaponsArray.push(room8);
weaponsArray.push(room9);
weaponsArray.push(room10);
weaponsArray.push(room11);
weaponsArray.push(room12);
weaponsArray.push(room13);
weaponsArray.push(room14);
weaponsArray.push(name15);


//console.log(weaponsArray);

//var anArray = [];

function randomSelector(anArray) {
    var res = Math.floor(Math.random()*anArray.length);
    return anArray[res];
  }

    //console.log (randomSelector(weaponsArray));
     // randomSelector(weaponsArray);

var misteryEnvelope = [];

 function pickMistery(array1,array2,array3) {

    
    var r1 = randomSelector(array1);

    var r2 = randomSelector(array2);

    var r3 =  randomSelector(array3);

    misteryEnvelope = [r1,r2,r3];

    return misteryEnvelope;

 }

 //console.log(pickMistery(weaponsArray,roomsArray,charactersArray));
 
 pickMistery(charactersArray,weaponsArray,roomsArray)

 //console.log(pickMistery(charactersArray,weaponsArray,roomsArray));

 //var misteryEnvelope = [];

 // <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE

 function revealMistery(misteryEnvelope) {

   return misteryEnvelope[0].first_name+' '+misteryEnvelope[0].last_name+' '+'killed Mr.Boddy using the'+' '+misteryEnvelope[1].name+' in the place '+ misteryEnvelope[2].name;


 }

 //console.log(revealMistery(misteryEnvelope));
 
