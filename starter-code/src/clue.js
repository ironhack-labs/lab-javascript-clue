// Characters Collection
var charactersArray = [
    mrGreen={
        first_name:'Jacob',
        last_name:'Green',
        color:'green',
        description:'He has a lot of connections',
        age:45,
        image:'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        occupation:'Entrepreneur'
    },
    drOrchid={
        first_name:'Doctor',
        last_name:'Orchid',
        color:'white',
        description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        age:26,
        image:'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        occupation:'Scientist'   
    },
    profPlum={
        first_name:'Victor',
        last_name:'Plum',
        color:'purple',
        description:'Billionare video game designer',
        age:22,
        image:'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
        occupation:'Designer'
    },
    missScarlet={
        first_name:'Kasandra',
        last_name:'Scarlet',
        color:'red',
        description:'She is an A-list movie star with a dark past',
        age:31,
        image:'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
        occupation:'Actor'
    },
    mrsPeacock={
        first_name:'Eleanor',
        last_name:'Peacock',
        color:'blue',
        description:'She is from a wealthy family and uses her status and money to earn popularity',
        age:36,
        image:'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        occupation:'Socialité'
    },
    mrsMustard={
        first_name:'Jack',
        last_name:'Mustard',
        color:'yellow',
        description:'He is a former football player who tries to get by on his former glory',
        age:62,
        image:'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
        occupation:'Retired Football player'
    }
];

// Weapons Collection
var weaponsArray = [
    rope={
        name: 'rope',
        weight: 10
    },
    knife={
        name: 'knife',
        weight: 8
    },
    candlestick={
      name: 'candlestick',
      weight: 2
    },
    dumbbell={
        name: 'dumbbell',
        weight: 30
    },
    poison={
        name: 'poison',
        weight: 2
    },
    axe={
        name: 'axe',
        weight: 15
    },
    bat={
        name: 'bat',
        eight: 13
    },
    trophy={
        name: 'trophy',
        weight: 25
    },
    pistol={
        name: 'pistol',
        weight: 20
    }
];


// Rooms' Collection
var roomsArray = [
    dinning={
        name: 'Dinning Room'
    },
    conservatory={
        name: 'Conservatory'
    },
    kitchen={
        name: 'Kitchen'
    },
    study={
        name: 'Study'
    },
    library={
        name: 'Library'
    },
    billiard={
        name: 'Billiard Room'
    },
    lounge={
        name: 'Lounge'
    },
    ballroom={
        name: 'Ballroom'
    },
    hall={
        name: 'Hall'
    },
    spa={
        name: 'Spa'
    },
    living={
        name: 'Living Room'
    },
    observatory={
        name: 'Observatory'
    },
    theater={
        name: 'Theater'
    },
    guestHouse={
        name: 'Guest House'
    },
    patio={
        name: 'Patio'
    }
];

function randomSelector(array){
    var numCharacteres = array.length;
    var numero=Math.floor(Math.random()*numCharacteres);
    return numero;
}

var charac = randomSelector(charactersArray);

console.log(
  charactersArray[charac].first_name + ' ' + charactersArray[charac].last_name + ' ' +
  'killed Mr. Body using the ' + weaponsArray[randomSelector(weaponsArray)].name + ' in the ' + roomsArray[randomSelector(roomsArray)].name
)