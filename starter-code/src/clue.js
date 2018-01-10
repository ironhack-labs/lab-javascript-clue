var charactersArray = [
    {
      mrGreen: {
        first_Name: "Jacob",
        last_Name: "Green",
        color: "Green",
        description: "He has connections",
        age: 45,
        image:
          "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        ocupation: "Entrepreneur"
      }
    },
    {
      drOrchid: {
        first_Name: "Doctor",
        last_Name: "Orchid",
        Color: "white",
        description: "PhD in plant toxicology. Adopted dougther of Mr. Boddy",
        age: 26,
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation: "Scientist"
      }
    },
    {
      profPlum: {
        first_Name: "Victor",
        last_Name: "Plum",
        Color: "purple",
        description: "Billionare video game designer",
        age: 22,
        image: " https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        ocupation: "Designer"
      }
    },
  
    {
      missScarlet: {
        first_Name: "Kasandra",
        last_Name: "Scarlet",
        Color: "red",
        description: "she is an a-List ,pvoe star with a dark path",
        age: 31,
        image: " https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        ocupation: "Actor"
      }
    },
    {
      mrsPeacock: {
        first_Name: "Eleanor",
        last_Name: "Peacock",
        Color: "blue",
        description:
          "she is from a wealthy family and uses her status and money to earn poplarity",
        age: 36,
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        ocupation: "Socialite"
      }
    },
    {
      mrMustard: {
        first_Name: "Jack",
        last_Name: "Mustard",
        Color: "yellow",
        description:
          "he is a former fotball player who tries o get by on his former glory",
        age: 62,
        image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        ocupation: "Retired fotball player"
      }
    }
  ];
  
  
  var roomsArray = [
   
    { name:'Dinning_Room'},
    { name:'Conservatory'},
    { name:'Kitchen'},
    { name:'Study'},
    { name:'Library'},
    { name:'Billiard_Room'},
    { name:'Loung'},
    { name:'Ballroom'},
    { name:'Hall'},
    { name:'Spa'},
    { name:'Living_Room'},
    { name:'Observatory'},
    { name:'Theater'},
    { name:'Guest_House'},
    { name:'Patio'}
  ];
  
  var weaponsArray = [
    
    { name : 'rope' },
    { name : 'knife' },
    { name: 'candlestick' },
    { name: 'dumbbell' },
    { name: 'poison' },
    { name: 'axe '},
    { name: 'bat'},
    { name: 'rophy'},
    { name: 'pistol'}
  ];
  
  
  function randomSelector(array) {
    if (array.length === 0) {
      return undefined;
    }
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function pickMistery() {
  
    var nombre = randomSelector(charactersArray);
    var arma = randomSelector(weaponsArray);
    var habitacion = randomSelector(roomsArray)
    var first_n = Object.values(nombre)[0].first_Name;
    var last_n = Object.values(nombre)[0].last_Name;
    var weapon = Object.values(arma)[0];
    var room = Object.values(habitacion)[0];
    console.log(first_n, last_n,weapon,room);
    return [{first_name : first_n,},{name : weapon},{name : room}];
  }
  
  
  var result = pickMistery();
  
  
  function revealMistery(result) {
      
  }
