/* No vi el starter code, me puse por mi cuenta a pensar como se podria resolver y a desarrollar todo con la información que habia en el README, por eso la info de los sospechosos.. es menor. Intento explicar todo con mas detalle */

/* Array de objetos con la info de los sospechosos*/
var suspects = [{
    name: "Jacob"
  },
  {
    name: "Doctor"
  },
  {
    name: "Victor"
  },
  {
    name: "Casandra"
  },
  {
    name: "Eleanor"
  },
  {
    name: "Jack"
  }
];

/* Array de objetos con la info de las armas*/
var weapons = [{
    weapon: "Rope"
  },
  {
    weapon: "Knife"
  },
  {
    weapon: "Candlestick"
  },
  {
    weapon: "Dumbbell"
  },
  {
    weapon: "Poison"
  },
  {
    weapon: "Axe"
  },
  {
    weapon: "Bat"
  },
  {
    weapon: "Trophy"
  },
  {
    weapon: "Pistol"
  }
];

/* Array de objetos con la info de las habitaciones*/
var rooms = [{
    room: "Dinning room"
  },
  {
    room: "Conservatory"
  },
  {
    room: "Kitchen"
  },
  {
    room: "Study"
  },
  {
    room: "Library"
  },
  {
    room: "Billiard room"
  },
  {
    room: "Lounge"
  },
  {
    room: "Ballroom"
  },
  {
    room: "Hall"
  },
  {
    room: "Spa"
  },
  {
    room: "Living room"
  },
  {
    room: "Observatory"
  },
  {
    room: "Guest house"
  },
  {
    room: "Theater"
  },
  {
    room: "Patio"
  }
];

/* Comienzo del juego*/
alert("Let's begin, separating the 3 cards and putting them in a Virtual Envelope!!");

/* Funcion para elegir un elemento random de un array (suspects, rooms, weapons o la que se introduja como parametro*/
function randomCard(group) {
  var length = group.length;
  var random = Math.floor(Math.random() * (length));
  return group[random];
}

/* Funcion que separa 1 carta random de cada monton de cartas*/
function giveCards() {
  var murder = [randomCard(suspects), randomCard(weapons), randomCard(rooms)];
  return murder;
}

/* Creacion de la variable virtualEnvelope, que es un array que contiene las propiedades del crimen*/
var virtualEnvelope = giveCards();
console.log("Virtual Envelope: The murder is " + virtualEnvelope[0].name + ", using the " + virtualEnvelope[1].weapon + " located in the " + virtualEnvelope[2].room);

/* Funcion que pregunta al usuario cuales son sus sospechas sobre el crimen*/
function askOptions() {
  var userOptions = []
  var personAnswer = userOptions.push(prompt("Who do you think is the suspect?", "Cristian"));
  var weaponAnswer = userOptions.push(prompt("What do you think they used?", "with the MAC"));
  var roomAnswer = userOptions.push(prompt("Where do you think it happened", "in Ironhack"));
  return userOptions;
}

/* La variable choices almacena las opciones que propone el usuario*/
var choices = askOptions()

/* Funcion que comprueba si las sospechas del usuario son correctas y da un console.log de si se ha acertado o no */
function chekUserOptions() {
  if (choices[0] === virtualEnvelope[0].name) {
    console.log("You found the murder, it is" + virtualEnvelope[0].name)
  } else {
    console.log("You did  not find the murder")
  }
  if (choices[1] === virtualEnvelope[1].weapon) {
    console.log("You found the weapon, it is" + virtualEnvelope[1].room)
  } else {
    console.log("You did  not find the weapon")
  }
  if (choices[2] === virtualEnvelope[2].room) {
    console.log("You found the spot, it is" + virtualEnvelope[2].weapon)
  } else {
    console.log("You did  not find the room")
  }
}

chekUserOptions();
