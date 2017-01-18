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
    weight:"",
    colour:"",
    count: "",
}
var knife = {
    weight:"",
    colour:"",
    count: "",
}
var candlestick= {
    weight:"",
    colour:"",
    count: "",
}
var dumbbell = {
    weight:"",
    colour:"",
    count: "",
}
var poison = {
    weight:"",
    colour:"",
    count: "",
}
var axe = {
    weight:"",
    colour:"",
    count: "",
}
var bat = {
    weight:"",
    colour:"",
    count: "",
}
var trophy = {
    weight:"",
    colour:"",
    count: "",
}
var pistol = {
    weight:"",
    colour:"",
    count: "",
}

var weapons = [];
    weapons.push(rope,knife,candlestick,dumbbell,poison,axe,bat,trophy,pistol);
    console.log(weapons);


var dinningRoom = {
    size:"",
    light:"",
}

var conservatory = {
    size:"",
    light:"",
}
var kitchen = {
    size:"",
    light:"",
}
var study = {
    size:"",
    light:"",
}
var library = {
    size:"",
    light:"",
}
var billiarRoom = {
    size:"",
    light:"",
}
var lounge = {
    size:"",
    light:"",
}
var ballroom = {
    size:"",
    light:"",
}
var hall = {
    size:"",
    light:"",
}
var aSpa = {
    size:"",
    light:"",
}
var livingRoom = {
    size:"",
    light:"",
}
var observatory = {
    size:"",
    light:"",
}
var theater = {
    size:"",
    light:"",
}
var guestHouse = {
    size:"",
    light:"",
}
var aPatio = {
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
