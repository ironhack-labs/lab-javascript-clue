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
*/

const mrGreen = 
{   
firstName: 'Jacob',
lastName: 'Green',
color: 'green',
description:  'He has a lot of connections',
age: 45,
image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation: 'Entrepreneur'
};

const drOrchid =
{   firstName: 'Doctor',
lastName: 'Orchid',
color: 'white',
description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age: 26,
image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
occupation: 'Scientist'
};

const profPlum =
{
firstName:   'Victor',
lastName:    'Plum',
color:        'purple',
description:  'Billionaire video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'
};

const missScarlet =
{   firstName:   'Kasandra',
lastName:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'
};

const mrsPeacock =
{   firstName:   'Eleanor',
lastName:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:       'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité',
};

const mrMustard = 
{   firstName:   'Jack',
lastName:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player'
}

// Characters Collection
const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms Collection
const roomsArray = [
    {name: 'Dining Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'Study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'},
    {name: 'Theater'},
    {name: 'Guest House'},
    {name: 'Patio'},
];

// Weapons Collection
// Weapons Collection
const weaponsArray = [
    {name: 'rope'},
    {name: 'knife'},
    {name: 'candlestick'},
    {name: 'dumbbell'},
    {name: 'poison'},
    {name: 'axe'},
    {name: 'bat'},
    {name: 'trophy'},
    {name: 'pistol'}
  ];

//   const weaponsArray = [
//     {rope: 
//       {weight: 10}
//     },
//     {knife: 
//       {weight: 8}
//     },
//     {candlestick: 
//       {weight: 2}
//     },
//     {dumbbell:
//       {weight: 30}
//     },
//     {poison:
//       {weight: 2}
//     },
//     {axe:
//       {weight: 15}
//     },
//     {bat:
//       {weight: 13}
//     },
//     {trophy:
//       {weight: 25}
//     },
//     {pistol:
//       {weight: 20}
//     }
//   ];

// console.log(rA = roomsArray[Math.floor(Math.random()*roomsArray.length)]);
// console.log(cA = charactersArray[Math.floor(Math.random()*charactersArray.length)]);
// console.log(wA = weaponsArray[Math.floor(Math.random()*weaponsArray.length)]);

function randomSelector (arr) {
    return arr[Math.floor(Math.random()*arr.length)]
};

// randomSelector(roomsArray);

// run randomselector function 3 times 
// push each iteration into the mystery envelope

// My Function:
// function pickMystery (param1, param2, param3) {
//     let mysteryEnvelope = {}
//     mysteryEnvelope.character = randomSelector(param1);
//     mysteryEnvelope.room = randomSelector(param2);
//     mysteryEnvelope.weapon = randomSelector(param3);
//     console.log(mysteryEnvelope);
//     return mysteryEnvelope;
// }
// pickMystery(charactersArray, roomsArray, weaponsArray);


// DRY Code and the way Jasmine wants it:
function pickMystery () {
    let mysteryEnvelope = {
        suspect: randomSelector(charactersArray),
        room: randomSelector(roomsArray),
        weapon: randomSelector(weaponsArray)
    }
    // console.log(mysteryEnvelope);
    return mysteryEnvelope;
}

function revealMystery (x) {
    return `${x.suspect.firstName} ${x.suspect.lastName} killed Mr. Boddy using the ${x.weapon.name} in the ${x.room.name}!!!!`;
 }

// revealMystery(pickMystery());