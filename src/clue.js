// ITERATION 1

// Suspects Array

const suspectsArray = [{
    firstName:'Jacob',
    lastName:'Green',
    occupation:'Entrepreneur',
    age: 45,
    description:'He has a lot of connections',
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green',
  },
  {
    firstName:'Doctor',
    lastName:'Orchid',
    occupation:'Scientist',
    age: 300080,
    description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white',
  },
    {
    firstName:'Victor',
    lastName:'Plum',
    occupation:'Designer',
    age:37,
    description:'Billionaire video game designer',
    image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
    color: 'purple',
  },
      {
    firstName:'Kasandra',
    lastName:'Scarlet',
    occupation:'Actor',
    age:14,
    description:'She is an A-list movie star with a dark past',
    image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'red',
  },
        {
    firstName:'Eleanor',
    lastName:'Peacock',
    occupation:'Socialité',
    age:31,
    description:'She is from a wealthy family and uses her status and money to earn popularity',
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    color: 'blue',
  },
  {
    firstName:'Jack',
    lastName:'Mustard',
    occupation:'Retired Football player',
    age:42,
    description:'He is a former football player who tries to get by on his former glory',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
    color: 'yellow',
  }];

// Rooms Array

const roomsArray = [
    {
        name:'Dining Room',
    },
    {
        name:'Conservatory',
    },
    {
        name:'Kitchen',
    } ,
    {
        name:'Study',
    } ,
    {
        name:'Library',
    } ,
    {
        name:'Billiard Room',
    } ,
    {
        name:'Lounge',
    } ,
    {
        name:'Ballroom',
    } ,
    {
        name:'Hall',
    } ,
    {
        name:'Spa',
    } ,
    {
        name:'Living Room',
    } ,
    {
        name:'Observatory',
    } ,
    {
        name:'Theater',
    } ,
    {
        name:'Guest House',
    } ,
    {
        name:'Patio',
    }     
];

// Weapons Array

const weaponsArray = [
    {
        name:'pistol',
        weight:15,
    },
    {
        name:'trophy',
        weight:5,
    },
    {
        name:'bat',
        weight:3,
    },
    {
        name:'axe',
        weight:6,
    },
    {
        name:'poison',
        weight:40,
    },
    {
        name:'dumbbell',
        weight:10,
    },
    {
        name:'candlestick',
        weight:1,
    },
    {
        name:'knife',
        weight:3,
    },
    {
        name:'rope',
        weight:12,
    }
];


// ITERATION 2

function selectRandom(items) {{

    let item = items[Math.floor(Math.random()*items.length)]
    return item
   }}

function pickMystery() {
    let objeto = {}
      let sospechoso = selectRandom(suspectsArray)
      let habitacion = selectRandom(roomsArray)
      let arma = selectRandom(weaponsArray)
      objeto.suspect = sospechoso
      objeto.room = habitacion
      objeto.weapon = arma
      
      return objeto
    }


// ITERATION 3

function revealMystery(info) {
  
    return (`${info.suspect.firstName} ${info.suspect.lastName} killed Mr. Boddy using the ${info.weapon.name} in the ${info.room.name}!`)
   }
