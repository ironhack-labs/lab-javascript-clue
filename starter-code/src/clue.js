let charactersArray = [
{ 
name:         'mrGreen',
first_name:   'Jacob',
last_name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur'
},
{
name:         'drOrchid',
first_name:   'Doctor',
last_name:    'Orchid',
color:        'white',
description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
age:          26,
image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
occupation:    'Scientist'
},
{
name:         'profPlum',
first_name:   'Victor',
last_name:    'Plum',
color:        'purple',
description:  'Billionaire video game designer',
age:          22,
image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
occupation:   'Designer'
},
{
name:         'missScarlet',
first_name:   'Kasandra',
last_name:    'Scarlet',
color:        'red',
description:  'She is an A-list movie star with a dark past',
age:          31,
image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
occupation:   'Actor'
},
{
name:         'mrsPeacock',
first_name:   'Eleanor',
last_name:    'Peacock',
color:        'blue',
description:  'She is from a wealthy family and uses her status and money to earn popularity',
age:          36,
image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
occupation:   'Socialité'
},
{
name:         'mrMustard',
first_name:   'Jack',
last_name:    'Mustard',
color:        'yellow',
description:  'He is a former football player who tries to get by on his former glory',
age:          62,
image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
occupation:   'Retired Football player',
}]

let weaponsArray = [
{name: 'rope',   weight: 10},
{name: 'knife',   weight: 8},
{name: 'candlestick',   weight: 2},
{name: 'dumbbell',  weight: 30},
{name: 'poison',   weight: 2},
{name: 'axe',  weight: 15},
{name: 'bat',   weight: 13},
{name: 'trophy', weight: 25},
{name: 'pistol',   weight: 20},
]

let roomsArray = ['Dining Room','Conservatory', 'Kitchen', 'Study', 'Library','Billiard Room','Lounge','Ballroom','Hall','Spa',
'Living Room', 'Observatory', 'Theater','Guest House', 'Patio']


function randomSelector(array){

    if(array.length ==  0 ){
        return undefined;
    }

    if(array.length == 1){
        return array[0];
    }

    return array[Math.floor(Math.random() * array.length)]
}

// console.log(randomSelector(charactersArray));
// console.log(randomSelector(weaponsArray));
// console.log(randomSelector(roomsArray))

function pickMystery() {

    let misteryEnvelope = {
        suspect: randomSelector(charactersArray),
        weapon: randomSelector(weaponsArray),
        room: randomSelector(roomsArray)
    }
    return misteryEnvelope;
}

//  console.log(pickMystery());
let misteryEnvelope = pickMystery();

 function revealMystery(misteryEnvelope){

    // console.log(pickMystery())

    let firstName =  misteryEnvelope.suspect.first_name;
    let lastName = misteryEnvelope.suspect.last_name;
    let weapon = misteryEnvelope.weapon.name;
    let place = misteryEnvelope.room;

    // <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <PLACE>!!!!
    return `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${place.name}!!!!` 
 }

console.log(revealMystery(misteryEnvelope));
