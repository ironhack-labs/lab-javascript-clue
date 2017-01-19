var mrGreen = {
  colour: "green",
  firstName: "Jacob",
  lastName: "Green",
  ocupation: "",
  description: "",
  age:"",
  image:""

};

var mrOrchid = {
  colour: "white",
  firstName: "Doctor",
  lastName: "Orchid",
  ocupation: "",
  description: "",
  age:"",
  image:""

};
var mrPlum = {
  colour: "purple",
  firstName: "Victor",
  lastName: "Plum",
  ocupation: "",
  description: "",
  age:"",
  image:""

};
var msScarlet = {
  colour: "red",
  firstName: "Casandra",
  lastName: "Scarlet",
  ocupation: "",
  description: "",
  age:"",
  image:""

};
var msPeacock = {
  colour: "blue",
  firstName: "Eleanor",
  lastName: "Peacock",
  ocupation: "",
  description: "",
  age:"",
  image:""

};
var mrMustard = {
  colour: "yellow",
  firstName: "Jack",
  lastName: "Mustard",
  ocupation: "",
  description: "",
  age:"",
  image:""

};

var person = [];
    person.push(mrGreen,mrOrchid,mrPlum,msScarlet,msPeacock,mrMustard);
    console.log(person);

var rope = {
    weapon: "rope",
    weight:"",
    colour:"",
    count: "",
}
var knife = {
    weapon: "knife",
    weight:"",
    colour:"",
    count: "",
}
var candlestick= {
    weapon: "candlestick",
    weight:"",
    colour:"",
    count: "",
}
var dumbbell = {
    weapon: "dumbbell",
    weight:"",
    colour:"",
    count: "",
}
var poison = {
    weapon: "poison",
    weight:"",
    colour:"",
    count: "",
}
var axe = {
    weapon: "axe",
    weight:"",
    colour:"",
    count: "",
}
var bat = {
    weapon: "bat",
    weight:"",
    colour:"",
    count: "",
}
var trophy = {
    weapon: "trophy",
    weight:"",
    colour:"",
    count: "",
}
var pistol = {
    weapon: "pistol",
    weight:"",
    colour:"",
    count: "",
}

var weapons = [];
    weapons.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);
    console.log(weapons);


var dinningRoom = {
    place:"dinningRoom",
    size:"",
    light:"",
}

var conservatory = {
    place:"conservatory",
    size:"",
    light:"",
}
var kitchen = {
    place:"kitchen",
    size:"",
    light:"",
}
var study = {
    place:"study",
    size:"",
    light:"",
}
var library = {
    place:"library",
    size:"",
    light:"",
}
var billiarRoom = {
    place:"billiarRoom",
    size:"",
    light:"",
}
var lounge = {
    place:"lounge",
    size:"",
    light:"",
}
var ballroom = {
    place:"ballroom",
    size:"",
    light:"",
}
var hall = {
    place:"hall",
    size:"",
    light:"",
}
var aSpa = {
    place:"aSpa",
    size:"",
    light:"",
}
var livingRoom = {
    place:"livingRoom",
    size:"",
    light:"",
}
var observatory = {
    place:"observatory",
    size:"",
    light:"",
}
var theater = {
    place:"theater",
    size:"",
    light:"",
}
var guestHouse = {
    place:"guestHouse",
    size:"",
    light:"",
}
var aPatio = {
    place:"aPatio",
    size:"",
    light:"",
}

var rooms = [];
    rooms.push(dinningRoom,conservatory,kitchen,study,library,billiarRoom,lounge,ballroom,hall,aSpa,livingRoom,observatory,theater,guestHouse,aPatio);
    console.log(rooms);


//iteration 2

function randomCharacter(array){
    var nCharacter = Math.floor(Math.random()*(array.length));

    console.log("Indice array elegido: "+nCharacter);
return array[nCharacter];
}

var aleatCharacter = randomCharacter(person);
var aleatWeapon= randomCharacter(weapons);
var aleatRoom = randomCharacter(rooms);

console.log(aleatCharacter.firstName);
console.log(aleatWeapon);
console.log(aleatRoom);

console.log("In this case, the de killer is "+aleatCharacter.firstName+" "+aleatCharacter.lastName+" with a "+aleatWeapon.weapon+" in the "+aleatRoom.place);
