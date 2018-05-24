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

//Characters objects
var mrGreen={
    firstName:   "Jacob",
    lastName:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
}

var drOrchid={
    firstName:   "Doctor",
    lastName:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist",
}

var profPlum = {
    firstName:"Victor",
    lastName:"Plum",
    color:"purple",
    description:"Billionaire video game designer",
    age: 22,
    image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:"designer",
} 

var missScarlet = {
    firstName:"Kasandra",
    lastName:"Scarlet",
    color:"red",
    description:"She is an A-list movie star with a dark past",
    age: 31,
    image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:"Actor",
} 
var missPeacock = {
    firstName:"Eleanor",
    lastName:"Peacock",
    color:"blue",
    description:"She is from a wealthy family and uses her status and money to earn popularity",
    age: 36,
    image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:"Socialité",
} 
var mrMustard = {
    firstName:"Jack",
    lastName:"Mustard",
    color:"yellow",
    description:"He is a former football player who tries to get by on his former glory",
    age: 62,
    image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:"Retired Football player",
} 

//Room objects

var diningRoom={
    name:"diningRoom",
}

var conservatory={
    name:"conservatory",
};
var kitchen={
    name:"kitchen",
};
var study={
    name:"study",
};
var library={
    name:"library",
};
var billiardRoom={
    name:"billiardRoom",
};
var lounge={
    name:"lounge",
};
var ballRoom={
    name:"ballRoom",
};
var hall={
    name:"hall",
};
var spa={
    name:"spa",
}
var livingRoom={
    name:"livingRoom",
};
var observatory={
    name:"observatory",
};
var theater={
    name:"theater",
};
var guestHouse={
    name:"guestHouse",
}
var patio={
    name:"patio",
}

//Weapon objects
var rope={
    name: "rope",
    weight: 10,
} 
var knife={
    name: "knife",
    weight: 8,
}
var candleStick={
    name: "candleStick",
    weight: 2,
}
var dumbbell={
    name: "dumbbell",
    weight: 30,
}
var poison={
    name: "poison",
    weight: 2,
}
var axe={
    name: "axe",
    weight:15,
}
var bat={
    name: "bat",
    weight: 13,
}
var trophy={
    name: "trophy",
    weight: 25,
}
var pistol={
    name: "pistol",
    weight: 20,
}

// Characters Collection
var charactersArray = [];
charactersArray.push(mrGreen, drOrchid, profPlum, mrMustard, missPeacock, missScarlet);
//var tempArrChar=[mrGreen, drOrchid, profPlum, mrMustard, missPeacock, missScarlet];
//for(var i=0; i<tempArrChar; i++){


// Rooms' Collection
var roomsArray = [];
roomsArray.push(diningRoom, conservatory, kitchen, study, library, billiardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHouse, patio);
// Weapons Collection
var weaponsArray = [];
weaponsArray.push(rope, knife, candleStick, dumbbell, poison, axe, bat, trophy, pistol);

function randomSelector(array){
    return array[Math.floor(Math.random()*array.length)]  
    }
    

function pickMistery(){
    var misteryEnvelope=[];  
    misteryEnvelope[0]=randomSelector(charactersArray);
    misteryEnvelope[1]=randomSelector(weaponsArray);
    misteryEnvelope[2]=randomSelector(roomsArray);
        return misteryEnvelope;
    }
var envelope= pickMistery();

function revealMistery(envelope){
    return "" + envelope[0].firstName + " " + envelope[0].lastName + " " + "killed Mr.Boddy using the" + " " + envelope[1].name + " " + "in the" + " " + envelope[2].name + "!!!";
    }
    
    
    