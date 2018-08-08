// Characters

var mrGreen =
    {
        first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
    };

var drOrchid =     {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
};

var profPlum =
{
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
    };

var missScarlet = 
{first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor"
};

var mrsPeacock = 
{
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"   
    };

var mrMustard =
{
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",  
    };

// Weapons

var rope = {name: "rope        ",   weight: 10};
var knife= {name: "knife       ",   weight: 8};
var candlestick = {name: "candlestick ",   weight: 2};
var dumbbell= {name: "dumbbell    ",   weight: 30};
var poison= {name: "poison      ",   weight: 2};
var axe= {name: "axe         ",   weight: 15};
var bat = {name: "bat         ",   weight: 13};
var trophy = {name: "trophy      ",   weight: 25};
var pistol = {name: "pistol      ",   weight: 20};

// Rooms
// {Dinning Room,
//  Conservatory,
//  Kitchen,
//  Study,
//  Library,
//  Billiard Room,
//  Lounge,
//  Ballroom,
//  Hall,
//  Spa,
//  Living Room,
//  Observatory,
//  Theater,
//  Guest House,
//  Patio}


// Characters Collection
var charactersArray = [
    {first_name:   "Jacob",
        last_name:    "Green",
        color:        "green",
        description:  "He has a lot of connections",
        age:          45,
        image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation:   "Entrepreneur"
        },
        {first_name:   "Doctor",
        last_name:    "Orchid",
        color:        "white",
        description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age:          26,
        image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation:   "Scientist"},
        {
        first_name:   "Victor",
        last_name:    "Plum",
        color:        "purple",
        description:  "Billionare video game designer",
        age:          22,
        image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation:   "Designer"
        },

        {first_name:   "Kasandra",
        last_name:    "Scarlet",
        color:        "red",
        description:  "She is an A-list movie star with a dark past",
        age:          31,
        image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation:   "Actor"
        },

        {
        first_name:   "Eleanor",
        last_name:    "Peacock",
        color:        "blue",
        description:  "She is from a wealthy family and uses her status and money to earn popularity",
        age:          36,
        image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation:   "Socialité"   
        },

        {
        first_name:   "Jack",
        last_name:    "Mustard",
        color:        "yellow",
        description:  "He is a former football player who tries to get by on his former glory",
        age:          62,
        image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation:   "Retired Football player",  
        }
];


// Rooms' Collection
var roomsArray = ["Dinning Room",
    "Conservatory",
    "Kitchen",
    "Study",
    "Library",
    "Billiard Room",
    "Lounge",
    "Ballroom",
    "Hall",
    "Spa",
    "Living Room",
    "Observatory",
    "Theater",
    "Guest House",
    "Patio"];

// Weapons Collection
var weaponsArray = [
    {name: "rope"        ,   weight: 10},
    {name: "knife"       ,   weight: 8},
    {name: "candlestick" ,   weight: 2},
    {name: "dumbbell"  ,   weight: 30},
    {name: "poison"   ,   weight: 2},
    {name: "axe"    ,   weight: 15},
    {name: "bat"     ,   weight: 13},
    {name: "trophy"      ,   weight: 25},
    {name: "pistol"      ,   weight: 20}
];

function randomSelector (arrayEntry) {
    return arrayEntry[Math.floor(Math.random() * arrayEntry.length)];
};


// var misteryEnvelope;

function pickMistery(){
    
    misteryEnvelope = [ randomSelector(charactersArray)  , randomSelector(weaponsArray), randomSelector(roomsArray) ];
    return  misteryEnvelope;
    
};

var misteryEnvelope = pickMistery();

function revealMistery(result){
result = misteryEnvelope[0].first_name +" "+ misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2] +"!!!!" ;
return result;
}
revealMistery();
