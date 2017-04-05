var character = [
  {name: "Jacob",
  surname: "Green", color: "green",
  description: "He has a lot of connections and is always willing to help people out -- for a price."},
  {name: "Doctor",
  surname: "Orchid", color: "white",
  description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning"},
  {name: "Victor",
  surname: "Plum",
  color: "purple",
  description: "He is a billionaire video game designer who is embracing his new popularity"},
  {name: "Kasandra",
  surname: "Scarlet",
  color: "red",
  description: "She is an A-list movie star whose past haunts her."},
  {name: "Eleanor",
  surname: "Peacock",
  color: "blue",
  description: "She is from a wealthy family and uses her status and money to earn popularity."},
  {name: "Jack", surname: "Mustard", color: "yellow", description: "He is a former football player who tries to get by on his former glory."}
  ];

  var weapons = ["Rope", "Knife", "Candlestick", "Dumbbell", "Poison", "Axe", "Bat", "Trophy", "Pistol"];

  var houseRoom = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "A patio"];

  function random (arr){
   var selection = Math.floor(Math.random() * arr.length);
   return selection;
  }

  random(character);


  function resolve (first, second, third) {
    var shuffle = "";
    shuffle += (first[random(first)].name + " " +first[random(first)].surname) + " ";
    shuffle += (second[random(second)]) + " ";
    shuffle +=(third[random(third)]);
    return shuffle;
  }
  function mystery(first , second, third) {
    var mystery = resolve(first, second, third);
    console.log(mystery);
  }

  mystery(character, weapons, houseRoom);
  
