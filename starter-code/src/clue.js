// Characters
let characters = {
    mrGreen: [
    {first_name:   'Jacob'},
    {last_name:    'Green'},
    {color:        'green'},
    {description:  'He has a lot of connections'},
    {age:          45},
    {image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg'},
    {occupation:   'Entrepreneur'}
    ],
    
    drOrchid: [
    {first_name:   'Doctor'},
    {last_name:    'Orchid'},
    {color:        'white'},
    {description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy'},
    {age:          26},
    {image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg'},
    {ocupation:   'Scientist'}
    ],
    
    profPlum: [
    {first_name:   'Victor'},
    {last_name:    'Plum'},
    {color:        'purple'},
    {description:  'Billionare video game designer'},
    {age:          22},
    {image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg'},
    {occupation:   'Designer'}
    ],
    
    missScarlet: [
    {first_name:   'Kasandra'},
    {last_name:    'Scarlet'},
    {color:        'red'},
    {description:  'he is an A-list movie star with a dark past'},
    {age:          31},
    {image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg'},
    {occupation:   'Actor'}
    ],
    
    mrsPeacock: [
    {first_name:   'Eleanor'},
    {last_name:    'Peacock'},
    {color:        'blue'},
    {description:  'She is from a wealthy family and uses her status and money to earn popularity'},
    {age:          36},
    {image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg'},
    {occupation:   'Socialité'}
    ],
    
    mrMustard: [
    {first_name:   'Jack'},
    {last_name:    'Mustard'},
    {color:        'yellow'},
    {description:  'He is a former football player who tries to get by on his former glory'},
    {age:          62},
    {image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg'},
    {occupation:   'Retired Football player'}
    ]
    }
    
// Weapons
let weapons = [
        {name: 'rope', weight: 1},
        {name: 'knife', weight: 8},
        {name: 'candlestick', weight: 2},
        {name: 'dumbbell', weight: 30},
        {name: 'poison', weight: 2},
        {name: 'axe', weight: 15},
        {name: 'bat', weight: 13},
        {name: 'trophy', weight: 25},
        {name: 'pistol', weight: 20}
    ]
    
// Rooms
let rooms = {
      name1: 'Dinning Room',
      name2: 'Conservatory',
      name3: 'Kitchen',
      name4: 'Study',
      name5: 'Library',
      name6: 'Billiard Room',
      name7: 'Lounge',
      name8: 'Ballroom',
      name9: 'Hall',
      name10: 'Spa',
      name11: 'Living Room',
      name12: 'Observatory',
      name13: 'Theater',
      name14: 'Guest House',
      name15: 'Patio'
    }
    
// Characters Collection
    
function pushCharacters(char){
      let charactersArray = [];
      for (i = 0; i > characters.length; i++){
         charactersArray.push(characters[i]);
        }
        return characters;
    }
    
pushCharacters(characters);
console.log(pushCharacters(characters));
    
// Rooms' Collection
    
function pushRooms(rms){
      let roomsArray = [];
      for (i = 0; i > rooms.length; i++){
         roomsArray.push(rooms[i]);
        }
        return rooms;
    }
    
pushRooms(rooms)
console.log(pushRooms(rooms));
    
//  Weapons Collection
    
function pushWeapons(wps){
      let weaponsArray = [];
      for (i = 0; i > weapons.length; i++){
         weaponsArray.push(weapons[i]);
        }
        return weapons;
    }
    
pushWeapons(weapons)
console.log(pushWeapons(weapons));
// random selector
var rand = characters[Math.floor(Math.random() * characters.length)];
// console.log(rand);
var rand2 = weapons[Math.floor(Math.random() * weapons.length)];
// console.log(rand2);
var rand3 = rooms[Math.floor(Math.random() * rooms.length)];
// console.log(rand3);
let randomCell = [rand, rand2, rand3];
// console.log(randomCell)
function randomSelector(arr){
    var randomNum = (Math.floor(Math.random() * arr.length));
    return arr[randomNum];
    }
  
    randomSelector(weapons)
function pickMistery(arr){
 var randomMistery = [];
 var randomRoom = randomSelector(rooms);
return pickMistery(arr);
}