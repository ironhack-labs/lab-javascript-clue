/*
---- Characters ----

  Mr Green
  first name: Jacob
  last name:  Green
  color: green
  description: He has a lot of connections
  age: 45
  image: https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
  occupation: Entrepreneur

  Dr Orchid
  first name: Doctor
  last name: Orchid
  color: white
  description: PhD in plant toxicology. Adopted daughter of Mr. Boddy
  age: 26
  image: http://www.radiotimes.com/uploads/images/Original/111967.jpg
  occupation: Scientist

  Prof Plum
  first name: Victor
  last name: Plum
  color: purple
  description: Billionare video game designer
  age: 22
  image: https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
  occupation: Designer

  Miss Scarlet
  first name: Kasandra
  last name: Scarlet
  color: red
  description: She is an A-list movie star with a dark past,
  age: 31,
  image: https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg,
  occupation: Actor

 Mrs Peacock
  first name: Eleanor
  last name: Peacock
  color: blue
  description: She is from a wealthy family and uses her status and money to earn popularity
  age: 36
  image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
  occupation: Socialité

 Mr Mustard
  first name: Jack
  last name: Mustard
  color: yellow
  description: He is a former football player who tries to get by on his former glory
  age: 62
  image: https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
  occupation: Retired Football player

---- Weapons ----

Rope - Weight: 10
Knife - Weight: 8
Candlestick - Weight: 2
Dumbbell - Weight: 30
Poison - Weight: 2
Axe - Weight: 15
Bat - Weight: 13
Trophy - Weight: 25
Pistol - Weight: 20


---- Rooms ----
Dinning Room
Conservatory
Kitchen
Study
Library
Billiard Room
Lounge
Ballroom
Hall
Spa
Living Room
Observatory
Theater
Guest House
Patio

*/

// PERSONAS / CHARACTER

let character ={
  character: [{
    name: 'mrGreen',
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'Green',
    description: 'He has a lot of connections',
    age: 45,
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation: 'Entrepreneur'
  },
  {
    name: 'drOrchid',
    firstName: 'Doctor',
    lastName: 'Orchid',
    color: 'white',
    description: 'Phd in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image:"http://www.radiotimes.com/uploads/images/Original/111967.jpg" ,
    occupation: 'Scientist'
  },
  {
    name: 'profPlum',
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'Billionare videogame designer',
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: 'Designer'
  },
  {
    name: 'profPlum',
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'Billionare videogame designer',
    age: 22,
    image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation: 'Designer'
  },
  {
    name: 'msScarlett',
    firstName: 'Kassandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie start with a dark past',
    age: 31,
    image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation: 'Actor'
  },
  {
    name: 'mrsPeacock',
    firstName: 'Eleanor',
    lastName: 'Peacock',
    color: 'Blue',
    description: 'She is from a wealthy family and user her status and money to earn popularity',
    age: 36,
    image:  "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation: 'Socialite'
  },
  {
    name: 'mrMustard',
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'He is a former fotball player who tries to get by on his former glory',
    age: 62,
    image:  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg" ,
    occupation: 'Socialite'
  },
]
}

//Armas

let weapons = {weapon:[
{
  name: 'rope',
  weight: 10
},
{
  name : 'knife',
  weight: 8
},
{
  name: 'candlestick',
  weight: 2
},
{
  name: 'dumbbell',
  weight: 30
},
{
  name: 'poison',
  weight: 2
},
{
  name: 'axe',
  weight: 15
},
{
  name: 'bat',
  weight: 13
},
{
  name: 'trophy',
  weight: 25
},
{
  name: 'pistol',
  weight: 20
}

]}

// Cuartos

let Rooms = [
  'Dinnig Room',
  'Conservatory',
  'Kitchen',
  'Study',
  'Library',
  'Billiard Room',
  'Lounge',
  'Ballroom',
  'Hall',
  'Spa',
  'Living Room',
  'Observatory',
  'Theater',
  'Ghest House',
  'Patio'
]

function random_selector(array){
  let randomNumber = parseInt(Math.random() * array.length)
  let card = array[randomNumber]
  return card
}

function pick_mistery(){
  let mistery = []
  mistery.push(random_selector(character.character))
  mistery.push(random_selector(weapons.weapon))
  mistery.push(random_selector(rooms))
  return mistery
}

function reveal_mistery(mistery){

}

//console.log(pick_mistery())

let mistery_envelope = pick_mistery()
reveal_mistery(mistery_envelope)

console.log(pick_mistery)


