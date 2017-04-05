var characters = [
  {firstName: "Jacob", lastName: "Green", color: "green", occupation: '', age: '' , description: "A lot of contacts, willing to help people out -- for a price."  },
  {firstName: "Doctor", lastName: "Orchid", color: '', occupation: "Expelled student" , age: '', description: "Adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning " },
  {firstName: "Victor", lastName: "Plum" , color: "purple", occupation: "Video Game Designer" , age: '' , description: "He is a billionaire who is embracing his new popularity." },
  {firstName: "Kassandra", lastName: "Scarlet", color: "red", occupation: "A-list Movie star", age: '' , description: "Her pat haunts her." },
  {firstName: "Eleanor", lastName: "Peacock", color: "blue", occupation: "", age: "", description: "From a wealthy family, uses status and money for popularity." },
  {firstName: "Jack", lastName: "Mustard" , color: "yellow", occupation: "former Football Player", age: "" , description: "tries to get by on his former glory." },
];

var rooms = ["Dining room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "A spa", "Living room", "Observatory", "Theater", "Guest house", "A patio]"];

var weapons = ["Rope", "Knife", "Candlestick", "Dumbbell", "Poison", "Axe", "Bat", "Trophy", "Pistol"];

function randomCard(cardsArray) {
  var cardChoose = Math.floor(cardsArray.length * Math.random());
  return cardsArray[cardChoose];
}



function chooseRandomCards() {
  var confidentialEnvelope = [];
  var randomCharacter = randomCard(characters);
  confidentialEnvelope.push(randomCharacter);
  var randomRoom = randomCard(rooms);
  confidentialEnvelope.push(randomRoom);
  var randomWeapon = randomCard(weapons);
  confidentialEnvelope.push(randomWeapon);
  return confidentialEnvelope;
}

chooseRandomCards();
