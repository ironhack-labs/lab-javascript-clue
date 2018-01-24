// Characters

var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
    };
    
    var   drOrchid = {
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:       "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
    };
    var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
    };
    
    var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
    };
    var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
    };
    var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
    };
    
    // Characters Collection
    var charactersArray = [mrGreen,drOrchid,profPlum, missScarlet, mrsPeacock,mrMustard];
    
    // Rooms' Collection
    var roomsArray = [{name: "Dinning Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study"},
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge"},
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}];
    
    // Weapons Collection
    var weaponsArray = [{name: "rope", weight: 10},
    {name: "knife", weight: 8},
    {name: "candlestick", weight: 2},
    {name: "dumbbell", weight: 30},
    {name: "poison", weight: 2},
    {name: "axe", weight: 15},
    {name: "bat", weight: 13},
    {name: "trophy", weight: 25},
    {name: "pistol", weight: 20}];
    
    /*Find a random element of the array - randomSelector*/
    //Array = [];
    function randomSelector(Array){
      if (Array === 0){
        return undefined;
      }else{
        var result=Math.floor(Math.random() * Array.length)
        console.log(result);
      return Array[result];
    }
    }
    
    //
    
    
    //console.log(randomSelector(charactersArray));
    
    
    /*Pick a random mistery - pickMistery
    Defines pickMistery
    Return an array
    Return a non empty array
    Return an array with 3 elements
    Return a killer on the first index of the array
    Return a weapon on the second index of the array
    Return a room in the third index of the array*/
    
    function pickMistery(characters, weapons, rooms){
        var misteryEnvelope = [ randomSelector(characters),randomSelector(weapons),randomSelector (rooms)];
      return misteryEnvelope;
    }
    
    console.log(pickMistery(charactersArray,weaponsArray,roomsArray));
    
    /*Reveal the mistery - revealMistery
    Defines revealMistery
    Return an array
    Return <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!*/
    
    function revealMistery(mistery){
     return console.log(mistery[0].first_name+" "+mistery[0].last_name+" killed Mr. Andrei using the "+mistery[1].name+" in the "+mistery[2].name); 
    }
    
    var misteryToSolve = pickMistery(charactersArray,weaponsArray,roomsArray);
    console.log(revealMistery(misteryToSolve));
    
    
    