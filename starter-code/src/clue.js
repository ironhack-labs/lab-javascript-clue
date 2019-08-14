let mrGreen= {
	first_name: 'Jacob',
	last_name: 'Green',
	color: 'green',
	description: 'He has a lot of connections',
	age: 45,
	image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
	occupation: 'Entrepreneur'
}
let drOrchid = {
	first_name: 'Doctor',
	last_name: 'Orchid',
	color: 'white',
	description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
	age: 26,
	image: ' http://www.radiotimes.com/uploads/images/Original/111967.jpg',
	ocupation: 'Scientist'
}
let profPlum = {
	first_name: 'Victor',
	last_name: 'Plum',
	color: 'purple',
	description: 'Billionare video game designer',
	age: 22,
	image: 'https: //metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
	occupation: 'Designer'
}
let missScarlet = {
	first_name: 'Kasandra',
	last_name: 'Scarlet',
	color: 'red',
	description: 'She is an A - list movie star with a dark past',
	age: 31,
	image: 'https: //metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
	occupation: 'Actor'
}
let mrsPeacock = {
	first_name: 'Eleanor',
	last_name: 'Peacock',
	color: 'blue',
	description: 'She is from a wealthy family and uses her status and money to earn popularity',
	age: 36,
	image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
	occupation: 'Socialité'
}
let mrMustard = {
	alias: 'mrMustard',
	first_name: 'Jack',
	last_name: 'Mustard',
	color: 'yellow',
	description: 'He is a former football player who tries to get by on his former glory',
	age: 62,
	image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
	occupation: 'Retired Football player'
}
let charactersArray = [mrGreen,drOrchid,profPlum, missScarlet,mrsPeacock,mrMustard]

// Weapons
let weaponsArray = [
{
name: 'rope',
weight: 10
},

{
name: 'knife',
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
	weight: 2},
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
}]

// Rooms

let roomsArray = [
'Dinning Room',
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
'Guest House',
'Patio',
]

randomSelector(roomsArray);

function randomSelector(elements) {
return elements[Math.floor(Math.random() * elements.length)]
}

const pickMistery = (stack1, stack2, stack3) => {
let misteryEnvelope = []
misteryEnvelope.push(randomSelector(stack1))
misteryEnvelope.push(randomSelector(stack2))
misteryEnvelope.push(randomSelector(stack3))

return misteryEnvelope
}

pickMistery(roomsArray, charactersArray, weaponsArray)

const revealMistery = (misteryEnvelope) => {
 let murder = pickMistery(charactersArray, roomsArray, weaponsArray)
 let fname =  murder[0].first_name
 let lname =  murder[0].last_name
 let weapon = murder[2].name
 let place = murder[1]

 let solved = `${fname} ${lname} killed Mr.Boddy using the ${weapon} in the ${place}!!!!`


  return solved
}

revealMistery()