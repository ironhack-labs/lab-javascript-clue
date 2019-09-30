
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
occupation:    Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionaire video game designer
age:          22
image:        https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://www.radiotimes.com/uploads/images/Original/111967.jpg
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
image:        https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg
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
name: Dining Room
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


// Characters Collection
const charactersArray = [
    {firstName: "Jacob", lastName: "Green", color: "green", description: "He has a lot of connections", age: 45, image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", occupation: "entrepreneur"},
    {firstName: "Doctor", lastName: "Orchid", color: "white", description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy", age: 26, image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg", occupation: "Scientist"},
    {firstName: "Victor", lastName: "Plum", color: "purple", description: "Billionaire video game designer", age: 22, image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg", occupation: "Designer"},
    {firstName: "Kasandra", lastName: "Scarlet", color: "red", description: "She is a list-A movie star with a dark past", age: 31, image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg", occupation: "Actor"},
    {firstName: "Eleanor", lastName: "Peacock", color: "blue", description: "She is from a wealthy family and uses her status and money to earn popularity", age: 36, image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation: "Socialité"},
    {firstName: "Jack", lastName: "Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory", age: 62, image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg", occupation: "Retired Football player"},  
];

// Rooms Collection
const weaponsArray = [
    {name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20},
];

// Weapons Collection
const roomsArray = [
    {room: "Dinning Room" },
    {room: "Conservatory" },
    {room: "Kitchen" },
    {room: "Study" },
    {room: "Library" },
    {room: "Billiard Room" },
    {room: "Lounge" },
    {room: "Ballroom" },
    {room: "Hall" },
    {room: "Spa" },
    {room: "Living Room" },
    {room: "Observatory" },
    {room: "Theater" },
    {room: "Guest House" },
    {room: "Patio" },
];

let randomItem=roomsArray[Math.floor(Math.random()*roomsArray.length)];
let randomItem2=charactersArray[Math.floor(Math.random()*charactersArray.length)];
let randomItem3=weaponsArray[Math.floor(Math.random()*weaponsArray.length)];


function randomSelector (array) {
    if (array=roomsArray) { 
        return randomItem;
         
    } else if (array=charactersArray) {
        return randomItem2; 
    } else {
        return randomItem3;
    }
};

let mysteryEnvelope = {...randomItem, ...randomItem2, ...randomItem3};

 function pickMistery() {
    
    console.log(mysteryEnvelope);
    return mysteryEnvelope;
  
}

//pickMistery()

function revealMystery (mysteryEnvelope) {
    console.log(`${mysteryEnvelope.firstName} ${mysteryEnvelope.lastName} killed Mr. boddy using the ${mysteryEnvelope.name} in the ${mysteryEnvelope.room}!!!`)
}

revealMystery(mysteryEnvelope)
