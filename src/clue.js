
// ITERATION 1

// Suspects Array

const suspectsArray = [];

  const mrGreen = {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    image:
      'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green'
  };
  
  const drOrchid = {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white'
  };
  
  const profPlum = {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer',
    image:
      'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple'
  };
  
  const missScarlet = {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actor',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    image:
      'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red'
  };
  
  const mrsPeacock = {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue'
  };
  
  const mrMustard = {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player',
    age: 62,
    description: 'He is a former football player who tries to get by on his former glory',
    image:
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow'
  };
  
  suspectsArray.push(drOrchid);
  suspectsArray.push(profPlum);
  suspectsArray.push(mrGreen);
  suspectsArray.push(missScarlet);
  suspectsArray.push(mrsPeacock);
  suspectsArray.push(mrMustard);
  const room1 = { name: 'Dining Room' };
  const room2 = { name: 'Conservatory' };
  const room3 = { name: 'Kitchen' };
  const room4 = { name: 'Study' };
  const room5 = { name: 'Library' };
  const room6 = { name: 'Billiard Room' };
  const room7 = { name: 'Lounge' };
  const room8 = { name: 'Ballroom' };
  const room9 = { name: 'Hall' };
  const room10 = { name: 'Spa' };
  const room11 = { name: 'Living Room' };
  const room12 = { name: 'Observatory' };
  const room13 = { name: 'Theater' };
  const room14 = { name: 'Guest House' };
  const room15 = { name: 'Patio' };
  
  // Rooms Array
  const roomsArray = [
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
    room7,
    room8,
    room9,
    room10,
    room11,
    room12,
    room13,
    room14,
    room15
  ];
  
  
  /* ********************************************* */
  
  // Weapons Array
  
  const weaponsArray = [
    { name: 'rope', weight: 10 },
    { name: 'knife', weight: 8 },
    { name: 'candlestick', weight: 2 },
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'axe', weight: 15 },
    { name: 'bat', weight: 13 },
    { name: 'trophy', weight: 25 },
    { name: 'pistol', weight: 20 }
  ];

// ITERATION 2

function selectRandom(Array) {
  const randomIndex = math.floor(math.random()* Array.length)
  return Array[randomIndex]
}

function pickMystery() {
  const suspect = selectRandom(suspectsArray);
  const weapon = selectRandom(weaponsArray);
  const room = selectRandom(roomsArray);

  return {
    suspect,
    weapon,
    room
  };
}


// ITERATION 3

function revealMystery(mystery) {
  const { suspect, weapon, room } = mystery;
  return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
}

const mystery = pickMystery();
const solution = revealMystery(mystery);
console.log(solution);



function loadSuspects(data) {
    let plainSuspectArray = data.split("\n\n");
    plainSuspectArray.forEach((suspect) => {
      suspectLines = suspect.split("\n");
      let suspectObj = {};
      suspectObj.shortName = suspectLines[0];
      for (let i = 1; i < suspectLines.length; i++) {
        suspectObj[suspectLines[i].split(": ")[0]] =
          suspectLines[i].split(": ")[1];
      }
      suspectsArray.push(suspectObj);
    });
  }

  
  