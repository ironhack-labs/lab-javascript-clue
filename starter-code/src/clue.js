// Characters

const mrGreen = {
  first_name:   'Jacob',
  last_name:    'Green',
  color:        'green',
  description:  'He has a lot of connections',
  age:          45,
  image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
  occupation:   'Entrepreneur'
  }
  
  const drOrchid = {
  first_name:   'Doctor',
  last_name:    'Orchid',
  color:        'white',
  description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
  age:          26,
  image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
  ocupation:   'Scientist',
  }
  
  const profPlum = {
  first_name:   'Victor',
  last_name:    'Plum',
  color:        'purple',
  description:  'Billionare video game',
  age:          22,
  image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
  occupation:   'Designer',
  }
  
  const missScarlet = {
  first_name:   'Kasandra',
  last_name:    'Scarlet',
  color:        'red',
  description:  'She is an A-list movie star with a dark past',
  age:          31,
  image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
  occupation:   'Actor',
  }
  
  const mrsPeacock = {
  first_name:   'Eleanor',
  last_name:    'Peacock',
  color:        'blue',
  description:  'She is from a wealthy family and uses her status and money to earn popularity',
  age:          36,
  image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
  occupation:   'Socialité',
  }
  
  const mrMustard = {
  first_name:   'Jack',
  last_name:    'Mustard',
  color:        'yellow',
  description:  'He is a former football player who tries to get by on his former glory',
  age:          62,
  image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
  occupation:   'Retired Football player',
  }
  
  // Weapons
  
  const rope = {
    weight: 10
  }
  
  const knife = {
    weight: 8
  }    
  const candlestick = {
    weight: 2
  }   
  const dumbbell = {
    weight: 30
  }
  
  const poison = {
    weight: 2
  }
  
  const axe = {
    weight: 15
  }
  
  const bat = {
    weight: 13
  }
  
  const trophy = {
    weight: 25
  }
  
  const pistol = {
    weight: 20
  }
  
  // Rooms
  
  
  // Characters Collection
  const charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard];
  
  // Rooms' Collection
  const roomsArray = ['Dinning Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theatre', 'Guest House', 'Patio'];
  
  // Weapons Collection
  const weaponsArray = [rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol];

  let myCards =  []
  let myCharacter
  let myRoom
  let myWeapon
  
  function shuffleCharac (charactersArray) {
    let shuffleNum = Math.floor(Math.random() * (charactersArray.length - 0)) + 0
    let myCharacter = charactersArray[shuffleNum]
    return myCharacter
  }
  
  function shuffleRoom (roomsArray) {
    let shuffleNum = Math.floor(Math.random() * (roomsArray.length - 0)) + 0
    let myRoom = roomsArray[shuffleNum]
    return myRoom
  }
  
  function shuffleWeapon (weaponsArray) {
    let shuffleNum = Math.floor(Math.random() * (weaponsArray.length - 0)) + 0
    let myWeapon = weaponsArray[shuffleNum]
    return myWeapon
  }
  
  function shuffle (cards1, cards2, cards3) {
   console.log(shuffleCharac (charactersArray))
   console.log(shuffleRoom (roomsArray))
   console.log(shuffleWeapon (weaponsArray))
   // también he probado lo siguiente, pero está por terminar
   //return `Your card character is ${shuffleCharac (charactersArray)}, your card weapon is ${shuffleRoom (roomsArray)} and your card room is ${shuffleWeapon (weaponsArray)}` 
  }
  
  console.log(shuffle (shuffleCharac, shuffleRoom, shuffleWeapon))

  