const clue = {
    charactersArray: [
           { 
             
                first_name:   "Jacob",
                last_name:    "Green",
                color:        "green",
                description:  "He has a lot of connections",
                age:          "45",
                image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
                occupation:   "Entrepreneur"
             },  
              {
                first_name:   "Doctor",
                last_name:    "Orchid",
                color:        "white",
                description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
                age:          "26",
                image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
                ocupation:   "Scientist"
             }, 
              {
                first_name:   "Victor",
                last_name:    "Plum",
                color:        "purple",
                description:  "Billionare video game designer",
                age:          "22",
                image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
                occupation:   "Designer"
             },
             {
                first_name:   "Kasandra",
                last_name:    "Scarlet",
                color:        "red",
                description:  "She is an A-list movie star with a dark past",
                age:          "31",
                image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
                occupation:   "Actor"
             },
              {
                first_name:   "Eleanor",
                last_name:    "Peacock",
                color:        "blue",
                description:  "She is from a wealthy family and uses her status and money to earn popularity",
                age:          "36",
                image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
                occupation:   "Socialité",
             },
             {
                first_name:   "Jack",
                last_name:    "Mustard",
                color:        "yellow",
                description:  "He is a former football player who tries to get by on his former glory",
                age:          "62",
                image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
                occupation:   "Retired Football player"
             }
            
        ],
    weaponsArray: [
{
name: "rope",
weight: "10"
},
{
    name: "knife",
    weight: "8"
},
{
    name: "candlestick" ,
    weight: "2"
},
{
    name: "dumbbell",   
    weight: "30"
},
{
    name: "poison",
    weight: "2"
},
{
    name: "axe",
    weight: "15"
},
{
    name: "bat",
    weight: "13"
},
{
    name: "trophy",
    weight: "25"
},
{
    name: "pistol",
    weight: "20"
}
],

roomsArray: [
{
    name: "Dining Room"
},
{
    name: "Conservatory"    
},
{
    name: "Kitchen"
},
{
    name: "Study"
},
{
    name: "Library"
},
{
    name: "Billiard Room"
},
{
    name: "Lounge"
},
{
    name: "Ballroom"
},
{
    name: "Hall"
},
{
    name: "Dinning Room"
},
{
 name: "Spa"
},
{
    name: "Living Room"
},
{
    name: "Observatory"
},
{
    name: "Conservatory"
},
{
    name: "Theater"
},
{
    name: "Guest House"
},
{
    name: "Patio"
}
] 

    
}


function randomSelector(Ar){
    let valor = Ar[Math.floor(Math.random()*(Ar.length))]
return valor 
}

function pickMistery() {
    let characters =randomSelector(clue.charactersArray)
    let weapon = randomSelector(clue.weaponsArray)
    let room = randomSelector(clue.roomsArray)
    let misteryEnvelope = [
        characters, weapon, room
    ]
    return misteryEnvelope 
}

function revealMistery(pickMistery) {
    console.log(pickMistery[0].first_name," ", pickMistery[0].last_name, " killed Mr.Boddy using the ", pickMistery[1].name, " in the ", pickMistery[2].name, " !!!")
}