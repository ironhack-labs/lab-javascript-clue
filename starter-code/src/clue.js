var charactersArray = [];
   
   var mrGreen = {
        first_name:   "Jacob",
        last_name:    "Green",
        color:        "green",
        description:  "He has a lot of connections",
        age:          45,
        image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation:   "Entrepreneur"
        }
   var drOrchid = {
        frst_name:   "Doctor",
        lst_name:    "Orchid",
        color:        "white",
        description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age:          26,
        image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation:   "Scientist"
        }
    var profPlum = {
        first_name:   "Victor",
        last_name:    "Plum",
        color:        "purple",
        description:  "Billionare video game designer",
        age:          22,
        image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation:   "Designer"
        }

    var missScarlet = {
        first_name:   "Kasandra",
        last_name:    "Scarlet",
        color:        "red",
        description:  "She is an A-list movie star with a dark past",
        age:          31,
        image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation:   "Actor"
        }
    var mrsPeacock = {
        first_name:   "Eleanor",
        last_name:    "Peacock",
        color:        "blue",
        description:  "She is from a wealthy family and uses her status and money to earn popularity",
        age:          36,
        image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation:   "Socialité"
        }
    var mrMustard = {
        first_name:   "Jack",
        last_name:    "Mustard",
        color:        "yellow",
        description:  "He is a former football player who tries to get by on his former glory",
        age:          62,
        image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation:   "Retired Football player"
        }  
    
charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard);

// Weapons Collection
var weaponsArray = [];


var rope = {name: "rope", weight: 10}       
var knife = {name: "knife", weigh: 8}
var candlestick = {name: "candlestick", weigt: 2}
var dumbbell = {name: "dumbbell", weiht: 30}
var poison = {name: "posion", weght: 2}
var axe = {name: "axe", wight: 15}
var bat = {name: "bat", eight: 13}
var trophy = {name: "trophy", weight: 25}
var pistol = {name: "pistol", weight: 20}

weaponsArray.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);

// Rooms' Collection
var roomsArray = [];

var dinningRoom = {
    name: "Dinning room"
}
var conservatory = {
    name: "Conservatory"
}
var kitchen = {
    name: "Kitchen"
}
var study = {
    name: "Study"
}
var billiardRoom = {
    name: "Billiard Room"
}
var loung = {
    name: "Loung"
}
var ballroom = {
    name: "Ballroom"
}
var hall = {
    name: "Hall"
}
var spa = {
    name: "spa"
}
var livingRoom = {
    name: "Living Room"
}
var observatory = {
    name: "Observatory"
}
var theater = {
    name: "Theater"
}
var guestHouse = {
    name: "Guest House"
}
var patio = {
    name: "Patio"
}

roomsArray.push(dinningRoom,conservatory,kitchen,study,billiardRoom,loung,ballroom,hall,spa,livingRoom,observatory,theater,guestHouse,patio)

function randomSelector (myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)]
};



function pickMistery () { 
    var misteryEnvelope = [];
    misteryEnvelope.push(randomSelector (charactersArray));
    misteryEnvelope.push(randomSelector (weaponsArray));
    misteryEnvelope.push(randomSelector (roomsArray));
    return misteryEnvelope;
};
var misteryEnvelope = misteryEnvelope; // Aquí declaro la variable fuera DE NUEVO porque si lo hago antes de la función, la Jenni me da error, y si la dejo dentro no la puedo pasar como argumento en la última función como así lo solicita el enunciado

function revealMistery(misteryEnvelope) {
    return charactersArray[0].first_name + charactersArray[0].last_name + " killed Mr.Boddy using the " + weaponsArray[1].name + " in the " + roomsArray[2].name + "!!!!";
};

