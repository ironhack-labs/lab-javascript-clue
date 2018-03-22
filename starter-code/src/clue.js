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

var mrGreen ={
    
firstName:"Jacob",
lastName:"Green",
age: '45',
occupation:"Entrepreneur"
}

var drOrchid = {
    
firsName:"Doctor",
lastName:"Orchid",
color:"white",
age:'26',
ocupation:"Scientist"
}

var profPlum = {
firstName:'Victor',
lastName:'Plum',
color:'Purple',
age: '22',
occupation:'Designer'
}

 var missScarlet = {
firstName:'Kasandra',
lastName:'Scarlet',
color:'red',
age:'31',
occupation:'Actor'
 }

var mrsPeacock = {
firstName:'Eleanor',
lastName:'Peacock',
color:'blue',
age:'36',
occupation:'Socialité'
}

var mrMustard = {
firstName:'Jack',
lastName:'Mustard',
color:'yellow',
age:'62',
occupation:'Retired Football player'
}

var rope = {name:'rope', weight: 10},
var knife = {name:'knife', weight: 8},
var candleStick = {name:'candlestick', weight:2}
var dumBell = {name:'dumbbell', weight:30}
var poison = {name:'poison', weight:2}
var axe = {name:'axe', weight:15}
var bat = {name:'bat', weight:13}
var trophy = {name:'trophy', weight:25}
var pistol = {name:'pistol', weight:20}

vardinningRoom = {name:'dinning room'}
 var conservatoryRoom = {name:'conservatory'}
 var kitchenRoom = {name:'kitchen'}
 var studyRoom = {name:'study'}
 var libraryRoom = {name:'library'}
 var billiarrdRoom = {name:'billiard room'}
 var loungeRoom = {name:'lounge'}
 var ballRoom = {name:'ballroom'}
 var hallRoom = {name:'hall'}
 var spaRoom = {name:'spa'}
 var livingRoom = {name:'living room'}
 var obervatoryRoom = {name:'observatory'}
 var theaterRoom = {name:'theater'}
 var guestRoom = {name:'guest house'}
 var patioRoom = {name:'patio'}



// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [];

charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);

roomsArray.push(dinningRoom,conservatoryRoom, kitchenRoom, studyRoom, libraryRoom, billiarrdRoom, loungeRoom, ballRoom, hallRoom,spaRoom, livingRoom, obervatoryRoom, theaterRoom, guestRoom, patioRoom);

weaponsArray.push(rope, knife, candleStick, dumBell, poison, axe, bat, trophy, pistol);

function randomSelector(array){
   var random =  Math.floor(Math.random() * (array.length))  /* math.random picks a random number from 1 - 0.9999 
                                                                math.floor will only pick a lower number but you need the math.floor to
                                                                make the number a whole number
                                                                times the length of the array, if it weren't an array I would have to write +1
                                                                 */    
 return array[random]
}

/*  function randomSelector(array){           
    //create random number
    var randomNumber = Math.random();
    //multiply by length
    
*/

function pickMystery(array){
    var mysteryEnvelope = [];
    mysteryEnvelope.push(randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray));
    return mysteryEnvelope;     // push randomSelector into all arrays, it'll pick a random item and push it to the mystery envelope array
}

/* 
     function pickMystery(array){
    
    charactersArray = [1];    //what does this do?

    return [1,1,1];
}





function revealMystery(mysteryEnvelope){

}





