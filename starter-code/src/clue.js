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
    
    var drOrchid = {
    frst_name:   "Doctor",
    lst_name:    "Orchid",
    color:        "white",
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
    occupation:   "Actor",
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
    
    // Weapons
    var rope = {name: "rope", weight: 10};
    var knife = {name: "knife", weight: 8};
    var candlestick = {name: "candlestick", weight: 2};
    var dumbbell = {name: "dumbbell", weight: 30};
    var poison = {name: "poison", weight: 2};
    var axe = {name: "axe", weight: 15};
    var bat = {name: "bat", weight: 13};
    var trophy = {name: "trophy", weight: 25};
    var pistol = {name: "pistol", weight: 20};
    
    // Rooms
    // name: Dinning Room
    // name: Conservatory
    // name: Kitchen
    // name: Study
    // name: Library
    // name: Billiard Room
    // name: Lounge
    // name: Ballroom
    // name: Hall
    // name: Spa
    // name: Living Room
    // name: Observatory
    // name: Theater
    // name: Guest House
    // name: Patio
    
    // Characters Collection
    var charactersArray = [];
    charactersArray.push(mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock, mrMustard);
    
    // Rooms' Collection
    var roomsArray = ["Dinning Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];
    
    // Weapons Collection
    var weaponsArray = [];
    weaponsArray.push(rope, knife, candlestick, dumbbell, poison, axe, bat, trophy, pistol);
    
    function randomSelector(ranArray) {
        var rand = ranArray[Math.floor(Math.random() * ranArray.lenght)];
        return rand;
    }
    
    function pickMistery(ranCharacter, ranRoom, ranWep) {
        var misteryEnvelope = [];
        
        randomSelector(ranCharacter);
        randomSelector(ranRoom);
        randomSelector(ranWep);
        
        var character = randomSelector(ranCharacter);
        var room = randomSelector(ranRoom);
        var wep = randomSelector(ranWep);
        misteryEnvelope.push(character);
        misteryEnvelope.push(room);
        misteryEnvelope.push(wep);
         
        return misteryEnvelope;
    }