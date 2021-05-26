// ITERATION 1

// Suspects Collection
const suspectsArray = [ 
        {firstName = 'Jacob',
            lastName = 'Evergreen',
            occupaction = 'Enterpreneur',
            age = 45,
            description = 'He has a lot of connections.',
            color = 'green' },

        { firstName = 'Doctor',
            lastName = 'Orchid',
            occupaction = 'Scientist',
            age = 26,
            description = 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
            color = 'white' },

        { firstName = 'Victor',
            lastName = 'Plum',
            occupaction = 'Designer',
            age = 22,
            description = 'Billionaira video game designer',
            color = 'purple'},

        { firstName = 'Kasandra',
            lastName = 'Scarlet',
            occupaction = 'Actor',
            age = 31,
            description = 'She is an A-list movie star with a dark past',
            color = 'red'},

        {firstName = 'Eleanor',
            lastName = 'Peacock',
            occupaction = 'Socialité',
            age = 36,
            description = 'She is from a wealthy family and uses her status and money to earn popularity',
            color = 'blue'},

        { firstName = 'Jack',
            lastName = 'Mustard',
            occupaction = 'Retired football player',
            age = 62,
            description = 'He is a former football player who tries get by own his former glory',
            color = 'yellow'},
];
 

// Rooms Collection
const roomsArray = [
    'Dinning room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge',
    'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'
];

// Weapons Collection
const weaponsArray = [
        { name = 'rope',
            wheight = 10,},
         {name = 'knife',
            wheight = 8,},
        { name = 'candlestick',
            wheight = 2},
        {name = 'dumbell',
            wheight = 30},
        { name = 'poison',
            wheight = 2},
        { name = 'axe',
            wheight = 15 },
        { name = 'bat',
            wheight = 13},
        {name = 'trophy',
            wheight = 20 },
        { name = 'pistol',
            wheight = 20},
 ];

// ITERATION 2
    function selectMurderer(name){
        let murderer = name[Math.round(Math.random()*(name.lengh -1))];
        return murderer;

    function selectWeapon(stringWeapon){
            let weapon = stringWeapon[Math.round(Math.random()*(stringWeapon.lengh -1))];
            return weapon;
    } 

    function randomRoom(stringRoom){
        let room = stringRoom[Math.round(Math.random()*(stringRoom.lengh - 1))];
        return room;
    }

// ITERATION 3
    function pickMistery(){
        let mistery = [];
        mistery.push(randomRoom(roomsArray));
        mistery.push(selectWeapon(weaponsArray));
        mistery.push(selectMurderer(suspectsArray));

        return mistery;
    }

    function revealMistery(){
        let reveal = pickMistery();
        console.log(reveal[1].firstName + "" + reveal[1].lastName + "killed Mr. Boddy using  the" + 
        reveal[2].name + "in the" + reveal[0] + "!!!!" );
    }
}

    revealMistery();
