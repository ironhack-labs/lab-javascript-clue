//creamos tres tipos de diferentes tipos de cartas (arrays)
// Characters Collection

var misteryEnvelope = [];

var mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur'};
 
var drOrchid = {
    first_name: 'Doctor',
    last_name: 'Orchid',
    color: 'white',  
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddywhite',
    age: 26, image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation: 'Scientist'
};
 
var missScarlet = {
    first_name: 'Victor',
    last_name: 'Plum',  
    color: 'purple', age: 22,
    description: 'Billionare, video game designer',
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation: 'Designer'
};


var profPlum = {
    first_name: 'Kasandra',
    last_name: 'Scarlet',
    color: 'red', age: 31,
    description: 'She is an A-list movie star with a dark past',
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor'
};


var mrsPeacock = {
    first_name: 'Eleanor',
    last_name: 'Peacock',
    color: 'blue',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialite'
};

 
var mrMustard = {
    first_name: 'Jack',
    last_name: 'Mustard',
    color: 'yellow',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'RetiredFootballplayer'
};

var charactersArray = [
  mrGreen,
  drOrchid,
  missScarlet,
  profPlum,
  mrsPeacock,
  mrMustard,
  ];


// Rooms' Collection
var roomsArray = [
     'Dinning Room',
     'Conservatory',
     'Kitchen',
     'Study',
     'Library',
     'Billiard Room',
     'Lounge',
     'Ballroom',
     'Hall',
     'Spa',
     'Living Room',
     'Observatory',
     'Theater',
     'Guest House',
     'nPatio'
  ];
 //Weapons Collection
var weaponsArray = [
    {name: 'rope',
    weight: 10},
    {name: 'knife',
    weight: 8},
    {name: 'candlestick',
    weight: 2},
    {name: 'dumbbell',  
    weight: 30},
    {name: 'poison',
    weight: 2},
    {name: 'axe',
    weight: 15},
    {name: 'bat',
    weight: 13},
    {name: 'trophy',  
    weight: 25},
    {name: 'pistol',
    weight: 20},
];

//Esta funcion vuelca el resultado de volcar la informacion sobre el array vacio misteryEnvelope

function randomSelector(array){
  //
  var  indexRandom= (Math.floor(Math.random()*(array.length)))
  return array [indexRandom]
   
  }
  

function pickMistery(){
 
  misteryEnvelope.push(randomSelector(charactersArray))

  misteryEnvelope.push(randomSelector(roomsArray))
 
  misteryEnvelope.push(randomSelector(weaponsArray))
 
  return (misteryEnvelope)

}
function revealMistery(){
  misteryEnvelope.push(randomSelector(charactersArray))
  revealMistery()
}
//console.log(
//first_name:" "  last_name: killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!)
pickMistery()


//misteryEnvelope [name: last_name ]

//FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!