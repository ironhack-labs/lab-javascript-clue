var characters =[
  {color: "green", name: "jacob", lastName: "green", occupation: "medic", age: 20, description:"He has a lot of connections and is always willing to help people out"},
  {color: "white",name: "doctor", lastName: "orchid", occupation: "biologist", age: 25, description:"She is the adopted daugther of Mr. Boddy, a biologist"},
  {color: "purple", name: "victor", lastName: "plum", occupation: "video game", age: 35, description:"He is a billionaire video game designer who is embracing his new popularity"},
  {color: "red", name: "kasandra", lastName: "scarlet", occupation: "actress", age: 45, description:"She is an A-list movie star whose past haunts her"},
  {color: "blue", name: "eleanor", lastName: "peacock", occupation: "reach", age: 55, description:"She is from a wealthy family and uses her status and money to earn popularity"},
  {color: "yellow", name: "jack", lastName: "mustard", occupation: "football player", age: 26, description:"He is a former football player who tries to get by on his former glory"}
  ];
​
var weapons = [
  {name: "rope", weight:100, color: "green"},
  {name: "rope", weight:200, color: "blue"},
  {name: "rope", weight:300, color: "black"},
  {name: "rope", weight:100, color: "red"},
  {name: "rope", weight:400, color: "blue"},
  {name: "rope", weight:600, color: "brown"},
  {name: "rope", weight:100, color: "green"},
  {name: "rope", weight:200, color: "green"},
  {name: "rope", weight:100, color: "red"}
  ];
​
var rooms = [
  {name: "diningRoom", size:20},
  {name: "conservatory", size:20},
  {name: "kitchen", size:20},
  {name: "study", size:20},
  {name: "library", size:20},
  {name: "billiardRoom", size:20},
  {name: "lounge", size:20},
  {name: "ballroom", size:20},
  {name: "hall", size:20},
  {name: "aSpa", size:20},
  {name: "livingRoom", size:20},
  {name: "observatory", size:20},
  {name: "theater", size:20},
  {name: "guestHouse", size:20},
  {name: "aPatio", size:25}
];
​
function randomCard(array){
  var index = Math.floor(Math.random()*array.length);
  var element = array[index];
  return element;
}
​
​
var murderer = [randomCard(characters), randomCard(weapons), randomCard(rooms)];
console.log(murderer);
