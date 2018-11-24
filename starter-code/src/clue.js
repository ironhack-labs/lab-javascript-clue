// Characters

let mrGreen={
    first_name:   'Jacob',
    last_name:    'Green',
    color:        'green',
    description:  'He has a lot of connections',
    age:          45,
    image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation:   'Entrepreneur'

}

let drOrchid ={
    first_name:   'Doctor',
    last_name:    'Orchid',
    color:        'white',
    description:  'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age:          26,
    image:        'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation:   'Scientist'

}

let profPlum= {
    first_name:   'Victor',
    last_name:    'Plum',
    color:        'purple',
    description:  'Billionare video game designer',
    age:          22,
    image:        'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg',
    occupation:   'Designer'

}

let missScarlet= {
    first_name:   'Kasandra',
    last_name:    'Scarlet',
    color:        'red',
    description:  'She is an A-list movie star with a dark past',
    age:          31,
    image:        'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation:   'Actor'
}


let mrsPeacock ={
    first_name:   'Eleanor',
    last_name:    'Peacock',
    color:        'blue',
    description:  'She is from a wealthy family and uses her status and money to earn popularity',
    age:          36,
    image:        'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation:   'Socialité'

}

let mrMustard ={
    first_name:   'Jack',
    last_name:    'Mustard',
    color:        'yellow',
    description:  'He is a former football player who tries to get by on his former glory',
    age:          62,
    image:        'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation:   'Retired Football player'
}


// Characters Collection
var charactersArray = [mrGreen,drOrchid, profPlum, missScarlet,mrsPeacock,mrMustard];

// Rooms' Collection
var roomsArray = [
    'Dinning Room'
    ,'Conservatory'
    ,'Kitchen'
    ,'Study'
    ,'Library'
    ,'Billiard Room'
    ,'Lounge'
    ,'Ballroom'
    ,'Hall'
    ,'Spa'
    ,'Living Room'
    ,'Observatory'
    ,'Theater'
    ,'Guest House'
    ,'Patio'
];

// Weapons Collection
var weaponsArray = [
rope={
    name: 'rope',
    weight: 10
},
knife={
    name: 'knife',
    weight: 8
},
candlestick={
    name: 'candlestick',
    weight: 2
},
dumbbell={
    name: 'dumbbell',
    weight: 30
},
poison={
    name: 'poison',
    weight: 2
},
axe={
    name: 'axe',
    weight: 15
},
bat={
    name: 'bat',
    weight: 13
},
trophy={
    name: 'trophy',
    weight: 25
},
pistol={
    name: 'pistol',
    weight: 20
}
];



function randomSelector(arr){
    if (arr.length<0){
        return undefined;
    }else if(arr.length===1){
        return arr[0];
    }else{
        return arr[Math.floor(Math.random()*arr.length)];
    }
}

function pickMistery(){
    let misteryEnvelope=new Array();
    misteryEnvelope.push(randomSelector(charactersArray))

        misteryEnvelope.push(randomSelector(weaponsArray))
        misteryEnvelope.push(randomSelector(roomsArray))
        
    return misteryEnvelope;

    }

function revealMistery(){
    let mistery=pickMistery();
    return `${mistery[0].first_name} ${mistery[0].last_name} killed Mr.Boddy using the ${mistery[1].name} in the ${mistery[2]}!!!!`
}
