
function game() {
  
    // Character Data
    
    var mrGreenData = ["Jacob", "Green", "green", "He has a lot of connections", 45, "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg", "Entrepreneur"]
    
    var drOrchidData = ["Doctor", "Orchid", "white", "PhD in plant toxicology. Adopted daughter of Mr. Boddy", 26, "http://www.radiotimes.com/uploads/images/Original/111967.jpg", "Scientist"]
    
    var profPlumData = ["Victor", "Plum", "purple", "Billionare video game designer", 22, "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg", "Designer"]
    
    var missScarletData = ["Kasandra", "Scarlet", "red", "She is an A-list movie star with a dark past", 31,"https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg", "Actor"]
    
    var mrsPeacockData = ["Eleanor", "Peacock", "blue", "She is from a wealthy family and uses her status and money to earn popularity", 36, "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg", "Socialité"]
    
    var mrMustardData = ["Jack", "Mustard", "yellow", "He is a former football player who tries to get by on his former glory", 62, "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg", "Retired Football player"]
    
    
    // Characters Collection
    
    var charactersArray = [
      "mrGreen",
      "drOrchid",
      "profPlum",
      "missScarlet",
      "mrsPeacock",
      "mrMustard"
      ];
    
    // Rooms' Collection
    
    var roomsArray = [
      "Dining Room",
      "Cnameonservatory",
      "Kitchen",
      "Study",
      "Library",
      "Billiard Room",
      "Lounge",
      "Ballroom",
      "Hall",
      "Spa",
      "Living Room",
      "Observatory",
      "Theater",
      "Guest House",
      "Patio"
    ];
    
    // Weapons Collection
    
    var weaponsArray = [
      ["rope", 10],
      ["knife", 8],
      ["candlestick", 2],
      ["dumbbell", 30],
      ["poison", 2],
      ["axe", 15],
      ["bat", 13],
      ["trophy", 25],
      ["pistol", 20]
    ];
    
    // name: rope        ---   weight: 10
    // name: knife       ---   weight: 8
    // name: candlestick ---   weight: 2
    // name: dumbbell    ---   weight: 30
    // name: poison      ---   weight: 2
    // name: axe         ---   weight: 15
    // name: bat         ---   weight: 13
    // name: trophy      ---   weight: 25
    // name: pistol      ---   weight: 20
    
    //  Object constructor Character
    
    function Character(first, last, color, descr, age, img, job) {
        
        this.firstName = first;
        this.lastName = last;
        this.eyeColor = color;
        this.description = descr;
        this.age = age;
        this.image = img;
        this.occupation = job;
    }
    
    var mrGreen = new Character(...mrGreenData)
    
    // Object constructor Room
    
    function Room(name) {
        this.name = name
    }
    
    // Object contrusctor Weapon
    
    function Weapon(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    
    // Set Randomizer
    
    function setRandomizer(char, room, weapon) {
      
      var randomSet = [];
      var randomChar = "";
      var randomCharName = "";
    
      var randomWeaponName = [];
    
    
      function charRandomizer(char) {
    
        randomCharName = char[Math.floor(Math.random() * char.length)];
        randomChar = randomCharName + "Data";
      }
    
      function weaponRandomizer(weapon) {
    
        randomWeaponName = weapon[Math.floor(Math.random() * weapon.length)];
      }
    
      charRandomizer(char);
      weaponRandomizer(weapon);
    
      randomSet.push(new Character(...eval(randomChar)));
      randomSet.push(room[Math.floor(Math.random() * room.length)]);
      randomSet.push(new Weapon(...randomWeaponName));
    
     return randomSet;
    };
    
    var envelope = setRandomizer(charactersArray, roomsArray, weaponsArray);
    
    /*
    function revealMystery(mystery) {
    
      alert(`${mystery[0].firstName} ${mystery[0].lastName} killed Mr.Boddy using the ${mystery[2].name} in the ${mystery[1]}!!!!`);
    }
    
    revealMystery(envelope);
    */
    
    // console.log(envelope);
    
    function printCard(mystery) {
    
      document.getElementById("murdererImg").setAttribute("src", `${mystery[0].image}`);
    
      document.getElementById("murdererName").innerHTML = mystery[0].firstName + " - " + mystery[0].lastName;
    
      document.getElementById("weapon").innerHTML = "With a " + mystery[2].name;
      document.getElementById("room").innerHTML = "In the " + mystery[1];
    };
    
    printCard(envelope);
      
    }
    
    game();
    
    window.onload = function(){
      game();
    }
    
        