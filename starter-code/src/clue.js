// ITERATION 1

// Suspects Collection
let suspectsArray = [
    {
    nickName: "mrGreen",
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green" 
    },
    {
    nickName: "drOrchid",
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
    },
    {
    nickName: "profPlum",
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
    }
    /*missScarlet<br>
    firstName: Kasandra<br>
    lastName: Scarlet<br>
    occupation: Actor<br>
    age: 31<br>
    description: She is an A-list movie star with a dark past<br>
    image: https://www.radiotimes.com/uploads/images/Original/111967.jpg<br>
    color: red<br>
    
    mrsPeacock<br>
    firstName: Eleanor<br>
    lastName: Peacock<br>
    occupation: Socialité<br>
    age: 36<br>
    description: She is from a wealthy family and uses her status and money to earn popularity<br>
    image: https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg<br>
    color: blue<br>
    
    mrMustard<br>
    firstName: Jack<br>
    lastName: Mustard<br>
    occupation: Retired Football player<br>
    age: 62<br>
    description: He is a former football player who tries to get by on his former glory<br>
    image: https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg<br>
    color: yellow<br>*/
    ]; 
    
    // Rooms Collection
    let roomsArray = [
        {name: "Dining Room"},
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
        
    ];
    // Weapons Collection
    let weaponsArray = [
        {name: "rope", weight: 10},
        {name: "knife", weight: 8},
        {name: "candlestick", weight: 2},
        {name: "dumbbell", weight: 30},
        {name: "poison", weight: 2},
        {name: "axe", weight: 15},
        {name: "bat", weight: 13},
        {name: "trophy", weight: 25},
        {name: "pistol", weight: 20}
    ];
    
    
    function selectRandom(mySuspectsArray){
        let result = Math.floor(Math.random() * mySuspectsArray.length)
        return result
        console.log(result)
    }
    console.log(selectRandom(suspectsArray))

// ITERATION 3
