// Characters

var mrGreen = {
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur" }
    
    var drOrchid = {
    frst_name:   "Doctor",
    lst_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist"}
    
     var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer"}
    
    var missScarlet = {
    first_name:   "Kasandra",
    last_name:    "Scarlet",
    color:        "red",
    description:  "She is an A-list movie star with a dark past",
    age:          31,
    image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
    occupation:   "Actor"}
    
     var mrsPeacock = {
    first_name:   "Eleanor",
    last_name:    "Peacock",
    color:        "blue",
    description:  "She is from a wealthy family and uses her status and money to earn popularity",
    age:          36,
    image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    occupation:   "Socialité"}
    
    var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          "62",
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player"}
    
    // Weapons
    
    var rope = {name: "rope", weight: 10};
    var knife = {name:"knife",weight: 8};
    var candlestick = {name:"candlestick", weight: 2};
    var dumbbell= {name:"dumbbell",weight: 30};
    var poison= {name:"poison",weight: 2};
    var axe = {name:"axe",weight: 15};
    var bat = {name:"bar",weight: 13};
    var trophy = {name:"trophy",weight: 25};
    var pistol = {name:"pistol",weight: 20};
    
    // Rooms
    var DinningRoom= {name:"DinningRoom"} ;
    var Conservatory={name:"Conservatory"};
    var Kitchen={name:"Kitchen"};
    var Study={name:"Study"};
    var Library={name:"Library"};
    var BilliardRoom={name:"BilliardRoom"};
    var Lounge={name:"Lounge"};
    var Ballroom={name:"Ballroom"};
    var Hall={name:"Hall"};
    var Spa={name:"Spa"};
    var LivingRoom={name:"LivingRoom"};
    var Observatory={name:"Observatory"};
    var Theater={name:"Theater"};
    var GuestHouse={name:"GuestHouse"};
    var Patio={name:"Patio"};
    
    
    // Characters Collection
    var charactersArray = [];
    charactersArray.push(mrGreen);
    charactersArray.push(drOrchid);
    charactersArray.push(profPlum);
    charactersArray.push(missScarlet);
    charactersArray.push(mrsPeacock);
    charactersArray.push(mrMustard);
    
    // Rooms' Collection
    var roomsArray = [];
    roomsArray.push(DinningRoom);
    roomsArray.push(Conservatory);
    roomsArray.push(Kitchen);
    roomsArray.push(Study);
    roomsArray.push(Library);
    roomsArray.push(BilliardRoom);
    roomsArray.push(Lounge);
    roomsArray.push(Ballroom);
    roomsArray.push(Hall);
    roomsArray.push(Spa);
    roomsArray.push(Observatory);
    roomsArray.push(Theater);
    roomsArray.push(GuestHouse);
    roomsArray.push(Patio);
    
    // Weapons Collection
    var weaponsArray = [];
    weaponsArray.push(rope);
    weaponsArray.push(knife);
    weaponsArray.push(candlestick);
    weaponsArray.push(dumbbell);
    weaponsArray.push(poison);
    weaponsArray.push(axe);
    weaponsArray.push(bat);
    weaponsArray.push(trophy);
    weaponsArray.push(pistol);
    
    
    
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min; 
      //The maximum is inclusive and the minimum is inclusive 
    }
    
    function randomSelector(array){
    var min=0
    var max= array.length-1
    var randomNumber= getRandomIntInclusive(min, max);
    return array[randomNumber];
    }
    
    function pickMistery(charactersArray,roomsArray,weaponsArray) {
    var randomChar= randomSelector(charactersArray)
    var randomRoom= randomSelector(roomsArray)
    var randomWeap= randomSelector(weaponsArray)  
    var misteryEnvelope = [randomChar,randomRoom,randomWeap]
    return misteryEnvelope
    }
    
    
    
    var misteryEnvelope = pickMistery(charactersArray,roomsArray,weaponsArray);
    
    
    
    function revealMistery(misteryEnvelope){
      console.log(misteryEnvelope[0].first_name + " " + misteryEnvelope[0].last_name +" killed Mr.Boddy using the " +misteryEnvelope[2].name+" in the " +misteryEnvelope[1].name )
    }
    revealMistery(misteryEnvelope)