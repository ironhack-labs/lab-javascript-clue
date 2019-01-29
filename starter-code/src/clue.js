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
  first_name:   "Doctor",
  last_name:    "Orchid",
  color:        "white",
  description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age:          26,
  image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  ocupation:    "Scientist"
} ;


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


var mrsPeacock ={

  first_name:   "Eleanor",
  last_name:    "Peacock",
  color:        "blue",
  description:  "She is from a wealthy family and uses her status and money to earn popularity",
  age:          36,
  image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation:   "Socialité",

};


var mrMustard ={
  first_name:   "Jack",
  last_name:    "Mustard",
  color:        "yellow",
  description:  "He is a former football player who tries to get by on his former glory",
  age:          62,
  image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation:   "Retired Football player"
}


// Weapons

var rope={
  name:"rope",
  weight:10
};


var knife ={
  name:"knife",
  weight:8
};

var candlestick={
  name:"candlestick",
  weight:2
};

var dumbbell={
  name:"dumbbell",
  weight:30
};
var poison ={
  name:"poison" ,
  weight:2
};
var axe={
  name:"axe",
  weight:15
};

var bat  ={
  name:"bat",
  weight:13
};
var trophy={
  name:"trophy",
  weight:25
};
var pistol={
  name:"pistol",
  weight:20
};


// name: rope        ---   weight: 10
// name: knife       ---   weight: 8
// name: candlestick ---   weight: 2
// name: dumbbell    ---   weight: 30
// name: poison      ---   weight: 2
// name: axe         ---   weight: 15
// name: bat         ---   weight: 13
// name: trophy      ---   weight: 25
// name: pistol      ---   weight: 20

// Rooms

var dinningRoom={
  name:"Dinning Room"
};

var conservatory={
  name:"Conservatory"
};

var kitchen={
  name:"Kitchen"
};

var study={
  name:"Study"
};

var library={
  name:"Library"
};
 
var billiardRoom={
  name:"Billiard Room"
};

var lounge={
  name:"Lounge"
};

var ballroom={
  name:"Ballroom"
};


var hall={
  name:"Hall"
};

var spa={
  name:"Spa"
};

var livingroom={
  name:"Living Room"
};

var observatory={
  name:"Observatory"
};

var theater={
  name:"Theater"
};


var guestHouse={
  name:"Guest House"
};

var patio={
  name:"Patio"
};


// name: Dinning Room
// name: Conservatory
// name: Kitchen
// name: Study
// name: Library
// name: Billiard Room
// name: Lounge
// name: Ballroom
// name: Hall
// name: Spa
// name: Living Room
// name: Observatory
// name: Theater
// name: Guest House
// name: Patio
// */

// Characters Collection
var charactersArray = [mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var roomsArray = [dinningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballroom,hall,spa,livingroom, observatory,theater, guestHouse, patio]

// Weapons Collection
var weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];


function randomSelector(arr){

   if (arr.length==0){
     return undefined;
   }

  var number=arr.length;

  var i=Math.floor(Math.random() * number) ;
  return arr[i];
}



function pickMistery (){
  var misteryEnvelope=[];

  misteryEnvelope.push(randomSelector(charactersArray));
  misteryEnvelope.push(randomSelector(weaponsArray));
  misteryEnvelope.push(randomSelector(roomsArray));
  

  // /return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!

    return misteryEnvelope;
}

function revealMistery (arrMistery){

  
  return arrMistery[0].first_name + " " +arrMistery[0].last_name + " killed Mr.Boddy using the " + arrMistery[1].name+ " in the " + arrMistery[2].name + "!!!!";
}

console.log(revealMistery(pickMistery()));
