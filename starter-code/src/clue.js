let Characters = [

    {
    full_name:   "Jacob Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur"
    },
    
    {
    full_name:   "Doctor Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"
    },
    
    {
    full_name:  "Victor Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"
    },
    
    {
    full_name:  "Kasandra Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"
    },
     {
    full_name:   "Eleanor Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"
    },
     {
    full_name:   "Jack Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"
    }
    ]
    
    
    let Weapons = [
    {name: "rope",  
     weight: 10},
    {name: "knife", 
    weight: 8},
    {name: "candlestick",   
    weight: 2},
    {name: "dumbbell",
    weight: 30},
    {name: "poison",
    weight: 2},
    {name: "axe",
    weight: 15},
    {name: "bat", 
    weight: 13},
    {name: "trophy", 
    weight: 25},
    {name: "pistol", 
    weight: 20}
    ]
    
    let Rooms = [
    {name: "Dinning Room"},
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
    {name: "Patio"}
    ]
    
    // Characters Collection
    var charactersArray = [];
    charactersArray.push(Characters);
    
    // Rooms' Collection
    var roomsArray = [];
     roomsArray.push(Rooms);
    
    // Weapons Collection
    var weaponsArray = [];
        weaponsArray.push(Weapons);
    
        // Creating the randomSelector method
        function randomSelector(array){
            switch(array) {
                case charactersArray:
                  return charactersArray[0][Math.floor((Math.random() * 5))].full_name;
                  break;
                case roomsArray:
                  return roomsArray[0][Math.floor((Math.random() * 14))].name;
                  break;
                case weaponsArray:
                   return weaponsArray[0][Math.floor((Math.random() * 8))].name;
                default:
                  console.log("Please, enter an appropriate array.")
              }
        }
    
        // Creating the pickMistery method
        function pickMistery(){
           let a = randomSelector(charactersArray);
           let b = randomSelector(weaponsArray);
           let c = randomSelector(roomsArray);
           let arr = [a, b, c];
           return arr;
        }
    
        let misteryEnvelope = pickMistery();
    
        // Creating the revealMistery method
        function revealMistery(misteryEnvelope){
        console.log(`${misteryEnvelope[0]} killed Mr. Boddy using the ${misteryEnvelope[1]} in the ${misteryEnvelope[2]}`);
        }
     console.log(revealMistery(misteryEnvelope));