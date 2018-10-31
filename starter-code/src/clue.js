// Characters

// Weapons

/*
// Rooms
var rooms={
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: "Guest House",
name: "Patio"
}
*/

var charactersArray = [
    (mrGreen = {
      first_name: "Jacob",
      last_name: "Green",
      color: "green",
      description: "He has a lot of connections",
      age: 45,
      image:
        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      occupation: "Entrepreneur"
    }),
    (drOrchid = {
      first_name: "Doctor",
      last_name: "Orchid",
      color: "white",
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      age: 26,
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      ocupation: "Scientist"
    }),
    (profPlum = {
      first_name: "Victor",
      last_name: "Plum",
      color: "purple",
      description: "Billionare video game designer",
      age: 22,
      image: "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
      occupation: "Designer"
    }),
    (missScarlet = {
      first_name: "Kasandra",
      last_name: "Scarlet",
      color: "red",
      description: "She is an A-list movie star with a dark past",
      age: 31,
      image: "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
      occupation: "Actor"
    }),
    (mrsPeacock = {
      first_name: "Eleanor",
      last_name: "Peacock",
      color: "blue",
      description:
        "She is from a wealthy family and uses her status and money to earn popularity",
      age: 36,
      image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
      occupation: "Socialité"
    }),
    (mrMustard = {
      first_name: "Jack",
      last_name: "Mustard",
      color: "yellow",
      description:
        "He is a former football player who tries to get by on his former glory",
      age: 62,
      image: "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
      occupation: "Retired Football player"
    })
  ];
  
  // Rooms' Collection
  var roomsArray = [
    "Dinning Room",
    "Conservatory",
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
    (rope = { name: "rope", weight: 10 }),
    (knife = { name: "knife", weight: 8 }),
    (candlestick = { name: "candlestick", weight: 2 }),
    (dumbbell = { name: "dumbbell", weight: 30 }),
    (poison = { name: "poison", weight: 2 }),
    (axe = { name: "axe", weight: 15 }),
    (bat = { name: "bat", weight: 13 }),
    (trophy = { name: "trophy", weight: 25 }),
    (pistol = { name: "pistol", weight: 20 })
  ];
  /*Create a method randomSelector to randomly select one element from a card stack. 
  The method should receive an array as an argument, and return randomly one of the elements of the array.
  */
  
  function randomSelector(array){
    if(array.length == 0)return undefined 
    //index personaje nos da un valor para el numero de personajes dentro del array de charactersArray
      var indexPersonaje= Math.floor( Math.random()*charactersArray.length )
      // esta asignacióón nos da el nombre y apellido de un personaje random
      array[0]= charactersArray[indexPersonaje].first_name + " " + charactersArray[indexPersonaje].last_name
  
      var indexWepons= Math.floor( Math.random()*weaponsArray.length )
      array[1] = weaponsArray[indexWepons].name
  
      array[2] = roomsArray[Math.floor( Math.random()*roomsArray.length )]
  
  
  
      return array
  }
  /*
  We need to create a pickMistery method that will call randomSelector for each card stack, and return an array with the 3 picked cards, a character, a weapon and a room. Our mystery should be stored on a misteryEnvelope variable.
  */
  var misteryEnvelope=[]
  
  
  function pickMistery(array){
    randomSelector(array)
  }
  
  /*
  Finally, we need to reveal the mystery. Create a revealMistery method, that will receive our misteryEnvelope array as an argument and return the revealed mystery like this:
  
  <FIRST NAME> <LAST NAME> killed Mr.Boddy using the <WEAPON> in the <PLACE>!!!!
   */
  
  function revealMistery (array) {
   
  return array[0] + " killed Mr.Boddy using the " + array[1] + " in the " + array[2] +"!!!!"
  }
   
  //pickMistery(misteryEnvelope)
  //console.log(revealMistery(misteryEnvelope))
  //randomSelector()
  
  