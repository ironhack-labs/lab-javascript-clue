var mrGreen={
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    occupation:   'Entrepreneur',
    }
    
    
    var drOrchid={
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    occupation:   'Scientist'
    }
    
    
    var profPlum={
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
    occupation:   'Designer',
    }
    
    
    var missScarlet={
       first_name:   'Kasandra',
       last_name:    'Scarlet',
       color:        'red',
       description:  'She is an A-list movie star with a dark past',
       age:          31,
       image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
       occupation:   'Actor'
    }
    
    
    var mrsPeacock ={
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'
    }

// Rooms


var dinningRoom = {
    name: "DinningRoom",

}
var conservatory = {
    name: "Conservatory",
    
}
var kitchen = {
    name: "Kitchen",
    
}
var study = {
    name: "Study",
    
}
var library = {
    name: "Library",
    
}

var billiardRoom = {
    name: "Billiard Room",
    
}
var lounge = {
    name: "Lounge",
    
}
var ballroom = {
    name: "Ballroom",
    
}






var rope ={
    name: "rope",
    weight: 10
}

var knife ={
    name: "knife",
    weight: 8
}

var axe ={
    name: "axe",
    weight: 15
}



// Characters Collection
var charactersArray = [mrGreen, drOrchid, profPlum, missScarlet];

// Rooms' Collection
var roomsArray = [dinningRoom, kitchen, study, lounge];

// Weapons Collection
var weaponsArray = [rope, knife, axe]


function randomSelector(arr){
    var randomIndex =Math.floor(Math.random()*arr.length)
    var randomEl = arr[randomIndex]
    arr.splice(randomIndex, 1);
    return randomEl

}

function pickMistery(){
var result = []
result.push(randomSelector(charactersArray), randomSelector(roomsArray), randomSelector(weaponsArray))
return result
}

var misteryEnvelope = pickMistery();

function revealMistery(misteryEnvelope){

    console.log(misteryEnvelope[0].first_name + " " +  misteryEnvelope[0].last_name +" killed Mr.Boddy using the " + misteryEnvelope[2].name + " in the "+misteryEnvelope[1].name+"!!!!")
}

revealMistery(misteryEnvelope);