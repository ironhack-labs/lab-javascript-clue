// Characters Collection
var charactersArray = [];

var mrGreen = {
     firstName:"Jacob",
     lastName:"Green",
     color:"green",
     description:"He has a lot of conections",
     age:45,
     image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
     occupation:"Entrepreneur"
}

var drOrchid = {
     firstName: "Doctor",
     lastName: "Orchid",
     color: "white",
     description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
     age: 26,
     image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
     occupation: "Scientist"
}

var profPlum = {
     firstName: "Victor",
     lastName: "Plum",
     color: "purple",
     description: "Billionaire video game designer",
     age: 22,
     image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
     occupation: "Designer"
}

var missScarlet = {
     firstName:"Kasandra",
     lastName:"Scarlet",
     color:"red",
     description:"She is an A-list movie star with a dark past",
     age:31,
     image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
     occupation:"Actor"
}

var mrsPeacock = {
     firstName:"Eleanor",
     lastName:"Peacock",
     color:"blue",
     description:"She is from a wealthy family and uses her status and money to earn popularity",
     age:36,
     image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
     occupation:"Socialite"
}

var mrMustard = {
     firstName:"Jack",
     lastName:"Muastard",
     color:"yellow",
     description:"HHe is a former football player who tries to get by on his former glory",
     age:62,
     image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
     occupation:"Retired football player"
}
//Push to array
charactersArray.push(mrGreen);
charactersArray.push(drOrchid);
charactersArray.push(profPlum);
charactersArray.push(missScarlet);
charactersArray.push(mrsPeacock);
charactersArray.push(mrMustard);

// Weapons Collection
var weaponsArray = [];

var rope = {
     name: "rope",
     weight: 10
}

var knife = {
     name:"knife",
     weight:8
}

var candlestick = {
     name:"candlestick",
     weight:2
}

var dumbbell = {
     name:"dumbbell",
     weight:30
}

var poison = {
     name:"poison",
     weight:2
}

var axe = {
     name:"axe",
     weight:15
}

var bat = {
     name:"bat",
     weight:13
}

var trophy = {
     name:"trophy",
     weight:25
}

var pistol = {
     name:"pistol",
     weight:20
}

//Push to weapons
weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);

// Rooms' Collection
var roomsArray = [
          {name: "Dinning Room"},
          {name: "Conservatory"},
          {name: "Kitchen"},
          {name: "Study"},
          {name: "Library"},
          {name: "Billiard Room"},
          {name: "Lounge"},
          {name: "Ballroom"},
          {name: "Hall"},
          {name: "Spa"},
          {name: "Living Room"},
          {name: "Observatory"},
          {name: "Theater"},
          {name: "Guest House"},
          {name: "Patio"}
     ]


// Iteration Create the mistery

function randomSelector(element){
     if(element.length==0){
          return undefined;
     }
    return element[Math.floor(Math.random()*element.length)];
}

function pickMistery(){
     var misteryEnvelope=[];
     misteryEnvelope.push(randomSelector(charactersArray));
     misteryEnvelope.push(randomSelector(weaponsArray));
     misteryEnvelope.push(randomSelector(roomsArray));
     return misteryEnvelope;
}

function revealMistery(misteryEnvelope){
     console.log(misteryEnvelope);
     return (misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!");
}

