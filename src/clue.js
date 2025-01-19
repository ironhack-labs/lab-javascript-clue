
const suspectsArray = [
    {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: 'He has a lot of connections and is always willing to help people out -- for a price.',
      image: 'https://example.com/jacob_green.png',
      color: 'green',
    },
    {
      firstName: 'Doctor',
      lastName: 'Orchid',
      occupation: 'Scientist',
      age: 26,
      description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy.',
      image: 'https://example.com/doctor_orchid.png',
      color: 'white',
    },
    {
      firstName: 'Victor',
      lastName: 'Plum',
      occupation: 'Designer',
      age: 22,
      description: 'Billionaire video game designer.',
      image: 'https://example.com/victor_plum.png',
      color: 'purple',
    },
    {
      firstName: 'Kasandra',
      lastName: 'Scarlet',
      occupation: 'Actor',
      age: 31,
      description: 'She is an A-list movie star with a dark past.',
      image: 'https://example.com/kasandra_scarlet.png',
      color: 'red',
    },
    {
      firstName: 'Eleanor',
      lastName: 'Peacock',
      occupation: 'Socialite',
      age: 36,
      description: 'She is from a wealthy family and uses her status and money to earn popularity.',
      image: 'https://example.com/eleanor_peacock.png',
      color: 'blue',
    },
    {
      firstName: 'Jack',
      lastName: 'Mustard',
      occupation: 'Retired Football player',
      age: 62,
      description: 'He is a former football player who tries to get by on his former glory.',
      image: 'https://example.com/jack_mustard.png',
      color: 'yellow',
    },
  ];
  

  const weaponsArray = [
    { name: 'rope', weight: 10 },
    { name: 'knife', weight: 8 },
    { name: 'candlestick', weight: 2 },
    { name: 'dumbbell', weight: 30 },
    { name: 'poison', weight: 2 },
    { name: 'axe', weight: 15 },
    { name: 'bat', weight: 13 },
    { name: 'trophy', weight: 25 },
    { name: 'pistol', weight: 20 },
  ];
  

  const roomsArray = [
    { name: 'Dining Room' },
    { name: 'Conservatory' },
    { name: 'Kitchen' },
    { name: 'Study' },
    { name: 'Library' },
    { name: 'Billiard Room' },
    { name: 'Lounge' },
    { name: 'Ballroom' },
    { name: 'Hall' },
    { name: 'Spa' },
    { name: 'Living Room' },
    { name: 'Observatory' },
    { name: 'Theater' },
    { name: 'Guest House' },
    { name: 'Patio' },
  ];
  

  function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
 
  function pickMystery() {
    return {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray),
    };
  }
  

  function revealMystery(envelope) {
    const { suspect, weapon, room } = envelope;
    return `${suspect.firstName} ${suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${room.name}!`;
  }
  

  