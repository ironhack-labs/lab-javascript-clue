var person1 = {
  firstName: "Jacob",
  lastName: "Green",
  color: "Green",
  description: "Helpful, for a price."
}

var person2 = {
  firstName: "Doctor",
  lastName: "Orchid",
  color: "White",
  description: "Former doctor, questionable past"
}

var person3 = {
  firstName: "Victor",
  lastName: "Plumb",
  color: "Purple",
  description: "Billionaire game designer"
}

var person4 = {
  firstName: "Kasandra",
  lastName: "Scarlet",
  color: "Red",
  description: "A-list Movie Star with a haunting past"
}

var person5 = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "Blue",
  description: "Popular girl from a wealthy family"
}

var person6 = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "Yellow",
  description: "Has-been football player"
}

var weapon1 = {
  name: "Rope",
  weight: 15,
  damage: 5
}

var weapon2 = {
  name: "Knife",
  weight: 2,
  damage: 50
}

var weapon3 = {
  name: "Candlestick",
  weight: 1,
  damage: 10
}

var weapon4 = {
  name: "Dumbbell",
  weight: 10,
  damage: 20
}

var weapon5 = {
  name: "Poison",
  weight: 3,
  damage: 40
}

var weapon6 = {
  name: "Axe",
  weight: 20,
  damage: 80
}

var weapon7 = {
  name: "Bat",
  weight: 10,
  damage: 30
}

var weapon8 = {
  name: "Trophy",
  weight: 8,
  damage: 9
}

var weapon9 = {
  name: "Pistol",
  weight: 5,
  damage: 100
}

var suspects = [ ];
suspects.push(person1, person2, person3, person4, person5, person6);

var weapons = [];
weapons.push(weapon1, weapon2, weapon3, weapon4, weapon5, weapon6, weapon7, weapon8, weapon9);

var houseRooms = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "A Spa", "Living Room", "Observatory", "Theatre", "Guest House", "A Patio"];

var cards = [];
cards.push(suspects, weapons, houseRooms);
//console.log(cards[0][0]);

 
 function firstPick(deck) {
    
    var pick;
    
    if (deck.length == 6) {
      pick = parseInt(Math.random() * (6));
    }
    else if (deck.length == 9) {
        pick = parseInt(Math.random() * (9));
    }
    else {
        pick = parseInt(Math.random() * (15));
    }
    return pick;
  }
  
  function drawThree (cards){
      var threeCards = [];
      
      cards.forEach(function (deck, i) {
        threeCards[i] = firstPick(deck);
      })
      return threeCards;
    } 
    
    var virtualEnvelope = drawThree(cards);
    
    function revelation (cards, virtualEnvelope) {
      virtualEnvelope.forEach(function(card, i) {
        console.log(cards[i][virtualEnvelope[i]]);
        console.log("");
      })
  }
  
  revelation(cards, virtualEnvelope);
