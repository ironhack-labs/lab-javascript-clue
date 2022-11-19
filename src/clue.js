// ITERATION 1

const suspectsArray = [
    {
        firstName: 'Jacob',
        lastName: 'Green',
        Occupation: 'Entrepreneur',
        Age: 45,
        Description: 'He has a lot of connections',
        Image: src ='https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        Color: 'green'
    },
    {
        firstName: 'Doctor',
        lastName:  'Orchid',
        Occupation: 'Scientist',
        Age:26,
        Description: 'PhD in plan toxicology. Adopted daughter of MediaRecorder. Boddy',
        Image: src = 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        Color: 'white'
    },
    {
        firstName: 'Victor',
        lastName:'Plum',
        Occupation: 'Designer',
        Age: 22,
        Description: 'Billionaire video game designer',
        Image: src = 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        Color: 'purple'
    },
    {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        Occupation:'Actor',
        Age: 31,
        Description: 'She is an A-list movie star with dark past',
        Image: src = 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        Color: 'red'
    },
    {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        Occupation: 'Socialité',
        Age: 36,
        Description: 'She is from a wealthy family and uses her status and money to earn popularity',
        Image: src = 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        Color: 'blue'
    },
    {
        firstName: 'Jack',
        lastName: 'Mustard',
        Occupation:'Retired football player',
        Age: 62,
        Description: 'He is a former football player who tries to get by on his former glory',
        Image: src = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        Color: 'yellow'
    }
];

const roomsArray = [
    {
        Name: 'Dining room'
    },
    {
        Name: 'Conservatory'
    },
    {
        Name: 'Kitchen'
    },
    {
        Name: 'Study'
    },
    {
        Name: 'Library'
    },
    {
        Name: 'Billiard Room'
    },
    {
        Name: 'Lounge'
    },
    {
        Name: 'Ballroom'
    },
    {
        Name: 'Hall'
    },
    {
        Name: 'Spa'
    },
    {
        Name: 'Living room'
    },
    {
        Name: 'Observatory'
    },
    {
        Name: 'Theater'
    },
    {
        Name: 'guest house'
    },
    {
        Name: 'patio'
    }
];


const weaponsArray = [
    {
        Name: 'rope',
        Weight: 10
    },
    {
        Name: 'knife',
        Weight: 8
    },
    {
        Name: 'candlestick',
        Weight:2
    },
    {
        Name: 'dumbbell',
        Weight: 30
    },
    {
        Name: 'poison',
        Weight: 2
    },
    {
        Name: 'axe',
        Weight: 15
    },
    {
        Name: 'bat',
        Weight: 13
    },
    {
        Name: 'trophy',
        Weight: 25
    },
    {
        Name: 'pistol',
        Weight: 20
    }
];


// ITERATION 2

function selectRandom(someArray) {
    let randomElement = someArray[Math.floor(Math.random())];
     let value = Object.values(randomElement);
    return value
    
  }
  
  selectRandom(roomsArray);
  
  function pickMystery() {
    let result = {
      suspect: selectRandom(suspectsArray),
      weapon: selectRandom(weaponsArray),
      room: selectRandom(roomsArray)
    };
    return result
  }
   pickMystery();
  
  // ITERATION 3
  
  function revealMystery(pickMystery) {
    let FinalObjects = pickMystery();
     return `${FinalObjects[0]} ${FinalObjects[1]} killed Mr.Boddy using the ${FinalObjects[2]} in the ${FinalObjects[3]}`
   }
 
 revealMystery(pickMystery)