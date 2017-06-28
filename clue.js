

var mrGreen = {
    firstname:'Jacob',
    lastname:'Green',
    color:'green',
    age:54,
    occupation:'business man',
    description:'He has a lot of connections and is always willing to help people out -- for a price',
}

var drOrchid = {
    firstname:'',
    lastname:'Orchid',
    color:'white',
    age:37,
    occupation:'daughter',
    description:'She is adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?)',
}

var mrPlum = {
    firstname:'Victor',
    lastname:'Plum',
    color:'purple',
    age:43,
    occupation:'billionaire',
    description:'He is a billionaire video game designer who is embracing his new popularity.',
}

var msScarlet = {
    firstname:'Kasandra',
    lastname:'Scarlet',
    color:'red',
    age:23,
    occupation:'movie-star',
    description:'She is an A-list movie star whose past haunts her.',
}

var msPeacock = {
    firstname:'Eleanor',
    lastname:'Peacock',
    color:'blue',
    age:47,
    occupation:'rich',
    description:'She is from a wealthy family and uses her status and money to earn popularity.',
}

var mrMustard = {
    firstname:'Jack',
    lastname:'Mustard',
    color:'yellow',
    age:26,
    occupation:'ex football player',
    description:'He is a former football player who tries to get by on his former glory.',
}


var rope = {
    name: 'rope',
    weight:'300g',
    color:'beige',
    hurtinglevel:1,
}

var knife = {
    name: 'knife',
    weight:'50g',
    color:'grey',
    hurtinglevel:3,
}

var candlestick = {
    name: 'candlestick',
    weight:'100g',
    color:'white',
    hurtinglevel:2,
}

var dumbbell = {
    name: 'dumbbell',
    weight:'500g',
    color:'black',
    hurtinglevel:2,
}


var poison = {
    name:'poison',
    weight:'10g',
    color:'none',
    hurtinglevel:4,
}

var axe = {
    name:'axe',
    weight:'100g',
    color:'wood',
    hurtinglevel:3,
}

var bat = {
    name:'bat',
    weight:'100g',
    color:'orange',
    hurtinglevel:2,
}

var trophy = {
    name:'trophy',
    weight:'80g',
    color:'silver',
    hurtinglevel:2,
}

var pistol = {
    name:'pistol',
    weight:'80g',
    color:'black',
    hurtinglevel:4,
}




var diningRoom = {
    room: 'diningRoom',
    floor:  '2',
    secretPassage: false,
    roomOnRight: 'patio' ,
    roomOnLeft: 'conservatory' ,
}
var conservatory = {
    room: 'conservatory',
  	floor:  '2',
  secretPassage: false,
  roomOnRight:'diningroom' ,
  roomOnLeft: 'kitchen' ,
}
var kitchen = {
    room: 'kitchen',
	  floor: '2' ,
    secretPassage: false,
    roomOnRight: 'conservatory',
    roomOnLeft: 'study' ,
}
var  study = {
  room: 'study',
	floor:  '2',
secretPassage: false,
roomOnRight: 'kitchen',
roomOnLeft: 'library' ,
}
var library = {
  room: 'library',
	floor: '2' ,
secretPassage: true,
roomOnRight: 'study',
roomOnLeft: 'billiardRoom' ,
}
var billiardRoom = {
  room: 'billiardRoom',
	floor:  '1',
secretPassage: true,
roomOnRight: 'library',
roomOnLeft: 'lounge' ,
}
var lounge = {
  room: 'lounge',
	floor:  '1',
secretPassage: false,
roomOnRight: 'billiardRoom',
roomOnLeft: 'ballRoom',
}
var ballRoom = {
  room: 'ballRoom',
	floor:  '1',
secretPassage: false,
roomOnRight: 'lounge',
roomOnLeft: 'hall' ,
}
var hall = {
  room: 'hall',
	floor: '1',
secretPassage: true,
roomOnRight: 'ballRoom',
roomOnLeft:  'spa',
}
var spa = {
  room: 'spa',
	floor: '1' ,
secretPassage: true,
roomOnRight: 'hall',
roomOnLeft: 'livingRoom' ,
}
var livingRoom = {
  room: 'livingRoom',
	floor: '0' ,
secretPassage: false,
roomOnRight: 'spa',
roomOnLeft:  'observatory',
}
var observatory = {
  room: observatory,
	floor: '0' ,
secretPassage: false,
roomOnRight: 'livingRoom',
roomOnLeft:  'theatre',
}
var theatre = {
  room: 'theatre',
	floor: '0' ,
secretPassage: true,
roomOnRight: 'observatory',
roomOnLeft:  'guestHouse',
}
var guestHouse = {
  room: 'guestHouse',
	floor: '0' ,
secretPassage: true,
roomOnRight: 'theatre',
roomOnLeft:  'patio',
}
var patio = {
  room: 'patio',
	floor: '0' ,
secretPassage: false,
roomOnRight: 'guestHouse',
roomOnLeft:  'diningRoom',
}


var clueGame = {
  characters: [mrGreen,drOrchid,mrPlum,msScarlet,msPeacock,mrMustard],
  weapons: [rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol],
  rooms: [diningRoom,conservatory,kitchen,study,library,billiardRoom,lounge,ballRoom,hall,spa,livingRoom,observatory,theatre,guestHouse,patio]
}


var output1 = clueGame.characters[Math.floor(Math.random()*clueGame.characters.length)].lastname

var output2 = clueGame.weapons[Math.floor(Math.random()*clueGame.weapons.length)].name

var output3 = clueGame.rooms[Math.floor(Math.random()*clueGame.rooms.length)].room


console.log( output1 + ' with the '  + output2 + " in the " +  output3);
