// Characters

var mrGreen = {

    firstName:   'Jacob',
    lastName:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur',
}


var drOrchid = {

    firstName:   'Doctor',
    lastName:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation:   'Scientist',
}

var profPlum = {

    firstName:   'Victor',
    lastName:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer',
}

var missScarlet = {

    firstName:   'Kasandra',
    lastName:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor',
    }

var mrsPeacock = {

    firstName:   'Eleanor',
    lastName:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité',
}

var mrMustard = {
    firstName:   'Jack',
    lastName:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player',
}
var charactersArray = [];
charactersArray.push(mrGreen,drOrchid,profPlum,missScarlet,mrsPeacock,mrMustard)

// Weapons

var ropeW = {name: 'rope', weight: 10}
var KnifeW = {name: 'knife',  weight: 8}
var candleW = {name: 'candlestick',  weight: 2}
var dumbbellW = {name: 'dumbbell',   weight: 30}
var poisonW = {name: 'poison',   weight: 2}
var axeW = {name: 'axe ',    weight: 15}
var batW = {name: 'bat',    weight: 13}
var trophyW = {name: 'trophy',    weight: 25}
var pistolW = {name: 'pistol ',   weight: 20}

var weaponsArray = [];
weaponsArray.push(ropeW, KnifeW, candleW, dumbbellW,poisonW,axeW,batW,trophyW,pistolW)


// Rooms

    var dining = {name: 'Dinning Room'}
    var conservatory = {name: 'Conservatory'}
    var kitchen = {name: 'Kitchen'}
    var study = {name: 'Study'}
    var library = {name: 'Library'}
    var billardRoom = {name: 'Billiard Room'}
    var lounge = {name: 'Lounge'}
    var ballRoom = {name: 'Ballroom'}
    var hall = {name: 'Hall'}
    var spa = {name: 'Spa'}
    var livingRoom = {name: 'Living Room'}
    var observatory = {name: 'Observatory'}
    var theater = {name: 'Theater'}
    var guestHome = {name: 'Guest House'}
    var patio = {name: 'Patio'}


var roomsArray = [];
roomsArray.push(dining, conservatory, kitchen, study, library, billardRoom, lounge, ballRoom, hall, spa, livingRoom, observatory, theater, guestHome, patio)

function randomSelector(x)
{
    var randomNum = Math.floor(Math.random() * x.length)
    return x[randomNum]

}

function pickMistery(x, y, z)
{
    var randomNum = Math.floor(Math.random() * x.length)
    return x[randomNum]
    return y[randomNum]
    return z[randomNum]
}

var misteryEnvelope = pickMistery(charactersArray, weaponsArray, roomsArray)

function revealHistory(x)
{
    // <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!
}



