// CLUE GAME

  var cards = {

        suspects: [
          {firstName: "Jacob", secondName: "Greene", age: 35, occupation: "mercenary", description: "Always willing to help people out - for a price", color: "green"},
          {firstName: "Doctor" , secondName: "Orchid" , age: 55 , occupation: "Biologist - PhD in Plant Toxicology", description: "Privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning", color: "white"},
          {firstName: "Victor", secondName: "Plum" , age: 32 , occupation: "Video game designer", description: "Billionaire video game designer who is embracing his new popularity" , color: "purple"},
          {firstName: "Kasandra", secondName: "Scarlet" , age: 26 , occupation: "Actress", description: "A-list movie star whose past haunts her", color: "red"},
          {firstName: "Eleanor" , secondName: "Peacock", age: 65 , occupation: "Heiress", description: "From a wealthy family and uses her status and money to earn popularity." , color: "blue"},
          {firstName: "Jack", secondName: "Mustard" , age: 37 , occupation: "Former Football Player", description: "Former football player who tries to get by on his former glory", color: "yellow"}

          ],

        weapons: [
          {name: "Pistol"},
          {name: "Trophy"},
          {name: "Bat"},
          {name: "Axe"},
          {name: "Poison"},
          {name: "Candlestick"},
          {name: "Knife"},
          {name: "Rope"},

          ],

        rooms: [
          {name: "Dining Room"},
          {name: "Conservatory"},
          {name: "Kitchen"},
          {name: "Study"},
          {name: "Library"},
          {name: "Billiard Room"},
          {name: "Lounge"},
          {name: "Ballroom"},
          {name: "Hall"},
          {name: "A spa"},
          {name: "Living Room"},
          {name: "Observatory"},
          {name: "Theater"},
          {name: "Guest House"},
          {name: "Patio"}

          ]

  };

// Individual functions for each card deck
// Sets random number variable for each card deck.  Applies to our selected
// object to return a random array position (thus returning that array position's
// entire object.
// Returns the names of each randomly selected object in the array.

  function randomSuspect(cards){
   var randomNumber = Math.floor((Math.random() * cards.suspects.length) + 0);
   return "The murderer is " + cards.suspects[randomNumber].firstName;
  }

  function randomWeapon(cards){
   var randomNumber = Math.floor((Math.random() * cards.weapons.length) + 0);
   return "The weapon is " + cards.weapons[randomNumber].name;
  }

  function randomRoom(cards){
   var randomNumber = Math.floor((Math.random() * cards.rooms.length) + 0);
   return "The room is " + cards.rooms[randomNumber].name;
  }

  var suspect = randomSuspect(cards);
  var weapon = randomWeapon(cards);
  var room = randomRoom(cards);


  console.log(suspect + "\n" + weapon + "\n" + room);
