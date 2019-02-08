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

// Characters Collection
let mrGreen = {first_name:"Jacob", last_name:"Green", color:"green" , description:"He has a lot of connections", age:45, image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", ocupation:"Entrepreneur"};
let drOrchid = {first_name:"Doctor", last_name:"Orchid", color:"white", description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy", age:26, image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg", ocupation:"Scientist"}
let profPlum = {first_name:"Victor", last_name:"Plum", color:"purple", description:"Billionare video game designer", age:22, image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", occupation:"Designer"}
let missScarlet = {first_name:"Kasandra", last_name:"Scarlet", color:"red", description:"She is an A-list movie star with a dark past", age:31, image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", occupation:"Actor"}
let mrsPeacock = {first_name:"Eleanor", last_name:"Peacock", color:"blue", description:"She is from a wealthy family and uses her status and money to earn popularity", age:36, image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", occupation:"Socialité"}
let mrMustard = {first_name:"Jack",last_name:"Mustard", color:"yellow", description:"He is a former football player who tries to get by on his former glory", age:62, image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", occupation:   "Retired Football player"}

var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

// Rooms' Collection
var roomsArray = [{name:"Dinning Room"},
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
];

// Weapons Collection
var weaponsArray = [{name:'rope',weight:10},{name: 'rope ',  weight: 10},
                   {name: 'knife ', weight: 8},{name: 'candlestick' ,  weight: 2},
                   {name: 'dumbbell' ,  weight: 30},{name: 'poison' ,  weight: 2},
                   {name: 'axe'  ,  weight: 15},{name: 'bat'  ,   weight: 13}
                   ];


function randomNum (num) {
  if (num === undefined) {
    return undefined;
  }
  return (Math.floor(Math.random() * num)); 
}

function randomSelector (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr[randomNum(arr.length)];
}

var misteryEnvelope;

function pickMistery () {
  let r2 = randomSelector(weaponsArray);
  let r3 = randomSelector(roomsArray);
  let r1 = randomSelector(charactersArray);
  misteryEnvelope = [r1, r2, r3];
  return (misteryEnvelope);
}

//pickMistery();
//console.log(misteryEnvelope[0].last_name)

function revealMistery (misteryEnvelope) {
  return(misteryEnvelope[0].name +" "+ misteryEnvelope[0].last_name +"Mr.Boddy using the "+misteryEnvelope[1].name +' in the '+ misteryEnvelope[2].name +'!!!!'); 
  //let cadena= +r1.name +' '+r1.last_name +'killed Mr.Boddy using the ' +r2.name +' in the '+ r3.name +'!!!!';
  //console.log(cadena);
 // let cadena = '';
  //return(cadena); 
}