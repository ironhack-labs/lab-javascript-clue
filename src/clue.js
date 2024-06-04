
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 35,
    description: "A shrewd businessman with many secrets.",
    color: "Green",
    image: "https://example.com/jacob-green.jpg",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Art Dealer",
    age: 42,
    description: "A sophisticated woman with a taste for the finer things in life.",
    color: "Blue",
    image: "https://example.com/eleanor-peacock.jpg",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Psychiatrist",
    age: 50,
    description: "A sharp-minded doctor with a deep understanding of the human psyche.",
    color: "Purple",
    image: "https://example.com/victor-plum.jpg",
  },
  {
    firstName: "Natalia",
    lastName: "Reed",
    occupation: "Scientist",
    age: 38,
    description: "A brilliant researcher with a passion for uncovering the truth.",
    color: "Red",
    image: "https://example.com/natalia-reed.jpg",
  },
  {
    firstName: "James",
    lastName: "Black",
    occupation: "Detective",
    age: 45,
    description: "A seasoned investigator with a keen eye for detail and a relentless pursuit of justice.",
    color: "Black",
    image: "https://example.com/james-black.jpg",
  },
];


const weaponsArray = [
  {
    name: "Candlestick",
    weight: 5,
  },
  {
    name: "Dagger",
    weight: 2,
  },
  {
    name: "Lead Pipe",
    weight: 7,
  },
  {
    name: "Revolver",
    weight: 3,
  },
  {
    name: "Rope",
    weight: 1,
  },
  {
    name: "Wrench",
    weight: 4,
  },
  {
    name: "Poison",
    weight: 0.5,
  },
  {
    name: "Axe",
    weight: 6,
  },
  {
    name: "Baseball Bat",
    weight: 8,
  },
];





const roomsArray = [
  { name: "Kitchen" },
  { name: "Ballroom" },
  { name: "Conservatory" },
  { name: "Dining Room" },
  { name: "Cellar" },
  { name: "Billiard Room" },
  { name: "Library" },
  { name: "Lounge" },
  { name: "Hall" },
  { name: "Study" },
  { name: "Guest Room" },
  { name: "Bathroom" },
  { name: "Master Bedroom" },
  { name: "Garage" },
  { name: "Patio" },
];


// ITERATION 2

function selectRandom(array) {
    if(array.length === 0){
        return undefined;
    }

    const randomIndex = Math.floor(Math.random()*array.length);
    return array[randomIndex];
}

function pickMystery() {
    return {
        suspect : selectRandom(suspectsArray),
        weapon : selectRandom (weaponsArray),
        room: selectRandom (roomsArray)
    };


}


// ITERATION 3

function revealMystery(reveal) {
  const { suspect, weapon, room } = reveal;
  const { firstName, lastName } = suspect;
  return `${firstName} ${lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}

