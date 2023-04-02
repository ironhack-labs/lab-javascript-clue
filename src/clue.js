// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName:'Gojo',
        lastName: 'Satoru',
        occupation: 'wizard',
        age: 28,
        description: 'he is pretty clever',
        image: 'https://i.pinimg.com/736x/6a/21/97/6a219764a014115825643c61226c3600.jpg',
        color: 'blue',
    
    },
    {
        firstName:'Megumi',
        lastName: 'Fushiguro',
        occupation: 'student',
        age: 16,
        description:'he has blue eyes',
        image: 'https://i.pinimg.com/736x/b5/7f/99/b57f99e90306a3cde3720570377d4862.jpg',
        color:'green',
    },
    {
        firstName:'Yuji',
        lastName: 'Itadori',
        occupation: 'mangaka',
        age: 15,
        description:'he has pink hair',
        image: 'https://www.anime-planet.com/images/characters/yuji-itadori-149554.jpg?t=1565985620',
        color:'pink',
    },
    {
        firstName:'Nobara',
        lastName: 'Kugisaki',
        occupation: 'streamer',
        age: 17,
        description:'she likes to play videogames',
        image: 'https://jujutsu-kaisen.fandom.com/es/wiki/Nobara_Kugisaki?file=Nobara+Kugisaki+-+Anime.jpg',
        color:'orange',
    
    },
    {
    
        firstName:'Yuta',
        lastName: 'Okkotsu',
        occupation: 'book blogger',
        age: 21,
        description:'he likes to go tripping',
        image: 'https://jujutsu-kaisen.fandom.com/es/wiki/Yuta_Okkotsu?file=YutaOkkotsu-Anime.jpg',
        color:'yellow',
    
    },
    {
        firstName:'Inumaki',
        lastName: 'Toge',
        occupation: 'chef',
        age: 23,
        description:'he loves to eat',
        image: 'https://jujutsu-kaisen.fandom.com/es/wiki/Toge_Inumaki?file=Toge+Inumaki+-+Anime.jpg',
        color:'purple',
    
    },
    ];
    
    // Rooms Array
    
    const roomsArray = [
    
        { name: "Dining Room" },
        { name: "Bathroom" },
        { name: "Kitchen" },
        { name: "Hall" },
        { name: "Entrance" },
        { name: "Garage" },
        { name: "Basement" },
        { name: "Office" },
        { name: "Guest Room" },
        { name: "Garden" },
        { name: "Living Room" },
        { name: "Penthhouse" },
        { name: "Atic" },
        { name: "Play Room" },
        { name: "Driveway" },
    
    ];
    
    // Weapons Array
    
    const weaponsArray = [
    
    {name: "axe", weight: .5  },
    {name: "rifle", weight: 1  },
    {name: "knife", weight: .25  },
    {name: "shotgun", weight: 4  },
    {name: "rocket launcher", weight: 25  },
    {name: "ice pick", weight: .75  },
    {name: "machete", weight: 36  },
    {name: "sword", weight: 55  },
    {name: "revolver", weight: 2  },
    
    
    
    
    ];
    
    
    // ITERATION 2
    function selectRandom(array) {
        let rng = Math.trunc(Math.random() * array.length);
        let finalRandomNumber = array[rng];
        return finalRandomNumber};
    
    
    function pickMystery() {
        let mystery = {
          suspect: selectRandom(suspectsArray),
          weapon: selectRandom(weaponsArray),
          room: selectRandom(roomsArray),
        };
        return mystery;
      }
      function revealMystery() {
        let impostor= pickMystery()
        let message = `${impostor.suspect.firstName} ${
          impostor.suspect.lastName
        } killed Mr.Boddy using the ${impostor.weapon.name} in the ${
          impostor.room.name
        }!`;
        return(message); }
    revealMystery()