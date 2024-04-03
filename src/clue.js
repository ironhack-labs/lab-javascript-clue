// ITERATION 1

// Suspects Array

const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image:
      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white",
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image:
      "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple",
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "She is an A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red",
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialite",
    age: 36,
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue",
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description:
      "SHe is a former football player who tries to get by on his former glory",
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow",
  },
];

const weaponsArray = [
  { name: "Knife", weight: 1 },
  { name: "Gun", weight: 3 },
  { name: "Sword", weight: 4 },
  { name: "Bow", weight: 2 },
  { name: "Axe", weight: 5 },
  { name: "Hammer", weight: 4 },
  { name: "Dagger", weight: 1 },
  { name: "Crossbow", weight: 3 },
  { name: "Club", weight: 3 },
];

const roomsArray = [
  { name: "Living Room" },
  { name: "Kitchen" },
  { name: "Bedroom" },
  { name: "Bathroom" },
  { name: "Study" },
  { name: "Dining Room" },
  { name: "Guest Room" },
  { name: "Laundry Room" },
  { name: "Home Office" },
  { name: "Playroom" },
  { name: "Garage" },
  { name: "Attic" },
  { name: "Basement" },
  { name: "Patio" },
  { name: "Balcony" },
];

// ITERATION 2

function selectRandom(array) {
  randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function pickMystery() {
  const obj = {
    suspect: selectRandom(suspectsArray),
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray),
  };
  return obj;
}

// ITERATION 3

function revealMystery(obj) {
  return `${obj.suspect.firstName} ${obj.suspect.lastName} killed Mr. Boddy using the ${obj.weapon.name} in the ${obj.room.name}!`;
}

console.log(revealMystery(pickMystery()));
