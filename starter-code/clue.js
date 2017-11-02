//Game Characters

var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};
var drOrchid = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};
var profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 26,
  image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
  occupation: "Designer"
};
var missScarlet = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 26,
  image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
  occupation: "Actor"
};
var mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity",
  age: 26,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

var mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
  occupation: "Retired Football player"
};
var characters = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];

//Weapons
var rope = {
  name: "Rope",
  weight: 10,
  hurt: 4
};
var knife = {
  name: "Knife",
  weight: 8,
  hurt: 12
};
var candlestick = {
  name: "Candlestick",
  weight: 2,
  hurt: 6
};
var dumbbell = {
  name: "Dumbbell",
  weight: 10,
  hurt: 5
};
var poison = {
  name: "Poison",
  weight: 2,
  hurt: 20
};
var axe = {
  name: "Axe",
  weight: 15,
  hurt: 14
};
var bat = {
  name: "Bat",
  weight: 13,
  hurt: 8
};
var trophy = {
  name: "Trophy",
  weight: 25,
  hurt: 10
};
var pistol = {
  name: "Pistol",
  weight: 20,
  hurt: 18
};
var weapons = [rope, knife, candlestick, poison, axe, bat, trophy, pistol];

var rooms = ["dinningRoom", "conservatory", "kitchen", "study", "library", "billiardRoom", "lounge", "ballroom", "hall", "spa", "livingRoom", "Observatory", "Theater", "Guest House", "Patio"];


function random_selector(array) {
  var element = Math.floor(Math.random() * array.length);
  return array[element];
}

function pick_mistery() {
  var arrayMistery = [];
  arrayMistery[0] = random_selector(characters);
  arrayMistery[1] = random_selector(weapons);
  arrayMistery[2] = random_selector(rooms);
  return arrayMistery;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function reveal_mistery(mistery) {
  console.log("Now you are going to know who is the killer!");
  sleep(5000);
  console.log("Please wait, Rome wasn't built in a day");
  sleep(5000);sleep(5000);sleep(5000);sleep(5000);
  console.log("The body was found in the " + mistery[2].toString());
  sleep(5000);
  console.log("The weapon weight was " + mistery[1].weight + ", and it cause a damage of " + mistery[1].hurt);
  sleep(5000);sleep(5000);sleep(5000);
  console.log("Ups sorry I forgot to tell you the weapon name. The murdered was made with a/an " + mistery[1].name);
  sleep(5000);sleep(5000);sleep(5000);
  console.log("And the assasin is:");
  sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);
  console.log("Are you waiting??");
  sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);
  console.log("As I said before the f*****g Rome wasn't built in a day. Wait, ok?");
  sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);sleep(5000);
  console.log("Ok OK the killer was: "+mistery[0].firstName+ " "+mistery[0].lastName+". And he/she has an age of "+mistery[0].age+" years old");
  console.log("You are very welcome indeed. Have a nice day. BYE!!!");
}

var mistery_envelope = pick_mistery();
reveal_mistery(mistery_envelope);
