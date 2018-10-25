var mrGreen ={
    first_name:   "Jacob",
    last_name:    "Green",
    color:        "green",
    description:  "He has a lot of connections",
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   "Entrepreneur",
  };
  
  var drOrchid ={
    first_name:   "Doctor",
    last_name:    "Orchid",
    color:        "white",
    description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    age:          26,
    image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    ocupation:   "Scientist",
  };
  
  var profPlum = {
    first_name:   "Victor",
    last_name:    "Plum",
    color:        "purple",
    description:  "Billionare video game designer",
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   "Designer",
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
    occupation:   "Socialité",
  };
  var mrMustard = {
    first_name:   "Jack",
    last_name:    "Mustard",
    color:        "yellow",
    description:  "He is a former football player who tries to get by on his former glory",
    age:          62,
    image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
    occupation:   "Retired Football player",
  };
  
  
  var cluedo = {
    
    weapons: ["rope", "knife", "candlestick", "dumbell","poison", "axe", "bat", "trophy", "pistol"],
    rooms: ["Dinning room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"],
    charactersArray: ["mrGreen", "mrsPeacock", "mrMustard", "missScarlet", "drOrchid", "profPlum"],
    
    baddie: {
      number: 0,
      who: [],
      weapon: [],
      room: [],
    },
    
    cardsHolding: {
      number: 0,
      weapons: [],
      rooms: [],
      who: [],
    },
  
    drawCard(){
      this.cardsHolding.who[this.cardsHolding.number] = this.charactersArray[Math.floor(Math.random()*this.charactersArray.length)];
      this.cardsHolding.weapons[this.cardsHolding.number] = this.weapons[Math.floor(Math.random()*this.weapons.length)];
      this.cardsHolding.rooms[this.cardsHolding.number] = this.rooms[Math.floor(Math.random()*this.rooms.length)];
      this.cardsHolding.number++;
      console.log(this.cardsHolding.weapons);
      console.log(this.cardsHolding.rooms);
      console.log(this.cardsHolding.who); 
    }, 
    
    drawBaddie(){
      this.baddie.who[this.baddie.number] = this.charactersArray[Math.floor(Math.random()*this.charactersArray.length)];
      this.baddie.weapon[this.baddie.number] = this.weapons[Math.floor(Math.random()*this.weapons.length)];
      this.baddie.room[this.baddie.number] = this.rooms[Math.floor(Math.random()*this.rooms.length)];
    },
    
    guess(person, room, weapon){
  
      let guess = [person, room, weapon];
      let compare = [this.baddie.weapon, this.baddie.who, this.baddie.room];
      let times = 0; 

      if(person == this.baddie.who && room == this.baddie.room && this.baddie.weapon == weapon){
          console.log("Ye got the bastard!");
      }
      else if(person != this.baddie.who || room != this.baddie.room || this.baddie.weapon != weapon){
        //times is not working but I'll fix it later
        times++;
         (times > 5)? console.log("You tried so hard and yet the killer got away, you lose."):check(guess);
        
          function check(arg){
            
            if(arg == compare[0]){
              console.log("You got the weapon, now where and who did it...");
            }
            else if(arg == compare[1]){
              console.log("You got the person right, but with what and where did he/she do it...");
            }
            else if(arg == compare[2]){
              console.log("You got the locations, but with what and who did it...");
            }
          }
        }
    },

  }