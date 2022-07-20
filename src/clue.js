function suspectsObject(firstName, lastName, occupation, age, description, image, color) {
  this.firstName = firstName
  this.lastName = lastName
  this.occupation = occupation
  this.age = age
  this.description = description
  this.image = image
  this.color = color
}

function weaponsObject(name, weight){
  this.name = name
  this.weight = weight
}

function roomsObject(name){
  this.name = name;
}

const suspect1 = new suspectsObject("Amanda", "Hoffmann", "Developer", 20, "Short hair and tall woman", "lorem ipsum dolor sit amet", "black")
const suspect2 = new suspectsObject("Lais", "Andrea", "Design", 25, "Red hair and very tall woman", "lorem ipsum dolor sit amet", "green")
const suspect3 = new suspectsObject("Ian", "Caua", "Engineer", 27, "Black hair and small man", "lorem ipsum dolor sit amet", "red")
const suspect4 = new suspectsObject("Daniel", "Duarte", "Teacher", 30, "Long hair and wears a black shirt", "lorem ipsum dolor sit amet", "blue")
const suspect5 = new suspectsObject("Cintia", "Fernanda", "Doctor", 32, "Black hair and small woman", "lorem ipsum dolor sit amet", "orange")
const suspect6 = new suspectsObject("Aline", "Cristina", "Lawyer", 27, "LOng hair and small woman", "lorem ipsum dolor sit amet", "white")

const room1 = new roomsObject('Dining Room')
const room2 = new roomsObject('Conservatory')
const room3 = new roomsObject('Kitchen')
const room4 = new roomsObject('Study')
const room5 = new roomsObject('Library')
const room6 = new roomsObject('Billiard Room')
const room7 = new roomsObject('Lounge')
const room8 = new roomsObject('Ballroom')
const room9 = new roomsObject('Hall')
const room10 = new roomsObject('Spa')
const room11 = new roomsObject('Living Room')
const room12 = new roomsObject('Observatory')
const room13 = new roomsObject('Theater')
const room14 = new roomsObject('Guest House')
const room15 = new roomsObject('Patio')

const weapon1 = new weaponsObject("Big Berta", 800)
const weapon2 = new weaponsObject("Paris Gun", 500)
const weapon3 = new weaponsObject("German 88", 750)
const weapon4 = new weaponsObject("Mortar",    400)
const weapon5 = new weaponsObject("Coastal",   450)
const weapon6 = new weaponsObject("Maxim Gun", 450)
const weapon7 = new weaponsObject("AK-47",     800)
const weapon8 = new weaponsObject("Pistol",    400)
const weapon9 = new weaponsObject("M2 Hyde",   500)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ITERATION 1

// Suspects Array

const suspectsArray = [{...suspect1}, {...suspect2}, {...suspect3}, {...suspect4}, {...suspect5}, {...suspect6}]

// Rooms Array

const roomsArray = [{...room1}, {...room2}, {...room3}, {...room4}, {...room5}, {...room6}, {...room7}, {...room8}, {...room9}, {...room10}, {...room11}, {...room12}, {...room13}, {...room14}, {...room15}]

// Weapons Array

const weaponsArray = [{...weapon1}, {...weapon2}, {...weapon3}, {...weapon4}, {...weapon5}, {...weapon6}, {...weapon7}, {...weapon8}, {...weapon9}]

// ITERATION 2

function selectRandom(array) {
  if (array.length !== 0){
    let index = Math.floor(Math.random() * array.length)
    return array[index]
  }
  return undefined
}

function pickMystery() {
  const suspect = selectRandom(suspectsArray)
  const weapon= selectRandom(weaponsArray)
  const room = selectRandom(roomsArray)
  const mistery = {suspect: {...suspect}, weapon: {...weapon}, room: {...room}}

  //console.log(mistery)
  //console.log(roomsArray.includes(mistery.room))
  //console.log(roomsArray)
  //console.log(mistery.room)

  return mistery
}

// ITERATION 3

function revealMystery(envelope) {
  const {suspect, weapon, room} = envelope
  let message = `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed Mr. Boddy using the ${envelope.weapon.name} in the ${envelope.room.name}!`

  return message
  
}

