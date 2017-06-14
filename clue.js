  var game = {
  // Create characters cards
   characters: [
      {firstName: "Jacob Green", color:"green", occupation: "", description: "He has a lot of connections and is always willing to help people out -- for a price."},
      {firstName: "Doctor Orchid", color:"white", occupation: "Doctor", description: "She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning (Wonder what happened with Mrs. White?)."},
      {firstName: "Victor Plum", color:"purple", occupation: "Video Game Designer", description: "He is a billionaire video game designer who is embracing his new popularity."},
      {firstName: "Kasandra Scarlet", color:"red", occupation: "Movie Star", description: "She is an A-list movie star whose past haunts her."}
    ],


  // Create weapons
  weapons: [
      {type: "rope", weight: 3},
      {type: "knife", weight: 0.2},
      {type: "candlestick", weight: 6},
      {type: "dumbell", weight: 8}
    ],

  // Create rooms
   rooms: [
      {name: "Dining Room", furniture: "table"},
      {name: "Kitchen", furniture: "stove"},
      {name: "Study", furniture: "desk"},
      {name: "Ballroom", furniture: "ball"},
      {name: "Spa", furniture: "chaise longue"},
      {name: "Observatory", furniture: "telescope"}
    ],

    caseFileConfidential : {}
}

var selectRandomlyFromCardStack = function(cardStack) {
      var randomlySelectedCard = cardStack[Math.floor(Math.random() * cardStack.length)];
      return randomlySelectedCard;
    };

var callRandomFunction = function() {
      var randomlySelectedCharacter = selectRandomlyFromCardStack(game.characters);
      var randomlySelectedWeapon = selectRandomlyFromCardStack(game.weapons);
      var randomlySelectedRoom = selectRandomlyFromCardStack(game.rooms);
      game.caseFileConfidential = { who: randomlySelectedCharacter.firstName, what: randomlySelectedWeapon.type, where: randomlySelectedRoom.name}     
    };

var revealMistery = function() {
  console.log('who: ' + game.caseFileConfidential.who);
  console.log('what: ' + game.caseFileConfidential.what);
  console.log('where: ' + game.caseFileConfidential.where);
};
    
  
callRandomFunction();
revealMistery();
