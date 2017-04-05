var characters = [
  {firstName: "Jacob", lastName: "Green", color: "Green"},
  {firstName: "Doctor", lastName: "Orchid", color: "White"},
  {firstName: "Victor", lastName: "Plum", color: "Purple"},
  {firstName: "Kasandra", lastName: "Scarlet", color: "Red"},
  {firstName: "Eleanor", lastName: "Peacock", color: "Blue"},
  {firstName: "Jack", lastName: "Mustard", color: "Yellow"}
];

var weapons = [
  "Rope",
  "Knife",
  "Candlestick",
  "Dumbbell",
  "Poison",
  "Axe",
  "Bat",
  "Trophy",
  "Pistol",
];

var rooms = [
  "Dining room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living room",
  "Observatory",
  "Theater",
  "Guest house",
  "Patio",
];

function randomize(element){
  var randomNumber = Math.floor(Math.random() * element.length);
  return element[randomNumber];
}

console.log("The killer was " + randomize(characters).firstName + ", the weapon was the " + randomize(weapons) + " and the crime scene the " + randomize(rooms));
