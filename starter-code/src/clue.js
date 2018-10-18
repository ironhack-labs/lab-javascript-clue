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

// Characters Collection
var charactersArray = [  ];
  var green =  {first_name:"Jacob",last_name:"Green" ,color:"green" , description:"He has a lot of connections" ,age: 45 ,image:"https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"  ,occupation:"Entrepreneur" };
  var orchid =  {first_name:"Doctor",last_name:"Orchid" ,color:"white" , description:"PhD in plant toxicology. Adopted daughter of Mr. Boddy" ,age: 26 ,image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg"  ,occupation:"Scientist" };
  var plum = {first_name:"Victor",last_name:"Plum" ,color:"purple" , description:"Billionare video game designer" ,age: 22 ,image:"https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg"  ,occupation:"Designer" };
  var scarlet =  {first_name:"Kasandra",last_name:"Scarlet" ,color:"red" , description:"She is an A-list movie star with a dark past" ,age: 31 ,image:"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg"  ,occupation:"Actor" };
  var peacock = {first_name:"Eleanor",last_name:"Peacock" ,color:"blue" , description:"She is from a wealthy family and uses her status and money to earn popularity" ,age: 36 ,image:"https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg"  ,occupation:"Socialité" };
  var mustard =  {first_name:"Jack",last_name:"Mustard" ,color:"yellow" , description:"He is a former football player who tries to get by on his former glory" ,age: 62 ,image:"https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg"  ,occupation:"Retired Football player" };

charactersArray.push(green)
charactersArray.push(orchid)
charactersArray.push(plum)
charactersArray.push(scarlet)
charactersArray.push(peacock)
charactersArray.push(mustard)

console.log(charactersArray)
// Rooms' Collection
var roomsArray = []
    var dinningroom = {name:"Dinning Room",};
    var conservatory = {name:"Conservatory", };
    var kitchen = {name:"Kitchen", };
    var study = {name:"Study",};
    var library = {name:"Library", };
    var billiardroom = {name:"Billiard Room", };
    var lounge = {name:"Lounge", };
    var ballroom = {name:"Ballroom", };
    var spa = {name:"Spa", };
    var livingroom = {name:"Living Room", };
    var observatory = {name:"Observatory", };
    var theater = {name:"Theater", };
    var guesthouse = {name:"Guest House", };
    var patio = {name:"Patio", };

roomsArray.push(dinningroom)
roomsArray.push(conservatory)
roomsArray.push(kitchen)
roomsArray.push(study)
roomsArray.push(library)
roomsArray.push(billiardroom)
roomsArray.push(lounge)
roomsArray.push(ballroom)
roomsArray.push(spa)
roomsArray.push(livingroom)
roomsArray.push(observatory)
roomsArray.push(theater)
roomsArray.push(guesthouse)
roomsArray.push(patio)


// Weapons Collection
var weaponsArray = []
  var rope = {name:"rope", weight :10};
  var knife = {name:"knife", weight :8};
  var candlestick = {name:"candlestick", weight :2};
  var dumbbell ={name:"dumbbell", weight :30};
  var poison ={name:"poison", weight :2};
  var axe ={name:"axe", weight :15};
  var bat ={name:"bat", weight :13};
  var trophy ={name:"trophy", weight :25};
  var pistol ={name:"pistol", weight :20};

  weaponsArray.push(rope)
  weaponsArray.push(knife)
  weaponsArray.push(candlestick)
  weaponsArray.push(dumbbell)
  weaponsArray.push(poison)
  weaponsArray.push(axe)
  weaponsArray.push(bat)
  weaponsArray.push(trophy)
  weaponsArray.push(pistol)


// random selector//

function randomSelector(array) {
    if (array.length === 0) {
        return undefined
    }
        return array[Math.floor(Math.random()*array.length)]; 
    }
console.log(randomSelector(charactersArray))


//PICK MYSTERY//



function pickMistery(){
    var myMistery = [];
    var randomCharacter = randomSelector(charactersArray);
    var randomRooms = randomSelector(roomsArray);
    var randomWeapons = randomSelector(weaponsArray) ;
    
    myMistery.push(randomCharacter);
    myMistery.push(randomWeapons);
    myMistery.push(randomRooms);
    return myMistery;

}

var misteryEnvelope = pickMistery()

// MYSTERY ENVELOPPE //

var misteryEnvelope = [ ];

// REVEAL MYSTERY//
function revealMistery(misteryEnvelope){
    var firstNameCharacter = misteryEnvelope[0].first_name;
    var lastNameCharacter = misteryEnvelope[0].last_name;
    var weaponName= misteryEnvelope[1].name;
    var roomnName= misteryEnvelope[2].name;

    return misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name + " killed Mr.Boddy using the " + misteryEnvelope[1].name + " in the " + misteryEnvelope[2].name + "!!!!";  

}
