/* Iteration 2: Create the mystery
At the beginning of the game, players shuffle each of the card stacks to create a combination of suspect, weapon and room. This will be the mystery to solve.

Random selector
Declare a function named selectRandom to randomly select one element from a card stack. The function should expect an array as an argument, and should return a random element from the array.

*/
//let arr = [4,5,6,10,4,7]
//console.log(`there are ${arr.length} elements`)

//selectRandom function;

function selectRandom(array){

    const randomPick = Math.floor((Math.random() * (array.length)));
    
      console.log(`the random index is ${randomPick}`);
      console.log(`the card picked is ${array[randomPick]}`)
    return array[randomPick];
    } 
    selectRandom(["pistol","rope","knife"]);
    
    
    //let arr2 = [4,5,6,10,4,7]
    //console.log(arr2[5])
    
    /*Create the mystery
    Declare a function named pickMystery that takes no arguments and returns an object with three properties: suspect, weapon and room, each holding as a value a card of that specific type. You can get a random card of each type by calling selectRandom on each card stack.*/
    
    function pickMystery() {
    /*
    let mysteryResponse = {
      suspect: value1,
      weapon: value2,
      room: value3
    };
    */
    const suspectsArray = [
        {
          firstName: "Jacob",
          lastName: "Green",
          occupation: "Entrepreneur",
          age: 45,
          description: "He has a lot of connections",
          imgUrl: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
          color: "green"
            },
        {
          firstName: "Doctor",
          lastName: "Orchid",
          occupation: "Scientist",
          age: 26,
          description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
          imgUrl : " http://www.radiotimes.com/uploads/images/Original/111967.jpg",
          color: "white"
            },
        {
          firstName: "Victor",
          lastName: "Plum",
          occupation: "Designer",
          age: 22,
          description: "Billionaire video game designer",
          imgUrl : "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
          color: "purple"
            },
        {
          firstName: "Kasandra",
          lastName: "Scarlet",
          occupation: "Actor",
          age: 31,
          description: "She is an A-list movie star with a dark past",
          imgUrl :  "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
          color: "red"
            },
        {
          firstName: "Eleanor",
          lastName: "Peacock",
          occupation: "Socialité",
          age: 36,
          description: "She is from a wealthy family and uses her status and money to earn popularity",
          imgUrl: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
          color: "blue",
            },
        {
          firstName: "Jack",
          lastName: "Mustard",
          occupation: "Retired Football player",
          age: 62,
          description: "He is a former football player who tries to get by on his former glory",
          imgUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
          color: "yellow",
            }
    ]
    
    const weaponsArray = [
        {
        weaponName:"rope",
        weight:10
            },
        {
        weaponName:"knife",
        weight:8
            },
        {
        weaponName:"candlestick",
        weight:2
            },
        {
        weaponName:"dumbbell",
        weight:30
            },
        {
        weaponName:"poison",
        weight:2
            },
        {
        weaponName:"axe",
        weight:15
            },
        {
        weaponName:"bat",
        weight:13
            },
        {
        weaponName:"trophy",
        weight:25
            },  
        {
        weaponName:"pistol",
        weight:20
            }    
    ]
    
    const roomsArray = [
        {
          roomName: "Dining Room"
          },
        {
          roomName: "Conservatory"
          },
        {
          roomName: "Kitchen"
          },
        {
          roomName: "Study"
          },
        {
          roomName: "Library"
          },
        {
          roomName: "Billiard Room"
          },
        {
          roomName: "Lounge"
          },
        {
          roomName: "Ballroom"
          },
        {
          roomName: "Hall"
          },
        { 
          roomName: "Spa"
          },
        {
          roomName: "Living Room"
          },
        {
          roomName: "Observatory"
          },
        {
          roomName: "Theater"
          },
        {
          roomName: "Guest House"
          },
        {
          roomName: "Patio"
          }
    ]
    const mysteryObject = { }
    
    mysteryObject.suspect= suspectsArray[Math.floor((Math.random() * (6)))]
    mysteryObject.weapon= weaponsArray[Math.floor((Math.random() * (9)))]
    mysteryObject.room= roomsArray[Math.floor((Math.random() * (15)))]
    
    console.log(mysteryObject)
    return mysteryObject
        
    }
    
    pickMystery()
    
    
    //const mysteryObject2 = { }
    
    //mysteryObject2.suspect = "Mr Brown"
    //mysteryObject2.weapon = "knife"
    //mysteryObject2.room = "patio"
    
    //console.log(mysteryObject2)
    
    /*Iteration 3: Reveal the mystery
    At last, we are ready to reveal the mystery.
    
    Declare a function named revealMystery that receives an envelope object (such as the one returned by pickMystery) as the single argument, and returns a reveal message in the following format:
    
    <FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!
    */
    
    function revealMystery(someObject){
      console.log(`${someObject.suspect.firstName} ${someObject.suspect.lastName} killed Mr. Boddy using the ${someObject.weapon.weaponName} in the ${someObject.room.roomName}!`)
      return `${someObject.suspect.firstName} ${someObject.suspect.lastName} killed Mr. Boddy using the ${someObject.weapon.weaponName} in the ${someObject.room.roomName}!`
    }
    
    revealMystery({
        suspect: { firstName: 'Victor', lastName: 'Plum' },
        weapon: { weaponName: 'poison' },
        room: { roomName: 'Billiard Room' }
      })
    