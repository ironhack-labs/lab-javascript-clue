// Characters
/*
mrGreen
first_name:   Jacob,
last_name:    Green,
color:        green,
description:  He has a lot of connections,
age:          45,
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg,
occupation:   Entrepreneur

drOrchid
frst_name:   Doctor,
lst_name:    Orchid,
color:        white,
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy,
age:          26,
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg,
ocupation:   Scientist

profPlum
first_name:   Victor,
last_name:    Plum,
color:        purple,
description:  Billionare video game designer,
age:          22,
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg,
occupation:   Designer

missScarlet
first_name:   Kasandra,
last_name:    Scarlet,
color:        red,
description:  She is an A-list movie star with a dark past,
age:          31,
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
occupation:   Actor

mrsPeacock
first_name:   Eleanor,
last_name:    Peacock,
color:        blue,
description:  She is from a wealthy family and uses her status and money to earn popularity,
age:          36,
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg,
occupation:   Socialité

mrMustard
first_name:   Jack,
last_name:    Mustard,
color:        yellow,
description:  He is a former football player who tries to get by on his former glory,
age:          62,
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg,
occupation:   Retired Football player

// Weapons

name: rope,weight: 10
name: knife, weight: 8
name: candlestick,weight: 2
name: dumbbell,weight: 30
name: poison,weight: 2
name: axe,weight: 15
name: bat,weight: 13
name: trophy,weight: 25
name: pistol,weight: 20

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

// Characters Collection
var charactersArray = [
     {
        first_name:   'Jacob',
        last_name:    'Green',
        color:        'green',
        description:  'He has a lot of connections',
        age:          45,
        image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        occupation:   'Entrepreneur'},
    {
        first_name:   'Doctor',
        last_name:    'Orchid',
        color:        'white',
        description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        age:          26,
        image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        ocupation:   'Scientist'
    },
    {
        first_name:   'Victor',
        last_name:    'Plum',
        color:        'purple',
        description:  'Billionare video game designer',
        age:          22,
        image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
        occupation:   'Designer'
    },
    {
        first_name:   'Kasandra',
        last_name:    'Scarlet',
        color:        'red',
        description:  'She is an A-list movie star with a dark past',
        age:          31,
        image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
        occupation:   'Actor'
    },
    {
        first_name:   'Eleanor',
        last_name:    'Peacock',
        color:        'blue',
        description:  'She is from a wealthy family and uses her status and money to earn popularity',
        age:          36,
        image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        occupation:   'Socialité'},
    {
        first_name:   'Jack',
        last_name:    'Mustard',
        color:        'yellow',
        description:  'He is a former football player who tries to get by on his former glory',
        age:          62,
        image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
        occupation:   'Retired Football player'
    }

];

// Rooms' Collection
var roomsArray = [
    {name: 'Dinning Room'},
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
    {name: 'Patio'}];

// Weapons Collection
var weaponsArray = [
    {name: 'rope',weight: 10},
    {name: 'knife', weight: 8},
    {name: 'candlestick',weight: 2},
    {name: 'dumbbell',weight: 30},
    {name: 'poison',weight: 2},
    {name: 'axe',weight: 15},
    {name: 'bat',weight: 13},
    {name: 'trophy',weight: 25},
    {name: 'pistol',weight: 20},
];


function randomSelector(InputCollection){
    if(InputCollection.length!==0){
    return InputCollection[Math.floor(Math.random() * InputCollection.length)];}
    else {
        return undefined;
    }
}


function pickMistery (){
    var CardStack=[charactersArray,weaponsArray,roomsArray,];
    var misteryEnvelope =[];


    /*CardStack.forEach(element => {
        misteryEnvelope.push(randomSelector(element));
        });*/
    for (var i=0;i<CardStack.length;i++)
    {
        misteryEnvelope.push(randomSelector(CardStack[i]));

    }
    
    return misteryEnvelope;
 
}


function revealMistery(InputCollection){
  return  InputCollection[0].first_name+ " " +InputCollection[0].last_name + " killed Mr.Boddy using the "+InputCollection[1].name+" in the "+InputCollection[2].name+ "!!!!";

}