


  var suspects = {

    1: {
      name:"Jacob Green",
      color: "his color is green.",
      attribute: "He has a lot of connections and is always willing to help people out -- for a price."},

    2: {
      name:"Doctor Orchid",
      color: "her color is white",
      attribute: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"

    },

    3: { name:"Victor Plum",
    color: "his color is purple",
    attribute: "He is a billionaire video game designer who is embracing his new popularity."},

    4: {
      name: "Kasandra Scarlet",
      color: "her color is red",
      attribute: "She is an A-list movie star whose past haunts her."},

    5: {
      name: "Eleanor Peacock",
      color: "her color is blue",
      attribute: "She is from a wealthy family and uses her status and money to earn popularity."},

    6: {
      name: "Jack Mustard",
      color: "his color is yellow",
      attribute: "He is a former football player who tries to get by on his former glory."},

  };

  var rooms = {
    1: "dining room",
    2: "conservatory",
    3: "kitchen",
    4: "study",
    5: "library",
    6: "billiard room",
    7: "lounge",
    8: "ballroom",
    9: "hall",
    10: "spa",
    11: "living room",
    12: "observatory",
    13: "theater",
    14: "guest house",
    15: "patio",
  };

  var weapons = {
    1: "rope",
    2: "knife",
    3: "candlestick",
    4: "dumbbell",
    5: "poison",
    6: "axe",
    7: "bat",
    8: "trophy",
    9: "pistol",
  };


function randomCard(key){
    var chosenCard = Object.keys(key); //this prints out all the keys in the object key
    var randomNumber = String(Math.floor(Math.random() * Object.keys(key).length) -1);
    return key[randomNumber] ? key[randomNumber] : randomCard(key);

}

function secretEnvelope(suspects, weapons, rooms){
  return "It was " + randomCard(suspects).name + " in the " + randomCard(rooms) + " with the " + randomCard(weapons);

}

console.log(secretEnvelope(suspects, weapons, rooms));
